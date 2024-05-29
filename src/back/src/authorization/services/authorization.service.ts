import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/services/user.service';
import { ConfigService } from '@nestjs/config';
import { ISignUp } from '../interfaces/sign-up.interface';
import { EncryptionService } from './encryption.service';
import { AuthorizationError } from '../authorization.error';
import { TemporaryPasswordService } from '../../user/services/temporary-password.service';
import { IUserEntity } from 'src/user/interfaces/user-entity.interface';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly encryptionService: EncryptionService,
    private readonly temporaryPasswordService: TemporaryPasswordService
  ) {}

  public async signup(payload: ISignUp): Promise<string> {
    const user = await this.userService.find({
      where: {
        email: payload.email
      }
    });

    if (user) {
      throw AuthorizationError.UserAlreadyExists();
    }

    const hash = await this.encryptionService.hashPassword(payload.password);

    const token = await this.jwtService.signAsync(
      { email: payload.email },
      {
        expiresIn: this.configService.get('JWT_EXPIRATION_TIME')
      }
    );
    await this.userService.create({
      ...payload,
      password: hash
    });

    return token;
  }

  public async signin(email: string, password: string): Promise<string> {
    const user = await this.userService.find({
      where: {
        email
      }
    });

    if (!user) {
      throw AuthorizationError.UserNotFound();
    }

    const temporaryPassword =
      await this.temporaryPasswordService.findWithRelationsByUserId(user.id);

    const passwordToCheck = temporaryPassword?.password || user.password;

    const isPasswordCorrect = await this.encryptionService.comparePassword(
      password,
      passwordToCheck
    );
    if (!isPasswordCorrect) {
      throw AuthorizationError.WrongPassword();
    }

    const expiresIn = this.configService.get('JWT_EXPIRATION_TIME')

    const token = await this.jwtService.signAsync(
      { email },
      {
        expiresIn: expiresIn
      }
    );

    return token;
  }

  public async getCurrentUser(email: string): Promise<IUserEntity> {
    const user = await this.userService.find({
      where: {
        email
      }
    });

    if (!user) {
      throw AuthorizationError.UserNotFound();
    }

    return user;
  }
}

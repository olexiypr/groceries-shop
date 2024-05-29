import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthorizationError } from '../authorization.error';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const authorizationHeader = context.switchToHttp().getRequest()
      .headers.authorization;

    if (!authorizationHeader) {
      throw AuthorizationError.AuthorizationHeaderNotFound();
    }

    const token = authorizationHeader.split(' ')[1];

    const payload = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET
    });

    if (!payload) {
      throw AuthorizationError.InvalidToken();
    }

    const user = await this.userService.find({
      where: {
        email: payload.email
      }
    });

    if (!user) {
      throw AuthorizationError.UserNotFound();
    }

    return true;
  }
}

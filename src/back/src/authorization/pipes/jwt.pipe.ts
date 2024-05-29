import { JwtService } from '@nestjs/jwt';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { IJWTPayload } from '../interfaces/jwt-payload.interface';
import { IJWTPipePayload } from '../interfaces/jwt-pipe-payload.interface';

@Injectable()
export class JWTPipe implements PipeTransform {
  constructor(private readonly jwtService: JwtService) {}

  public async transform(
    payload: IJWTPipePayload,
    metadata: ArgumentMetadata
  ): Promise<IJWTPayload> {
    const jwtPayload = await this.jwtService.verifyAsync(payload.jwt);

    return { sub: jwtPayload.email };
  }
}

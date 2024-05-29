import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JWTPipe } from '../pipes/jwt.pipe';
import { IJWTPipePayload } from '../interfaces/jwt-pipe-payload.interface';

export const GetAuthorizationHeader = createParamDecorator(
  (_, context: ExecutionContext): IJWTPipePayload => {
    const ctx = context.switchToHttp().getRequest();

    return {
      jwt: ctx.headers.authorization.split(' ')[1]
    };
  }
);

export const JWTPayload = (): ParameterDecorator =>
  GetAuthorizationHeader(JWTPipe);

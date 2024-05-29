import { ArgumentsHost, Catch } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AuthorizationFilter {
  public catch(exception: Error, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();

    response.status(401).send({
      error: exception.message
    });
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class AuthorizationResponse {
  @ApiProperty({ example: 'eyJhbG...eZs' })
  public readonly token: string;

  constructor(token: string) {
    this.token = token;
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordResponse {
  @ApiProperty({ example: true })
  public readonly reset: boolean;

  constructor(reset: boolean) {
    this.reset = reset;
  }
}

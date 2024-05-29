import { ApiProperty } from '@nestjs/swagger';

export class ForgotPasswordResponse {
  @ApiProperty({ example: true })
  public readonly recovered: boolean;

  constructor(recovered: boolean) {
    this.recovered = recovered;
  }
}

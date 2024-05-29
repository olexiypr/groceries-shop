import { ApiProperty } from '@nestjs/swagger';

export class ConfirmEmailResponse {
  @ApiProperty({ example: true })
  public readonly confirmed: boolean;

  constructor(confirmed: boolean) {
    this.confirmed = confirmed;
  }
}

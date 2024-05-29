import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class ResetPasswordSchema {
  @IsString()
  @Length(8)
  @ApiProperty({ example: '12345678' })
  public readonly newPassword: string;
}

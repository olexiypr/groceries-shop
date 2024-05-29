import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ForgotPasswordSchema {
  @IsEmail()
  @ApiProperty({ example: 'johndoe@gmail.com' })
  public readonly email: string;
}

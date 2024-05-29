import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class SignInSchema {
  @IsEmail()
  @ApiProperty({ example: 'johndoe@gmail.com' })
  public readonly email: string;

  @IsString()
  @Length(8)
  @ApiProperty({ example: '12345678' })
  public readonly password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class SignUpSchema {
  @IsString()
  @ApiProperty({ example: 'John Doe' })
  public readonly name: string;

  @IsEmail()
  @ApiProperty({ example: 'johndoe@gmail.com' })
  public readonly email: string;

  @IsString()
  @Length(8)
  @ApiProperty({ example: '12345678' })
  public readonly password: string;

  @IsPhoneNumber()
  @ApiProperty({ example: '+380112223344' })
  public readonly phone?: string;

  @IsString()
  @ApiProperty({ example: 'Ukraine, Kyiv' })
  public readonly address?: string;
}

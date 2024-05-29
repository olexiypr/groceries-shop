import { ApiProperty } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/interfaces/user-entity.interface';
import { Exclude } from 'class-transformer';

export class UserEntityResponse {
  @ApiProperty({ example: 1 })
  public readonly id: number;

  @ApiProperty({ example: 'John' })
  public readonly name: string;

  @ApiProperty({ example: 'john@gmail.com' })
  public readonly email: string;

  @ApiProperty({ example: '123456789' })
  public readonly phone?: string;

  @ApiProperty({ example: 'New York' })
  public readonly address?: string;

  @Exclude()
  public readonly password: string;

  @Exclude()
  public readonly isVerified: boolean;
  constructor(user: Partial<IUserEntity>) {
    Object.assign(this, user);
  }
}

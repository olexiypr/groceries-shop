import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class OrderedProductSchema {
  @IsInt()
  @ApiProperty({ example: 1 })
  public readonly id: number;

  @IsInt()
  @ApiProperty({ example: 3 })
  public readonly quantity: number;
}

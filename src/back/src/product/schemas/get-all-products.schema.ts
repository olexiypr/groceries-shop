import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class GetAllProductsSchema {
  @IsInt()
  @Min(1)
  @ApiProperty({ example: 10, required: false })
  public readonly limit?: number;

  @IsInt()
  @Min(0)
  @ApiProperty({ example: 2, required: false })
  public readonly offset?: number;
}

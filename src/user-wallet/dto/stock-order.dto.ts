import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class StockOrderDto {
  @ApiProperty({ example: 'PETR4' })
  @IsNotEmpty()
  @IsString()
  symbol: string;

  @ApiProperty({ example: 10 })
  @IsNotEmpty()
  @IsPositive()
  amount: number;
}

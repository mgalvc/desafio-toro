import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class StockOrderDto {
  @IsNotEmpty()
  @IsString()
  symbol: string;

  @IsNotEmpty()
  @IsPositive()
  amount: number;
}

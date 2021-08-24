import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";

export type Events = 'TRANSFER';

export class DepositTarget {
  @IsString()
  bank: string;

  @IsString()
  branch: string;

  @IsString()
  account: string;
}

export class DepositOrigin {
  @IsString()
  bank: string;

  @IsString()
  branch: string;

  @IsString()
  cpf: string;
}

export class DepositDto {
  @IsString()
  event: Events;

  @ValidateNested()
  @Type(() => DepositTarget)
  target: DepositTarget;

  @ValidateNested()
  @Type(() => DepositOrigin)
  origin: DepositOrigin;

  @IsNumber()
  amount: number;
}
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";

export type Events = 'TRANSFER';

export class DepositTarget {
  @ApiProperty()
  @IsString()
  bank: string;

  @ApiProperty()
  @IsString()
  branch: string;

  @ApiProperty()
  @IsString()
  account: string;
}

export class DepositOrigin {
  @ApiProperty()
  @IsString()
  bank: string;

  @ApiProperty()
  @IsString()
  branch: string;

  @ApiProperty()
  @IsString()
  cpf: string;
}

export class DepositDto {
  @ApiProperty()
  @IsString()
  event: Events;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DepositTarget)
  target: DepositTarget;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DepositOrigin)
  origin: DepositOrigin;

  @ApiProperty()
  @IsNumber()
  amount: number;
}
import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  password: string;
}
import { HttpException, HttpStatus } from "@nestjs/common";

export default class UserNotFoundError extends HttpException {
  constructor() {
    super('Credenciais inválidas', HttpStatus.BAD_REQUEST);
  }
}
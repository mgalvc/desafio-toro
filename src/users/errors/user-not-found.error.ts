import { HttpException, HttpStatus } from "@nestjs/common";

export default class UserNotFoundError extends HttpException {
  constructor() {
    super('Usuário não encontrado', HttpStatus.NOT_FOUND);
  }
}
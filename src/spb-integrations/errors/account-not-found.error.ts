import { HttpException, HttpStatus } from '@nestjs/common';

export default class AccountNotFoundError extends HttpException {
  constructor() {
    super('Número de conta inválido', HttpStatus.BAD_REQUEST);
  }
}

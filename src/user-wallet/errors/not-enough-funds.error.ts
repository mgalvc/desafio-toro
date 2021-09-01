import { HttpException, HttpStatus } from '@nestjs/common';

export default class NotEnoughFundsError extends HttpException {
  constructor() {
    super('Saldo insuficiente', HttpStatus.BAD_REQUEST);
  }
}

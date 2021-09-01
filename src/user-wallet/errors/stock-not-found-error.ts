import { HttpException, HttpStatus } from '@nestjs/common';

export default class StockNotFoundError extends HttpException {
  constructor() {
    super('Ação não encontrada', HttpStatus.BAD_REQUEST);
  }
}

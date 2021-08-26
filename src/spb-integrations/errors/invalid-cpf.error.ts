import { HttpException, HttpStatus } from '@nestjs/common';

export default class InvalidCpfError extends HttpException {
  constructor() {
    super('CPF de origem não é o mesmo do destino', HttpStatus.BAD_REQUEST);
  }
}

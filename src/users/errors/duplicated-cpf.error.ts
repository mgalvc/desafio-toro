import { HttpException, HttpStatus } from '@nestjs/common';

export default class DuplicatedCpfError extends HttpException {
  constructor() {
    super('Este CPF já está sendo utilizado', HttpStatus.BAD_REQUEST);
  }
}

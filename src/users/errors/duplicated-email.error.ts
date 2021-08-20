import { HttpException, HttpStatus } from "@nestjs/common";

export default class DuplicatedEmailError extends HttpException {
  constructor() {
    super('Este e-mail já está sendo utilizado', HttpStatus.BAD_REQUEST);
  }
}
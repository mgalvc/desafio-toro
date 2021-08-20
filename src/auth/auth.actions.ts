import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthActions {
  constructor(
    private repository: AuthRepository
  ) {}

  async login(loginUser: LoginUserDto) {
    const { email, password } = loginUser;
    const user = await this.repository.findByEmailAndPassword(email, password);
    return `will login ${user.toString()}`
  }
}

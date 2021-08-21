import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthActions {
  constructor(
    private repository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginUser: LoginUserDto) {
    const { cpf, password } = loginUser;
    const user = await this.repository.findByCpfAndPassword(cpf, password);
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}

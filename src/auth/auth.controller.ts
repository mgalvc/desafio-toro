import { Body, Controller, Post } from '@nestjs/common';
import { AuthActions } from './auth.actions';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private actions: AuthActions
  ) {}

  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return this.actions.login(user);
  }
}

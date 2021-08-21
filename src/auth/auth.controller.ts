import { Body, Controller, Post } from '@nestjs/common';
import { AuthActions } from './auth.actions';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { postCreatedResponse, postBadRequestResponse } from './openapi/responses';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private actions: AuthActions
  ) {}

  @Post('login')
  @ApiResponse(postCreatedResponse)
  @ApiResponse(postBadRequestResponse)
  async login(@Body() user: LoginUserDto) {
    return this.actions.login(user);
  }
}

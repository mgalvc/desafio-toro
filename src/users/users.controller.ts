import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersActions } from './users.actions';
import { ApiTags, ApiResponse, ApiSecurity, ApiProduces } from '@nestjs/swagger';
import {
  getOkResponse,
  getNotFoundResponse,
  postCreatedResponse,
  postBadRequestResponse
} from './openapi/responses';
import { Public } from 'src/auth/auth-public.decorator';
import { Request } from 'express';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private actions: UsersActions) {}

  @Get()
  @ApiResponse(getOkResponse)
  @ApiResponse(getNotFoundResponse)
  @ApiSecurity('bearer')
  async get(@Req() req: Request): Promise<any> {
    const { _id } = req.user as any;
    return this.actions.get(_id);
  }

  @Post()
  @Public()
  @HttpCode(201)
  @ApiResponse(postCreatedResponse)
  @ApiResponse(postBadRequestResponse)
  async create(@Body() user: CreateUserDto): Promise<any> {
    return this.actions.create(user);
  }
}

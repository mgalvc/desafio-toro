import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersActions } from './users.actions';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { getOkResponse, getNotFoundResponse, postCreatedResponse, postBadRequestResponse, putOkResponse, putNotFoundResponse } from './openapi/responses';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private actions: UsersActions
  ) {}

  @Get('/:id')
  @ApiResponse(getOkResponse)
  @ApiResponse(getNotFoundResponse)
  async get(@Param('id') id: number): Promise<any> {
    return this.actions.get(id);
  }

  @Post()
  @HttpCode(201)
  @ApiResponse(postCreatedResponse)
  @ApiResponse(postBadRequestResponse)
  async create(@Body() user: CreateUserDto): Promise<any> {
    return this.actions.create(user);
  }

  @Put('/:id')
  @ApiResponse(putOkResponse)
  @ApiResponse(putNotFoundResponse)
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<any> {
    return this.actions.update(id, user);
  }
}

import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersActions } from './users.actions';

@Controller('users')
export class UsersController {
  constructor(
    private actions: UsersActions
  ) {}

  @Get('/:id')
  async get(@Param('id') id: number): Promise<any> {
    return this.actions.get(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() user: CreateUserDto): Promise<any> {
    return this.actions.create(user);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() user: UpdateUserDto): Promise<any> {
    return this.actions.update(id, user);
  }
}

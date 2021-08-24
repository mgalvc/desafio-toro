import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersActions {
  constructor(private repository: UsersRepository) {}

  async create(user: CreateUserDto) {
    const id = await this.repository.create(user);
    return { id };
  }

  async get(id: string) {
    return this.repository.get(id);
  }

  async update(id: number, user: UpdateUserDto) {
    return this.repository.update(id, user);
  }
}

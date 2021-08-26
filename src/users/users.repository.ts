import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import DuplicatedCpfError from './errors/duplicated-cpf.error';
import UserNotFoundError from './errors/user-not-found.error';
import { User, UserDocument } from './schemas/users.schema';
import { generateAccount } from './users.utils';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

  async create(user: CreateUserDto) {
    try {
      const { _id } = await this.model.create({
        ...user,
        account: generateAccount(),
        wallet: { checkingAccountAmount: 0, positions: [] },
      });

      return _id;
    } catch (error) {
      if (error.code == 11000) {
        throw new DuplicatedCpfError();
      }
      throw error;
    }
  }

  async get(id: string): Promise<User> {
    const user = await this.model.findById(id, 'name cpf account');

    if (!user) {
      throw new UserNotFoundError();
    }

    return user.toJSON();
  }

  async update(id: number, user: UpdateUserDto) {
    const updated = await this.model.findByIdAndUpdate(id, user);

    if (!updated) {
      throw new UserNotFoundError();
    }
  }
}

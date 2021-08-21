import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/users.schema';
import UserNotFoundError from './errors/user-not-found.error';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User.name) private model: Model<UserDocument>
  ) {}
  
  async findByCpfAndPassword(cpf: string, password: string) {
    const user = await this.model.findOne({ cpf, password }, 'cpf name');

    if(!user) {
      throw new UserNotFoundError();
    } 
      
    return user.toJSON();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/users.schema';
import UserNotFoundError from './errors/user-not-found.error';

@Injectable()
export class UserWalletRepository {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

  async getWallet(userId: string) {
    const user = await this.model.findById(userId, 'wallet');

    if (!user) {
      throw new UserNotFoundError();
    }

    return user.wallet;
  }
}

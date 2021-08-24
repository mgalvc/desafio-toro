import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/users.schema';
import AccountNotFoundError from './errors/account-not-found.error';

@Injectable()
export class SpbIntegrationsRepository {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}
  
  async getUserCpfFromAccount(account: string) {
    const user = await this.model.findOne({ account }, 'cpf');

    if (!user) {
      throw new AccountNotFoundError();
    }

    return user.toJSON();
  }

  async depositToCheckingAccount(userId: string, amount: number) {
    await this.model.findByIdAndUpdate(userId, { $inc: { 'wallet.checkingAccountAmount': amount } });
  }
}

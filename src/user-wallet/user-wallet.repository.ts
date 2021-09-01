import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { stocks } from 'src/stocks/stocks.constants';
import { User, UserDocument } from 'src/users/schemas/users.schema';
import StockNotFoundError from './errors/stock-not-found-error';
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

  async getStockCurrentPrice(symbol: string) {
    const found = stocks().find(stock => stock.symbol === symbol);

    if(!found) {
      throw new StockNotFoundError();
    }

    return found.currentPrice;
  }

  async buyStock(userId: string, symbol: string, amount: number, orderPrice: number) {
    await this.model.updateOne({ _id: userId }, {
      $push: { 'wallet.positions': { symbol, amount } },
      $inc: { 'wallet.checkingAccountAmount': -orderPrice },
    });
  }
}

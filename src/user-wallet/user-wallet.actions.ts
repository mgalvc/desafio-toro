import { Injectable } from '@nestjs/common';
import { UserWalletRepository } from './user-wallet.repository';

@Injectable()
export class UserWalletActions {
  constructor(
    private repository: UserWalletRepository
  ) {}

  async getWallet(userId: string) {
    const wallet = await this.repository.getWallet(userId);

    const positionsAmount = wallet.positions
      .map(position => position.currentPrice * position.amount)
      .reduce((sum, curr) => sum + curr, 0);

    const consolidated = wallet.checkingAccountAmount + positionsAmount;

    return {
      ...wallet,
      positionsAmount,
      consolidated
    };
  }
}

import { Injectable } from '@nestjs/common';
import NotEnoughFundsError from './errors/not-enough-funds.error';
import { UserWalletRepository } from './user-wallet.repository';

@Injectable()
export class UserWalletActions {
  constructor(private repository: UserWalletRepository) {}

  async getWallet(userId: string) {
    const { checkingAccountAmount, positions } = await this.repository.getWallet(userId);

    const positionsBySymbol = {};

    for (const { symbol, amount } of positions) {
      if(!positionsBySymbol[symbol]) {
        positionsBySymbol[symbol] = 0
      }
      
      positionsBySymbol[symbol] += amount;
    }

    const positionsWithCurrentPrice = [];

    for (const symbol of Object.keys(positionsBySymbol)) {
      const currentPrice = await this.repository.getStockCurrentPrice(symbol);
      positionsWithCurrentPrice.push({
        symbol,
        amount: positionsBySymbol[symbol],
        currentPrice
      });
    }

    const positionsAmount = positionsWithCurrentPrice
      .map(position => position.currentPrice * position.amount)
      .reduce((sum, curr) => sum + curr, 0);

    const consolidated = checkingAccountAmount + positionsAmount;

    return {
      checkingAccountAmount,
      positions: positionsWithCurrentPrice,
      positionsAmount,
      consolidated,
    };
  }

  async buyStock(userId: string, symbol: string, amount: number) {
    const wallet = await this.repository.getWallet(userId);
    const stockPrice = await this.repository.getStockCurrentPrice(symbol);
    
    const orderPrice = stockPrice * amount;

    if (orderPrice > wallet.checkingAccountAmount) {
      throw new NotEnoughFundsError();
    }

    await this.repository.buyStock(userId, symbol, amount, orderPrice);

    return { message: 'Ordem executada com sucesso' };
  }
}

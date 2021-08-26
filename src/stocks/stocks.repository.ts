import { Injectable } from '@nestjs/common';
import { stocks } from './stocks.constants';

@Injectable()
export class StocksRepository {
  async getMostTraded(limit: number) {
    const mostTraded = stocks()
      .sort((stockA, stockB) => stockB.amount - stockA.amount)
      .slice(0, limit);

    return mostTraded.map(({ symbol, currentPrice }) => ({
      symbol,
      currentPrice,
    }));
  }
}

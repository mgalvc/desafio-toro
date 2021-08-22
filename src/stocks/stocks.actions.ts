import { Injectable } from '@nestjs/common';
import { StocksRepository } from './stocks.repository';

@Injectable()
export class StocksActions {
  constructor(private repository: StocksRepository) {}

  async getMostTraded(limit: number) {
    return this.repository.getMostTraded(5);
  }
}

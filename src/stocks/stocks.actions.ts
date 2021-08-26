import { Injectable } from '@nestjs/common';
import { StocksRepository } from './stocks.repository';

@Injectable()
export class StocksActions {
  constructor(private repository: StocksRepository) {}

  async getMostTraded() {
    return this.repository.getMostTraded(5);
  }
}

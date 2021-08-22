import { Controller, Get } from '@nestjs/common';
import { StocksActions } from './stocks.actions';

@Controller('stocks')
export class StocksController {
  constructor(private actions: StocksActions) {}

  @Get('trends')
  async getMostTraded() {
    return this.actions.getMostTraded(5);
  }
}

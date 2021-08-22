import { Module } from '@nestjs/common';
import { StocksActions } from './stocks.actions';
import { StocksController } from './stocks.controller';
import { StocksRepository } from './stocks.repository';

@Module({
  providers: [StocksActions, StocksController, StocksRepository],
  controllers: [StocksController],
})

export class StocksModule {}

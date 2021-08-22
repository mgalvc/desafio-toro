import { Test, TestingModule } from '@nestjs/testing';
import { StocksActions } from '../stocks.actions';

describe('StocksActions', () => {
  let provider: StocksActions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StocksActions],
    }).compile();

    provider = module.get<StocksActions>(StocksActions);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

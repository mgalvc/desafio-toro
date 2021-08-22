import { Test, TestingModule } from '@nestjs/testing';
import { StocksRepository } from '../stocks.repository';

describe('StocksRepository', () => {
  let provider: StocksRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StocksRepository],
    }).compile();

    provider = module.get<StocksRepository>(StocksRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

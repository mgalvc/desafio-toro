import { Test, TestingModule } from '@nestjs/testing';
import { UserWalletRepository } from '../user-wallet.repository';

describe('UserWalletRepository', () => {
  let provider: UserWalletRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWalletRepository],
    }).compile();

    provider = module.get<UserWalletRepository>(UserWalletRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

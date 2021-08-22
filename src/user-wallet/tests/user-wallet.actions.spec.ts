import { Test, TestingModule } from '@nestjs/testing';
import { UserWalletActions } from '../user-wallet.actions';

describe('UserWalletActions', () => {
  let provider: UserWalletActions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWalletActions],
    }).compile();

    provider = module.get<UserWalletActions>(UserWalletActions);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UsersActions } from '../users.actions';

describe('UsersActions', () => {
  let provider: UsersActions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersActions],
    }).compile();

    provider = module.get<UsersActions>(UsersActions);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

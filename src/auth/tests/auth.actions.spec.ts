import { Test, TestingModule } from '@nestjs/testing';
import { AuthActions } from '../auth.actions';

describe('AuthActions', () => {
  let provider: AuthActions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthActions],
    }).compile();

    provider = module.get<AuthActions>(AuthActions);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

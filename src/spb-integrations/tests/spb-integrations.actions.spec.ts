import { Test, TestingModule } from '@nestjs/testing';
import { SpbIntegrationsActions } from '../spb-integrations.actions';

describe('SpbIntegrationsActions', () => {
  let provider: SpbIntegrationsActions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpbIntegrationsActions],
    }).compile();

    provider = module.get<SpbIntegrationsActions>(SpbIntegrationsActions);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

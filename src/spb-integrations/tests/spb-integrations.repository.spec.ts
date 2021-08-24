import { Test, TestingModule } from '@nestjs/testing';
import { SpbIntegrationsRepository } from '../spb-integrations.repository';

describe('SpbIntegrationsRepository', () => {
  let provider: SpbIntegrationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpbIntegrationsRepository],
    }).compile();

    provider = module.get<SpbIntegrationsRepository>(SpbIntegrationsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

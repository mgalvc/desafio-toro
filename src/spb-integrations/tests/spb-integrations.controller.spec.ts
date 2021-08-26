import { Test, TestingModule } from '@nestjs/testing';
import { SpbIntegrationsController } from '../spb-integrations.controller';

describe('SpbIntegrationsController', () => {
  let controller: SpbIntegrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpbIntegrationsController],
    }).compile();

    controller = module.get<SpbIntegrationsController>(
      SpbIntegrationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

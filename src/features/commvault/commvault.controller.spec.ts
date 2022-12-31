import { Test, TestingModule } from '@nestjs/testing';
import { CommvaultController } from './commvault.controller';
import { CommvaultService } from './commvault.service';

describe('CommvaultController', () => {
  let controller: CommvaultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommvaultController],
      providers: [CommvaultService],
    }).compile();

    controller = module.get<CommvaultController>(CommvaultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

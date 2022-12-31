import { Test, TestingModule } from '@nestjs/testing';
import { CommvaultService } from './commvault.service';

describe('CommvaultService', () => {
  let service: CommvaultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommvaultService],
    }).compile();

    service = module.get<CommvaultService>(CommvaultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

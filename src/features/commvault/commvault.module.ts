import { Module } from '@nestjs/common';
import { CommvaultService } from './commvault.service';
import { CommvaultController } from './commvault.controller';
import { HttpModule } from '@nestjs/axios';
import { CommvaultRepository } from './commvault.repository';

@Module({
  imports: [HttpModule],
  controllers: [CommvaultController],
  providers: [CommvaultService, CommvaultRepository],
})
export class CommvaultModule {}

import { Module } from '@nestjs/common';
import { CommvaultModule } from './commvault/commvault.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [CommvaultModule, TestModule],
})
export class FeaturesModule {}

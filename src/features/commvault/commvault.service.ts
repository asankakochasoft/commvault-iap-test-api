import { Injectable } from '@nestjs/common';
import { CommvaultDto } from './dto/commvault.dto';
import { CommvaultRepository } from './commvault.repository';

@Injectable()
export class CommvaultService {
  constructor(private commvaultRepository: CommvaultRepository) {}

  async login() {
    return await this.commvaultRepository.login();
  }

  async sendRequest(commvaultDto: CommvaultDto) {
    return await this.commvaultRepository.sendRequest(
      commvaultDto.token,
      commvaultDto.prefix,
    );
  }
}

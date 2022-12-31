import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommvaultService } from './commvault.service';
import { CommvaultDto } from './dto/commvault.dto';

@Controller('commvault')
export class CommvaultController {
  constructor(private readonly commvaultService: CommvaultService) {}

  @Get('login')
  login() {
    return this.commvaultService.login();
  }

  @Post()
  create(@Body() commvaultDto: CommvaultDto) {
    return this.commvaultService.sendRequest(commvaultDto);
  }
}

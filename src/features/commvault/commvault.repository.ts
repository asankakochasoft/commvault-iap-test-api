import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CommvaultRepository {
  constructor(private readonly httpService: HttpService) {}

  async login() {
    const response = await this.httpService.post(
      `http://eu2prdcomdb01.carhartt-nt.carhartt.com/webconsole/api/Login`,
      {
        domain: '',
        username: 'kochmonitor',
        password: 'TXVSU3BKNiNSZGlz',
        commserver: 'eu2prdcomdb01.carhartt-nt.carhartt.com*eu2prdcomdb01',
        timeout: 60 * 24,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Host: 'eu2prdcomdb01.carhartt-nt.carhartt.com',
          Accept: 'application/json',
        },
      },
    );
    return response;
  }

  async sendRequest(token: string, prefix: string) {
    console.log(token);
    console.log(prefix);

    const response = await this.httpService.get(
      `http://eu2prdcomdb01.carhartt-nt.carhartt.com/webconsole/api/${prefix}`,
      {
        headers: {
          Accept: 'application/json',
          Host: 'eu2prdcomdb01.carhartt-nt.carhartt.com',
          Authtoken: token,
        },
      },
    );

    return response;
  }
}

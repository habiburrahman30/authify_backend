import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class IpService {
  constructor(private httpService: HttpService) {}
  async getCurrentIp(): Promise<string> {
    const res = await this.httpService.get('https://api.myip.com').toPromise();
    return res.data['ip'];
  }
}

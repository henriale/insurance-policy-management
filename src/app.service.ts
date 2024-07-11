import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRootMessage(): string {
    return 'this is public. /policy is under basic auth';
  }
}

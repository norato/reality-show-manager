import { Injectable } from '@nestjs/common';
import { Message } from '@reality-show-manager/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to Reality Show Manager!' };
  }
}

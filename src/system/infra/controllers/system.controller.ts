import { Controller, Get } from '@nestjs/common';

@Controller('system')
export class SystemController {
  constructor() {}

  @Get('/healthcheck')
  healthcheck(): boolean {
    return;
  }
}

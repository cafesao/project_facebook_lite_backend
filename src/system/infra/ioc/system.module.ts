import { Module } from '@nestjs/common';
import { SystemController } from '../controllers';

@Module({
  providers: [],
  controllers: [SystemController],
  exports: [],
})
export class SystemModule {}

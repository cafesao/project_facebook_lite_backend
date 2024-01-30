import { Module } from '@nestjs/common';
import { EmoticonController } from '../controllers';
import { commandsProviders } from './commands';
import { repositoriesProviders } from './repositories';
import { queriesProviders } from './queries';

@Module({
  providers: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
  controllers: [EmoticonController],
  exports: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
})
export class EmoticonModule {}

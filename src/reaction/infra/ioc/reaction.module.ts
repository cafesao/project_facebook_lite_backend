import { Module } from '@nestjs/common';
import { ReactionController } from '../controllers';
import { commandsProviders } from './commands';
import { repositoriesProviders } from './repositories';
import { queriesProviders } from './queries';

@Module({
  providers: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
  controllers: [ReactionController],
  exports: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
})
export class ReactionModule {}

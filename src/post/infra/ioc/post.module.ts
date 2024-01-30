import { Module } from '@nestjs/common';
import { PostController } from '../controllers';
import { commandsProviders } from './commands';
import { repositoriesProviders } from './repositories';
import { queriesProviders } from './queries';

@Module({
  providers: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
  controllers: [PostController],
  exports: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
})
export class PostModule {}

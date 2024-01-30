import { Module } from '@nestjs/common';
import { UserController } from '../controllers';
import { commandsProviders } from './commands';
import { repositoriesProviders } from './repositories';
import { queriesProviders } from './queries';

@Module({
  providers: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
  controllers: [UserController],
  exports: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders,
  ],
})
export class UserModule {}

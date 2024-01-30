import { Provider, FactoryProvider } from '@nestjs/common';
import { FindManyUsersQueryFactoryProvider } from './find-many-users-query-factory.provider';

export const queriesProviders: Provider[] | FactoryProvider[] = [
  FindManyUsersQueryFactoryProvider.register(),
];

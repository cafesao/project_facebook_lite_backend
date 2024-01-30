import { Provider, FactoryProvider } from '@nestjs/common';
import { FindManyReactionsQueryFactoryProvider } from './find-many-reactions-query-factory.provider';

export const queriesProviders: Provider[] | FactoryProvider[] = [
  FindManyReactionsQueryFactoryProvider.register(),
];

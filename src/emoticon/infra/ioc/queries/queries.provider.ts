import { Provider, FactoryProvider } from '@nestjs/common';
import { FindManyEmoticonQueryFactoryProvider } from './find-many-emoticon-query-factory.provider';

export const queriesProviders: Provider[] | FactoryProvider[] = [
  FindManyEmoticonQueryFactoryProvider.register(),
];

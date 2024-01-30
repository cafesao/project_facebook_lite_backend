import { Provider, FactoryProvider } from '@nestjs/common';
import { FindManyPostsQueryFactoryProvider } from './find-many-posts-query-factory.provider';

export const queriesProviders: Provider[] | FactoryProvider[] = [
  FindManyPostsQueryFactoryProvider.register(),
];

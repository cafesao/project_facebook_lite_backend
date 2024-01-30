import { FactoryProvider } from '@nestjs/common';

import { FindManyPostsQueryDrizzleAdapter } from '../../query';
import { PostProvider } from '../post.provider';
import { IFindManyPostsQuery } from '@src/post/application/queries';

export class FindManyPostsQueryFactoryProvider {
  static register(): FactoryProvider<IFindManyPostsQuery> {
    return {
      provide: PostProvider.Queries.FIND_MANY_POSTS_QUERY,
      useFactory: () => new FindManyPostsQueryDrizzleAdapter(),
      inject: [],
    };
  }
}

import { Controller, Get, Inject } from '@nestjs/common';
import { PostProvider } from '../ioc/post.provider';
import { IFindManyPostsQuery } from '@src/post/application/queries';

@Controller('post')
export class PostController {
  constructor(
    @Inject(PostProvider.Queries.FIND_MANY_POSTS_QUERY)
    private readonly findManyPostsQuery: IFindManyPostsQuery,
  ) {}

  @Get()
  getPost(): Promise<IFindManyPostsQuery.Output> {
    return this.findManyPostsQuery.execute();
  }
}

import { IFindManyPostsQuery } from '@src/post/application/queries';
import { PostEntity } from '@src/post/domain/entities';

export class FindManyPostsQueryDrizzleAdapter implements IFindManyPostsQuery {
  private postEntity = new PostEntity();

  constructor() {}

  async execute(
    input: IFindManyPostsQuery.Input,
  ): Promise<IFindManyPostsQuery.Output> {
    this.postEntity.createDefault();
    return [this.postEntity];
  }
}

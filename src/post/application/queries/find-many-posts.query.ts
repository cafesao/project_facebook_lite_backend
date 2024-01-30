import { PostEntity } from '@src/post/domain/entities';
import { IQueryContract } from '@src/shared/domain/contracts';

export interface IFindManyPostsQuery
  extends IQueryContract<
    IFindManyPostsQuery.Input,
    IFindManyPostsQuery.Output
  > {}

export namespace IFindManyPostsQuery {
  export type Input = {};

  export type Output = PostEntity[];
}

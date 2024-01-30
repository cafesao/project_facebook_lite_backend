import { ReactionEntity } from '@src/reaction/domain/entities';
import { IQueryContract } from '@src/shared/domain/contracts';

export interface IFindManyReactionsQuery
  extends IQueryContract<
    IFindManyReactionsQuery.Input,
    IFindManyReactionsQuery.Output
  > {}

export namespace IFindManyReactionsQuery {
  export type Input = {};

  export type Output = ReactionEntity[];
}

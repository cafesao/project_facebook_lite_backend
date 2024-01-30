import { IFindManyReactionsQuery } from '@src/reaction/application/queries';
import { ReactionEntity } from '@src/reaction/domain/entities';

export class FindManyReactionsQueryDrizzleAdapter
  implements IFindManyReactionsQuery
{
  private reactionEntity = new ReactionEntity();

  constructor() {}

  async execute(
    input: IFindManyReactionsQuery.Input,
  ): Promise<IFindManyReactionsQuery.Output> {
    this.reactionEntity.createDefault();
    return [this.reactionEntity];
  }
}

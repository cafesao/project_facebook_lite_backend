import { FactoryProvider } from '@nestjs/common';
import { ReactionProvider } from '../reaction.provider';
import { IFindManyReactionsQuery } from '@src/reaction/application/queries';
import { FindManyReactionsQueryDrizzleAdapter } from '../../query/find-many-reactions.query';

export class FindManyReactionsQueryFactoryProvider {
  static register(): FactoryProvider<IFindManyReactionsQuery> {
    return {
      provide: ReactionProvider.Queries.FIND_MANY_REACTION_QUERY,
      useFactory: () => new FindManyReactionsQueryDrizzleAdapter(),
      inject: [],
    };
  }
}

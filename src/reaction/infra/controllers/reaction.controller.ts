import { Controller, Get, Inject } from '@nestjs/common';
import { ReactionProvider } from '../ioc/reaction.provider';
import { IFindManyReactionsQuery } from '@src/reaction/application/queries';

@Controller('reaction')
export class ReactionController {
  constructor(
    @Inject(ReactionProvider.Queries.FIND_MANY_REACTION_QUERY)
    private readonly findManyReactionsQuery: IFindManyReactionsQuery,
  ) {} //private readonly appService: AppService

  @Get()
  getReaction(): Promise<IFindManyReactionsQuery.Output> {
    return this.findManyReactionsQuery.execute();
  }
}

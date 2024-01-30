import { Controller, Get, Inject } from '@nestjs/common';
import { EmoticonProvider } from '../ioc/emoticon.provider';
import { IFindManyEmoticonsQuery } from '@src/emoticon/application/queries';

@Controller('emoticon')
export class EmoticonController {
  constructor(
    @Inject(EmoticonProvider.Queries.FIND_MANY_EMOTICON_QUERY)
    private readonly findManyEmoticonsQuery: IFindManyEmoticonsQuery,
  ) {} //private readonly appService: AppService

  @Get()
  getEmoticon(): Promise<IFindManyEmoticonsQuery.Output> {
    return this.findManyEmoticonsQuery.execute();
  }
}

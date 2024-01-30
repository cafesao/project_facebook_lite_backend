import { FactoryProvider } from '@nestjs/common';
import { EmoticonProvider } from '../emoticon.provider';
import { IFindManyEmoticonsQuery } from '@src/emoticon/application/queries';
import { FindManyEmoticonsQueryDrizzleAdapter } from '../../query/find-many-emoticons.query';

export class FindManyEmoticonQueryFactoryProvider {
  static register(): FactoryProvider<IFindManyEmoticonsQuery> {
    return {
      provide: EmoticonProvider.Queries.FIND_MANY_EMOTICON_QUERY,
      useFactory: () => new FindManyEmoticonsQueryDrizzleAdapter(),
      inject: [],
    };
  }
}

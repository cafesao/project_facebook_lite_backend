import { IFindManyEmoticonsQuery } from '@src/emoticon/application/queries';
import { EmoticonEntity } from '@src/emoticon/domain/entities';

export class FindManyEmoticonsQueryDrizzleAdapter
  implements IFindManyEmoticonsQuery
{
  private emoticonEntity = new EmoticonEntity();

  constructor() {}

  async execute(
    input: IFindManyEmoticonsQuery.Input,
  ): Promise<IFindManyEmoticonsQuery.Output> {
    this.emoticonEntity.createDefault();
    return [this.emoticonEntity];
  }
}

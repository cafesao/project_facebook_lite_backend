import { EmoticonEntity } from '@src/emoticon/domain/entities';
import { IQueryContract } from '@src/shared/domain/contracts';

export interface IFindManyEmoticonsQuery
  extends IQueryContract<
    IFindManyEmoticonsQuery.Input,
    IFindManyEmoticonsQuery.Output
  > {}

export namespace IFindManyEmoticonsQuery {
  export type Input = {};

  export type Output = EmoticonEntity[];
}

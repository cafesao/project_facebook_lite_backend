import { IQueryContract } from '@src/shared/domain/contracts';
import { UserEntity } from '@src/user/domain/entities';

export interface IFindManyUsersQuery
  extends IQueryContract<
    IFindManyUsersQuery.Input,
    IFindManyUsersQuery.Output
  > {}

export namespace IFindManyUsersQuery {
  export type Input = {};

  export type Output = UserEntity[];
}

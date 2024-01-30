import { IFindManyUsersQuery } from '@src/user/application/queries';
import { UserEntity } from '@src/user/domain/entities';

export class FindManyUsersQueryDrizzleAdapter implements IFindManyUsersQuery {
  private userEntity = new UserEntity();

  constructor() {}

  async execute(
    input: IFindManyUsersQuery.Input,
  ): Promise<IFindManyUsersQuery.Output> {
    this.userEntity.createDefault();
    return [this.userEntity];
  }
}

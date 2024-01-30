import { FactoryProvider } from '@nestjs/common';
import { IFindManyUsersQuery } from '@src/user/application/queries';
import { UserProvider } from '../user.provider';
import { FindManyUsersQueryDrizzleAdapter } from '../../query/find-many-users.query';

export class FindManyUsersQueryFactoryProvider {
  static register(): FactoryProvider<IFindManyUsersQuery> {
    return {
      provide: UserProvider.Queries.FIND_MANY_USERS_QUERY,
      useFactory: () => new FindManyUsersQueryDrizzleAdapter(),
      inject: [],
    };
  }
}

import { Controller, Get, Inject } from '@nestjs/common';
import { UserProvider } from '../ioc/user.provider';
import { IFindManyUsersQuery } from '@src/user/application/queries';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserProvider.Queries.FIND_MANY_USERS_QUERY)
    private readonly findManyUsersQuery: IFindManyUsersQuery,
  ) {}

  @Get()
  getUser(): Promise<IFindManyUsersQuery.Output> {
    return this.findManyUsersQuery.execute();
  }
}

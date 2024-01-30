import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from '@src/user/domain/entities';
import { UserController } from '@src/user/infra/controllers';
import { commandsProviders } from '@src/user/infra/ioc/commands';
import { queriesProviders } from '@src/user/infra/ioc/queries';
import { repositoriesProviders } from '@src/user/infra/ioc/repositories';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        ...repositoriesProviders,
        ...queriesProviders,
        ...commandsProviders,
      ],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  it('should return UserEntity', async () => {
    const output = await userController.getUser();
    output.forEach((item) => expect(item).toBeInstanceOf(UserEntity));
  });
});

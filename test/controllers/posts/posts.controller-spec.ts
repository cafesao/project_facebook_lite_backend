import { Test, TestingModule } from '@nestjs/testing';
import { PostEntity } from '@src/post/domain/entities';
import { PostController } from '@src/post/infra/controllers';
import { commandsProviders } from '@src/post/infra/ioc/commands';
import { queriesProviders } from '@src/post/infra/ioc/queries';
import { repositoriesProviders } from '@src/post/infra/ioc/repositories';

describe('PostController', () => {
  let postController: PostController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        ...repositoriesProviders,
        ...queriesProviders,
        ...commandsProviders,
      ],
    }).compile();

    postController = app.get<PostController>(PostController);
  });

  it('should return PostEntity', async () => {
    const output = await postController.getPost();
    output.forEach((item) => expect(item).toBeInstanceOf(PostEntity));
  });
});

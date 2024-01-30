import { Test, TestingModule } from '@nestjs/testing';
import { ReactionEntity } from '@src/reaction/domain/entities';

import { ReactionController } from '@src/reaction/infra/controllers';
import { commandsProviders } from '@src/reaction/infra/ioc/commands';
import { queriesProviders } from '@src/reaction/infra/ioc/queries';
import { repositoriesProviders } from '@src/reaction/infra/ioc/repositories';

describe('ReactionsController', () => {
  let reactionController: ReactionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReactionController],
      providers: [
        ...repositoriesProviders,
        ...queriesProviders,
        ...commandsProviders,
      ],
    }).compile();

    reactionController = app.get<ReactionController>(ReactionController);
  });

  it('should return ReactionEntity', async () => {
    const output = await reactionController.getReaction();
    output.forEach((item) => expect(item).toBeInstanceOf(ReactionEntity));
  });
});

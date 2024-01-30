import { Test, TestingModule } from '@nestjs/testing';
import { EmoticonEntity } from '@src/emoticon/domain/entities';
import { EmoticonController } from '@src/emoticon/infra/controllers';
import { commandsProviders } from '@src/emoticon/infra/ioc/commands';
import { queriesProviders } from '@src/emoticon/infra/ioc/queries';
import { repositoriesProviders } from '@src/emoticon/infra/ioc/repositories';

describe('EmoticonController', () => {
  let emoticonController: EmoticonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmoticonController],
      providers: [
        ...repositoriesProviders,
        ...queriesProviders,
        ...commandsProviders,
      ],
    }).compile();

    emoticonController = app.get<EmoticonController>(EmoticonController);
  });

  it('should return EmoticonEntity', async () => {
    const output = await emoticonController.getEmoticon();
    output.forEach((item) => expect(item).toBeInstanceOf(EmoticonEntity));
  });
});

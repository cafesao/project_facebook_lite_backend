import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ReactionModule } from '@src/reaction/infra/ioc/reaction.module';

describe('ReactionsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ReactionModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/reaction (GET)', () => {
    return request(app.getHttpServer()).get('/reaction').expect(200);
  });
});

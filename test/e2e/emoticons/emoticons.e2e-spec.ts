import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { EmoticonModule } from '@src/emoticon/infra/ioc/emoticon.module';

describe('EmoticonsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [EmoticonModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/emoticon (GET)', () => {
    return request(app.getHttpServer()).get('/emoticon').expect(200);
  });
});

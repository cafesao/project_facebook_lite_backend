import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PostModule } from '@src/post/infra/ioc/post.module';

describe('PostsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PostModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/post (GET)', () => {
    return request(app.getHttpServer()).get('/post').expect(200);
  });
});

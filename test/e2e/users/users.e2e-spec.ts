import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from '@src/user/infra/ioc/user.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer()).get('/user').expect(200);
  });
});

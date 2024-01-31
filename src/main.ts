import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { Logger } from '@nestjs/common';
configDotenv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  Logger.log(`Listening on http://localhost:${process.env.PORT}`);
}
bootstrap();

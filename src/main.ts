import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { Logger } from '@nestjs/common';
configDotenv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Facebook Lite API')
    .setDescription('The Facebook Lite API description')
    .setVersion('0.1')
    .addTag('facebook_lite')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
  Logger.log(`Listening on http://localhost:${process.env.PORT}`);
}
bootstrap();

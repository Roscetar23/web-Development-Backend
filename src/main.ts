import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import credentials from './configuration/credentials';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  //Added code in order to follow the fields of DTO's
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const documentConfig = new DocumentBuilder()
    .setTitle('BackendWeb')
    .setDescription('AllProducts')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api/documentation', app, document);
  await app.listen(credentials().PORT);
  console.log(`Start application in port = ${credentials().PORT}`);
}
bootstrap();

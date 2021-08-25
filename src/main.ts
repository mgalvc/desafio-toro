import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();

  const openapiConfig = new DocumentBuilder()
    .setTitle('Desafio Toro API')
    .setDescription('Documentação de API do Desafio Toro')
    .setVersion('1.0')
    .build();
  const openapiDocument = SwaggerModule.createDocument(app, openapiConfig);
  SwaggerModule.setup('api', app, openapiDocument);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');

  await app.listen(port);
}

bootstrap();

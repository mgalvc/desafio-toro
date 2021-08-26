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
    .setDescription('Requisições autenticáveis devem ser feitas passando como bearer token o access_token gerado em /auth/login.')
    .setVersion('1.0')
    .addTag('user', 'Operações em usuário')
    .addTag('auth', 'Autenticação')
    .addTag('stocks', 'Operações em ativos')
    .addTag('user-wallet', 'Carteira do usuário')
    .addTag('deposits', 'Operações de depósito na conta do usuário')
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer'
    })
    .build();
  const openapiDocument = SwaggerModule.createDocument(app, openapiConfig);
  SwaggerModule.setup('api', app, openapiDocument);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');

  await app.listen(port);
}

bootstrap();

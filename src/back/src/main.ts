import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser = require('cookie-parser');
import { AppDataSource } from '../data-source';
import { AuthorizationFilter } from './authorization/exception-filters/authorization.filter';

async function bootstrap(): Promise<void> {
  AppDataSource.initialize();
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000'
  });

  app.useGlobalFilters(new AuthorizationFilter());

  const config = new DocumentBuilder()
    .setTitle('Organick API')
    .setDescription('Organick API description')
    .setVersion('0.2.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { GlobalExceptionFilter } from './erroes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.setGlobalPrefix('api');
  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  // Registrar el filtro global de excepciones
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT ?? 3001, () => {
    console.log(`Server is running on port ${process.env.PORT ?? 3001}`);
  });

  const logger = new Logger('Payments-ms');
  logger.log(`App running on port ${process.env.PORT ?? 3001}`);
}
bootstrap();
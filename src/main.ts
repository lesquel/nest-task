import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*', // Permitir cualquier dominio (puedes restringirlo si quieres)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*', // O 'Content-Type, Authorization' si prefieres limitarlo
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // transformar  informacion  se puede realizar de varias maneras  una opcion es validar en dto de cammon  el atributo sea numero y otra en los global pipe
      //  y tranformar  en el dto  a como queremos,
      transformOptions: {
        enableImplicitConversion: true, //
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

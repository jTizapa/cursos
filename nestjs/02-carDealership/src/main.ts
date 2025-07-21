import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true, // sirve para mostrar unicamente los datos que estan validados en en el pipe 
    forbidNonWhitelisted: true, // esto es un validador  para que regrese un error cuando manden informacion inutil.
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

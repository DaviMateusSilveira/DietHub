import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Para permitir chamadas do frontend
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Backend rodando em http://localhost:${port}`);
}
bootstrap();

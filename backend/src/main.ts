import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all routes
  app.enableCors();
  const PORT = process.env.PORT || 5001;
  await app.listen(PORT);
}
bootstrap();

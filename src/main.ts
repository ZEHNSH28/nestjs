import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Listen for MongoDB connection errors
  const mongoConnection: Connection = app.get(getConnectionToken());
  mongoConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
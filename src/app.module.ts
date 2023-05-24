import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptocurrencyRatingModule } from './cryptocurrency-rating/cryptocurrency-rating.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
   
    CryptocurrencyRatingModule,
  ],
})
export class AppModule {}

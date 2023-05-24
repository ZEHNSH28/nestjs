import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptocurrencyRatingController } from './cryptocurrency-rating.controller';
import { CryptocurrencyRatingService } from './cryptocurrency-rating.service';
import { CryptocurrencyRating, CryptocurrencyRatingSchema } from './cryptocurrency-rating.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CryptocurrencyRating.name, schema: CryptocurrencyRatingSchema },
    ]),
  ],
  controllers: [CryptocurrencyRatingController],
  providers: [CryptocurrencyRatingService],
})
export class CryptocurrencyRatingModule {}

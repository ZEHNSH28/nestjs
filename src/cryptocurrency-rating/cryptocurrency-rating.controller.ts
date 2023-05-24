import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CryptocurrencyRatingService } from './cryptocurrency-rating.service';

@Controller('cryptocurrency-ratings')
export class CryptocurrencyRatingController {
  constructor(private readonly cryptocurrencyRatingService: CryptocurrencyRatingService) {}

  @Post()
  createRating(
    @Body('cryptocurrencyId') cryptocurrencyId: string,
    @Body('userId') userId: string,
    @Body('rating') rating: number,
    @Body('comment') comment: string,
  ) {
    return this.cryptocurrencyRatingService.createRating(cryptocurrencyId, userId, rating, comment);
  }

  @Get(':cryptocurrencyId')
  getAverageRating(@Param('cryptocurrencyId') cryptocurrencyId: string) {
    return this.cryptocurrencyRatingService.getAverageRating(cryptocurrencyId);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CryptocurrencyRating, CryptocurrencyRatingDocument } from './cryptocurrency-rating.schema';

@Injectable()
export class CryptocurrencyRatingService {
  constructor(
    @InjectModel(CryptocurrencyRating.name)
    private readonly cryptocurrencyRatingModel: Model<CryptocurrencyRatingDocument>,
  ) {}

  async createRating(cryptocurrencyId: string, userId: string, rating: number, comment: string) {
    const newRating = new this.cryptocurrencyRatingModel({ cryptocurrencyId, userId, rating, comment });
    return newRating.save();
  }

  async getAverageRating(cryptocurrencyId: string) {
    const ratings = await this.cryptocurrencyRatingModel.find({ cryptocurrencyId });
    if (ratings.length === 0) {
      return { averageRating: 0 };
    }
    const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    const averageRating = totalRating / ratings.length;
    return { averageRating };
  }
}

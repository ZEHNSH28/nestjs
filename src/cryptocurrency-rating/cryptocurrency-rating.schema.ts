import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CryptocurrencyRatingDocument = CryptocurrencyRating & Document;

@Schema()
export class CryptocurrencyRating {
  @Prop({ required: true })
  cryptocurrencyId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  comment: string;
}

export const CryptocurrencyRatingSchema = SchemaFactory.createForClass(CryptocurrencyRating);

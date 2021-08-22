import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Wallet {
  checkingAccountAmount: number;
  positions: Position[];
}

class Position {
  symbol: string;
  amount: number;
  currentPrice: number;
}

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  cpf: string;

  @Prop()
  password: string;

  @Prop()
  wallet: Wallet;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

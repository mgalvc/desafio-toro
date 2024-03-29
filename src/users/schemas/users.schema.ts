import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Wallet {
  checkingAccountAmount: number;
  positions: Position[];
}

export class Position {
  symbol: string;
  amount: number;
}

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  cpf: string;

  @Prop({ unique: true })
  account: string;

  @Prop()
  password: string;

  @Prop()
  wallet: Wallet;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

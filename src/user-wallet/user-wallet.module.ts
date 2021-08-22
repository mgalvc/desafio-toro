import { Module } from '@nestjs/common';
import { UserWalletController } from './user-wallet.controller';
import { UserWalletActions } from './user-wallet.actions';
import { UserWalletRepository } from './user-wallet.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/users.schema';

@Module({
  controllers: [UserWalletController],
  providers: [UserWalletActions, UserWalletRepository],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UserWalletModule {}

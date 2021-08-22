import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StocksModule } from './stocks/stocks.module';
import { UserWalletModule } from './user-wallet/user-wallet.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/toro?authSource=admin',
      {
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
    AuthModule,
    StocksModule,
    UserWalletModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

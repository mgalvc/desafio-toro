import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StocksModule } from './stocks/stocks.module';
import { UserWalletModule } from './user-wallet/user-wallet.module';
import { SpbIntegrationsModule } from './spb-integrations/spb-integrations.module';
import { JwtGlobalModule } from './jwt/jwt.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configs: ConfigService) => ({
        uri: configs.get('MONGO_URI'),
        useCreateIndex: true,
        useFindAndModify: false
      })
    }),
    UsersModule,
    AuthModule,
    StocksModule,
    UserWalletModule,
    SpbIntegrationsModule,
    JwtGlobalModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

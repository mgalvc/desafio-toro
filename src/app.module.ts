import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/toro?authSource=admin',
      {
        useCreateIndex: true,
      },
    ),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

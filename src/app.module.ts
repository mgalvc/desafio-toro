import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/toro?authSource=admin', {
      useCreateIndex: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

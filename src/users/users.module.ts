import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersActions } from './users.actions';
import { UsersRepository } from './users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/users.schema';

@Module({
  controllers: [UsersController],
  providers: [UsersActions, UsersRepository],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})

export class UsersModule {}

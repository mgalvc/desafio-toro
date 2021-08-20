import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthActions } from './auth.actions';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/users.schema';
import { AuthRepository } from './auth.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthActions, AuthRepository],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ]
})

export class AuthModule {}

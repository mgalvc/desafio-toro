import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthActions } from './auth.actions';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/users.schema';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './auth.constants';

@Module({
  controllers: [AuthController],
  providers: [AuthActions, AuthRepository],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}

import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configs: ConfigService) => ({
        secret: configs.get('JWT_SECRET'),
        signOptions: { expiresIn: configs.get('JWT_TTL') },
      }),
    }),
  ],
  exports: [JwtModule],
})
export class JwtGlobalModule {}

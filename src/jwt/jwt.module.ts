import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecret } from "src/auth/auth.constants";

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1h' },
    })
  ],
  exports: [JwtModule]
})

export class JwtGlobalModule {};
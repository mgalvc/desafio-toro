import { Module } from '@nestjs/common';
import { SpbIntegrationsController } from './spb-integrations.controller';
import { SpbIntegrationsActions } from './spb-integrations.actions';
import { SpbIntegrationsRepository } from './spb-integrations.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/users.schema';

@Module({
  controllers: [SpbIntegrationsController],
  providers: [SpbIntegrationsActions, SpbIntegrationsRepository],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})

export class SpbIntegrationsModule {}

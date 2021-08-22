import { Controller, Get, Param } from '@nestjs/common';
import { UserWalletActions } from './user-wallet.actions';

@Controller('users')
export class UserWalletController {
  constructor(
    private actions: UserWalletActions
  ) {}

  @Get('/:id/wallet')
  async getUserWallet(@Param('id') userId: string) {
    return this.actions.getWallet(userId);
  }
}

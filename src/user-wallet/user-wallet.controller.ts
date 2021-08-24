import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserWalletActions } from './user-wallet.actions';

@Controller('user-wallet')
export class UserWalletController {
  constructor(
    private actions: UserWalletActions
  ) {}

  @Get()
  async getUserWallet(@Req() req: Request) {
    const { _id } = req.user as any;
    return this.actions.getWallet(_id);
  }
}

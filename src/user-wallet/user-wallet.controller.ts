import { Controller, Get, Req } from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { getOkResponse } from './openapi/responses';
import { UserWalletActions } from './user-wallet.actions';

@ApiTags('user-wallet')
@Controller('user-wallet')
export class UserWalletController {
  constructor(private actions: UserWalletActions) {}

  @Get()
  @ApiSecurity('bearer')
  @ApiResponse(getOkResponse)
  async getUserWallet(@Req() req: Request) {
    const { _id } = req.user as any;
    return this.actions.getWallet(_id);
  }
}

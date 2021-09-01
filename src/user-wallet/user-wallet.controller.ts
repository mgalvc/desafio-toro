import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { StockOrderDto } from './dto/stock-order.dto';
import { getOkResponse, postCreatedResponse, postBadRequestResponse } from './openapi/responses';
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

  @Post('order')
  @ApiSecurity('bearer')
  @ApiCreatedResponse(postCreatedResponse)
  @ApiBadRequestResponse(postBadRequestResponse)
  async buyStocks(@Req() req: Request, @Body() stockOrder: StockOrderDto) {
    const { _id } = req.user as any;
    return this.actions.buyStock(_id, stockOrder.symbol, stockOrder.amount);
  }
}

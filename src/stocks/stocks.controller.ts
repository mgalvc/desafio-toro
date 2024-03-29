import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { getOkResponse } from './openapi/responses';
import { StocksActions } from './stocks.actions';

@ApiTags('stocks')
@Controller('stocks')
export class StocksController {
  constructor(private actions: StocksActions) {}

  @Get('trends')
  @ApiSecurity('bearer')
  @ApiResponse(getOkResponse)
  async getMostTraded() {
    return this.actions.getMostTraded();
  }
}

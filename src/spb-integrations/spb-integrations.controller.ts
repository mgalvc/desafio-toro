import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/auth-public.decorator';
import { DepositDto } from './dto/deposit.dto';
import { badRequestResponse, postOkResponse } from './openapi/responses';
import { SpbIntegrationsActions } from './spb-integrations.actions';

@ApiTags('deposits')
@Controller('spb')
export class SpbIntegrationsController {
  constructor(private actions: SpbIntegrationsActions) {}

  @Post('events')
  @Public()
  @HttpCode(200)
  @ApiOkResponse(postOkResponse)
  @ApiResponse(badRequestResponse)
  async receiveDeposit(@Body() deposit: DepositDto) {
    const {
      target: { account },
      origin: { cpf: cpfOrigin },
      amount,
    } = deposit;

    return this.actions.receiveDeposit(account, cpfOrigin, amount);
  }
}

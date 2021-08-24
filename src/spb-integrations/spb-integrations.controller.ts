import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Public } from 'src/auth/auth-public.decorator';
import { DepositDto } from './dto/deposit.dto';
import { SpbIntegrationsActions } from './spb-integrations.actions';

@Controller('spb')
export class SpbIntegrationsController {
  constructor(
    private actions: SpbIntegrationsActions
  ) {}

  @Post('events')
  @Public()
  @HttpCode(200)
  async receiveDeposit(@Body() deposit: DepositDto) {
    const { 
      target: { account },
      origin: { cpf: cpfOrigin },
      amount
    } = deposit;

    return this.actions.receiveDeposit(account, cpfOrigin, amount);
  }
}

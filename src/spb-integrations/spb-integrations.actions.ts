import { Injectable } from '@nestjs/common';
import InvalidCpfError from './errors/invalid-cpf.error';
import { SpbIntegrationsRepository } from './spb-integrations.repository';

@Injectable()
export class SpbIntegrationsActions {
  constructor(private repository: SpbIntegrationsRepository) {}

  async receiveDeposit(account: string, cpfOrigin: string, amount: number) {
    const { _id, cpf } = await this.repository.getUserCpfFromAccount(account);

    if (cpfOrigin !== cpf) {
      throw new InvalidCpfError();
    }

    await this.repository.depositToCheckingAccount(_id, amount);

    return { message: 'Depósito realizado com sucesso' };
  }
}

export const getOkResponse = {
  status: 200,
  description: 'Carteira do usuário',
  schema: {
    type: 'object',
    properties: {
      checkingAccountAmount: {
        description: 'Saldo em conta corrente',
        type: 'number',
        example: 100,
      },
      positions: {
        type: 'array',
        description: 'Ativos',
        items: {
          type: 'object',
          properties: {
            symbol: {
              description: 'Identificador do ativo',
              type: 'string',
              example: 'PETR4',
            },
            currentPrice: {
              description: 'Preço atual do ativo',
              type: 'number',
              example: 20,
            },
            amount: {
              description: 'Quantidade de ativos',
              type: 'number',
              example: 1,
            },
          },
        },
      },
      positionsAmount: {
        type: 'number',
        description: 'Saldo em ativos',
        example: 20,
      },
      consolidated: {
        type: 'number',
        description: 'Somatório do saldo em conta corrente e ativos',
        example: 120,
      },
    },
  },
};

export const postCreatedResponse = {
  status: 201,
  description: 'Sucesso na execução da ordem',
  schema: {
    type: 'object',
    properties: {
      message: {
        description: 'Ordem executada com sucesso',
        type: 'string',
      },
    },
  },
};

export const postBadRequestResponse = {
  status: 400,
  description: 'Erro na execução da ordem',
  schema: {
    type: 'object',
    properties: {
      message: {
        description: 'Descrição do erro',
        type: 'string',
        example: 'Saldo insuficiente',
      },
    },
  },
};

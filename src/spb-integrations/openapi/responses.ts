export const postOkResponse = {
  status: 200,
  description: 'Depósito realizado',
  schema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'Depósito realizado com sucesso',
      },
    },
  },
};

export const badRequestResponse = {
  status: 400,
  description: 'CPF inválido ou conta de destino inválida',
  schema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'CPF de origem não é o mesmo do destino',
      },
    },
  },
};

export const getOkResponse = {
  status: 200,
  description: '5 ações mais negociadas',
  schema: {
    type: 'object',
    properties: {
      symbol: {
        description: 'Identificador da ação',
        type: 'string',
      },
      currentPrice: {
        description: 'Preço atual da ação',
        type: 'number',
      }
    },
  },
};
export const postCreatedResponse = {
  status: 201,
  description: 'Usuário autenticado com sucesso',
  schema: {
    type: 'object',
    properties: {
      access_token: {
        description: 'Token JWT',
        type: 'string',
      },
    },
  },
};

export const postBadRequestResponse = {
  status: 400,
  description: 'Dados inválidos',
  schema: {
    type: 'object',
    properties: {
      message: {
        description: 'Descrição do erro',
        type: 'string',
        example: 'Credenciais inválidas',
      },
    },
  },
};

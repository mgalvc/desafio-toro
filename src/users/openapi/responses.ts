export const getOkResponse = {
  status: 200,
  description: 'Detalhes do usuário',
  schema: {
    type: 'object',
    properties: {
      _id: {
        description: 'Identificador do usuário',
        type: 'string',
      },
      name: {
        description: 'Nome do usuário',
        type: 'string',
      },
      cpf: {
        description: 'CPF do usuário',
        type: 'string',
      },
    },
  },
};

export const getNotFoundResponse = {
  status: 404,
  description: 'Usuário não encontrado',
};

export const postCreatedResponse = {
  status: 201,
  description: 'Usuário criado com sucesso',
  schema: {
    type: 'object',
    properties: {
      id: {
        description: 'Identificador do usuário',
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
        example: 'Este CPF já está sendo utilizado',
      },
    },
  },
};

export const putOkResponse = {
  status: 200,
  description: 'Usuário atualizado com sucesso',
};

export const putNotFoundResponse = {
  status: 404,
  description: 'Usuário não encontrado',
};

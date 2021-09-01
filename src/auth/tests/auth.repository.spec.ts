import { AuthRepository } from '../auth.repository';
import UserNotFoundError from '../errors/user-not-found.error';

describe('AuthRepository', () => {
  let repository: AuthRepository;

  const userModel = {
    findOne: () => jest.fn(),
  } as any;

  const userMock = {
    toJSON: () => ({
      cpf: '1234567890',
      name: 'matheus',
    }),
  };

  beforeEach(async () => {
    repository = new AuthRepository(userModel);
  });

  it('should return JSON user data', async () => {
    jest.spyOn(userModel, 'findOne').mockResolvedValueOnce(userMock);

    const res = await repository.findByCpfAndPassword('1234567890', '123');

    expect(res).toEqual({
      cpf: '1234567890',
      name: 'matheus',
    });
  });

  it('should return a user not found error', () => {
    jest.spyOn(userModel, 'findOne').mockResolvedValueOnce(undefined);
    const res = repository.findByCpfAndPassword('', '');
    expect(res).rejects.toBeInstanceOf(UserNotFoundError);
  });
});

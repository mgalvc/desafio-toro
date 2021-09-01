import { AuthActions } from '../auth.actions';

describe('AuthActions', () => {
  let actions: AuthActions;

  const authRepository = {
    findByCpfAndPassword: jest.fn(),
  } as any;

  const jwtService = {
    sign: jest.fn(),
  } as any;

  beforeEach(async () => {
    actions = new AuthActions(authRepository, jwtService);
  });

  it('should login returning user name and access token', async () => {
    jest
      .spyOn(authRepository, 'findByCpfAndPassword')
      .mockResolvedValueOnce({ name: 'matheus' } as any);
    jest.spyOn(jwtService, 'sign').mockReturnValueOnce('abc123');

    const res = await actions.login({
      cpf: '1234567890',
      password: '123456',
    });

    expect(res).toEqual({
      name: 'matheus',
      access_token: 'abc123',
    });
  });
});

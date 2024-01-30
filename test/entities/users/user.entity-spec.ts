import { UserEntity } from '@src/user/domain/entities';

describe('UserEntity', () => {
  const userEntity = new UserEntity();

  it('create entity', () => {
    userEntity.create({
      username: 'cafesao',
      email: 'my@cafesao.net',
      imageUrl: 'https://image.com.br',
      id: 'f4eb7499-ed0c-4dcd-9e6a-e3282e0ae4e2',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
    const { username, email, imageUrl, ...rest } = userEntity.getState();

    expect(username).toBe('cafesao');
    expect(email).toBe('my@cafesao.net');
    expect(imageUrl).toBe('https://image.com.br');
    expect(rest).toStrictEqual({
      id: 'f4eb7499-ed0c-4dcd-9e6a-e3282e0ae4e2',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
  });
});

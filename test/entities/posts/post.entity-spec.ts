import { PostEntity } from '@src/post/domain/entities';

describe('PostEntity', () => {
  const postEntity = new PostEntity();

  it('create entity', () => {
    postEntity.create({
      ownerUsernameId: '642793b5-bb69-445c-b1cb-2ed2b67779a3',
      title: 'abc',
      description: 'abc',
      imageUrl: 'https://image.com.br',
      id: '5dac0031-7322-4948-a166-985c5e403ba9',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
    const { ownerUsernameId, title, description, imageUrl, ...rest } =
      postEntity.getState();

    expect(ownerUsernameId).toBe('642793b5-bb69-445c-b1cb-2ed2b67779a3');
    expect(title).toBe('abc');
    expect(description).toBe('abc');
    expect(imageUrl).toBe('https://image.com.br');
    expect(rest).toStrictEqual({
      id: '5dac0031-7322-4948-a166-985c5e403ba9',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
  });
});

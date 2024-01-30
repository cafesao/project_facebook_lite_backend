import { EmoticonEntity } from '@src/emoticon/domain/entities';

describe('EmoticonEntity', () => {
  const emoticonEntity = new EmoticonEntity();

  it('create entity', () => {
    emoticonEntity.create({
      title: 'abc',
      emoticon: '😂',
      id: '642793b5-bb69-445c-b1cb-2ed2b67779a3',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
    const { title, emoticon, ...rest } = emoticonEntity.getState();

    expect(title).toBe('abc');
    expect(emoticon).toBe('😂');
    expect(rest).toStrictEqual({
      id: '642793b5-bb69-445c-b1cb-2ed2b67779a3',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
  });
});

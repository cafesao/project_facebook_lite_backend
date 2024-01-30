import { ReactionEntity } from '@src/reaction/domain/entities';

describe('ReactionEntity', () => {
  const reactionEntity = new ReactionEntity();

  it('create entity', () => {
    reactionEntity.create({
      ownerUsernameId: 'ef99339a-6b10-4a80-b35f-fbf28576685c',
      ownerPostId: '0a6b852e-f9cb-4ace-9875-b9c2844f6c54',
      emoticonId: 'b155197a-12d1-4033-8fc8-d17b0e48acb6',
      id: '8ba45097-cb5b-4c44-81db-2d9c673c9aff',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
    const { ownerUsernameId, ownerPostId, emoticonId, ...rest } =
      reactionEntity.getState();

    expect(ownerUsernameId).toBe('ef99339a-6b10-4a80-b35f-fbf28576685c');
    expect(ownerPostId).toBe('0a6b852e-f9cb-4ace-9875-b9c2844f6c54');
    expect(emoticonId).toBe('b155197a-12d1-4033-8fc8-d17b0e48acb6');
    expect(rest).toStrictEqual({
      id: '8ba45097-cb5b-4c44-81db-2d9c673c9aff',
      alternativeId: 1,
      createdDate: new Date('01/01/2001'),
      updatedDate: null,
      deletedDate: null,
    });
  });
});

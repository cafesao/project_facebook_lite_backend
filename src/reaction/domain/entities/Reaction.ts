import { BaseEntity } from '@src/shared/domain/entities/base';
import { InputDefault } from '@src/shared/domain/entities/inputs';

export class ReactionEntity extends BaseEntity {
  constructor() {
    super();
  }

  private ownerUsernameId: string;
  private ownerPostId: string;
  private emoticonId: string;

  public create(input: Partial<ReactionEntity.Input>) {
    this.verifyInput(input);
    this.associateInput(input);
  }

  public createDefault() {
    this.associateInput({
      ownerUsernameId: '',
      ownerPostId: '',
      emoticonId: '',
      id: '',
      alternativeId: 0,
      createdDate: new Date('01/01/2000'),
      updatedDate: new Date('01/01/2000'),
      deletedDate: new Date('01/01/2000'),
    });
  }

  private associateInput(input: Partial<ReactionEntity.Input>) {
    this.ownerUsernameId = input?.ownerUsernameId;
    this.ownerPostId = input?.ownerPostId;
    this.emoticonId = input?.emoticonId;
    this.id = input?.id;
    this.alternativeId = input?.alternativeId;
    this.createdDate = input?.createdDate;
    this.updatedDate = input?.updatedDate;
    this.deletedDate = input?.deletedDate;
  }

  private verifyInput(input: Partial<ReactionEntity.Input>) {
    this.verifyId(input?.id);
    this.verifyOwnerId(input?.ownerUsernameId);
    this.verifyOwnerId(input?.ownerPostId);
    this.verifyOwnerId(input?.emoticonId);
  }

  private getRegex(input: ReactionEntity.GetRegex): RegExp {
    const regexTest = {};
    return new RegExp(regexTest[input]);
  }

  public getState() {
    return {
      ownerUsernameId: this.ownerUsernameId,
      ownerPostId: this.ownerPostId,
      emoticonId: this.emoticonId,
      ...this.getDefault(),
    };
  }
}

export namespace ReactionEntity {
  export type Create = {
    ownerUsernameId: string;
    ownerPostId: string;
    emoticonId: string;
  };

  export type GetRegex = '';

  export type Input = Create & InputDefault;
}

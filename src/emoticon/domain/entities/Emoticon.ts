import { BadRequestException } from '@nestjs/common';
import { BaseEntity } from '@src/shared/domain/entities/base';
import { InputDefault } from '@src/shared/domain/entities/inputs';
import { ExceptionsConstants } from '@src/shared/domain/exceptions';

export class EmoticonEntity extends BaseEntity {
  constructor() {
    super();
  }

  private title: string;
  private emoticon: string;

  public create(input: Partial<EmoticonEntity.Input>) {
    this.verifyInput(input);
    this.associateInput(input);
  }

  public createDefault() {
    this.associateInput({
      title: '',
      emoticon: '',
      id: '',
      alternativeId: 0,
      createdDate: new Date('01/01/2000'),
      updatedDate: new Date('01/01/2000'),
      deletedDate: new Date('01/01/2000'),
    });
  }

  private associateInput(input: Partial<EmoticonEntity.Input>) {
    this.title = input?.title;
    this.emoticon = input?.emoticon;
    this.id = input?.id;
    this.alternativeId = input?.alternativeId;
    this.createdDate = input?.createdDate;
    this.updatedDate = input?.updatedDate;
    this.deletedDate = input?.deletedDate;
  }

  private verifyInput(input: Partial<EmoticonEntity.Input>) {
    this.verifyId(input?.id);
    this.validateEmoticon(input?.emoticon);
  }

  private validateEmoticon(input: string) {
    if (!this.getRegex('verifyEmoticon').test(input)) {
      throw new BadRequestException(ExceptionsConstants.EMOTICON_NOT_VALID);
    }
  }

  private getRegex(input: EmoticonEntity.GetRegex): RegExp {
    const regexTest = {
      verifyEmoticon: /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu,
    };
    return new RegExp(regexTest[input]);
  }

  public getState() {
    return {
      title: this.title,
      emoticon: this.emoticon,
      ...this.getDefault(),
    };
  }
}

export namespace EmoticonEntity {
  export type Create = {
    title: string;
    emoticon: string;
  };

  export type GetRegex = 'verifyEmoticon';

  export type Input = Create & InputDefault;
}

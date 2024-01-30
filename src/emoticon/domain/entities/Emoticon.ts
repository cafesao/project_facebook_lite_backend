import { BadRequestException } from '@nestjs/common';
import { BaseEntity } from 'src/shared/domain/entities/base';
import { InputDefault } from 'src/shared/domain/entities/inputs';
import { ExceptionsConstants } from 'src/shared/domain/exceptions';

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
    this.validateTitle(input?.title);
    this.validateEmoticon(input?.emoticon);
  }

  private validateTitle(input: string) {
    if (!this.getRegex('validateTitle').test(input)) {
      throw new BadRequestException(ExceptionsConstants.TITLE_NOT_VALID);
    }
  }
  private validateEmoticon(input: string) {
    if (!this.getRegex('verifyEmoticon').test(input)) {
      throw new BadRequestException(ExceptionsConstants.DESCRIPTION_NOT_VALID);
    }
  }

  private getRegex(input: EmoticonEntity.GetRegex): RegExp {
    const regexTest = {
      validateTitle: /\s/g,
      validateEmoticon: /\s/g,
    };
    return regexTest[input];
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

  export type GetRegex = 'validateTitle' | 'verifyEmoticon';

  export type Input = Create & InputDefault;
}

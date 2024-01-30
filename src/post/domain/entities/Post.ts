import { BadRequestException } from '@nestjs/common';
import { BaseEntity } from 'src/shared/domain/entities/base';
import { InputDefault } from 'src/shared/domain/entities/inputs';
import { ExceptionsConstants } from 'src/shared/domain/exceptions';

export class PostEntity extends BaseEntity {
  constructor() {
    super();
  }

  private ownerUsernameId: string;
  private title: string;
  private description: string;
  private imageUrl: string;

  public create(input: Partial<PostEntity.Input>) {
    this.verifyInput(input);
    this.associateInput(input);
  }

  private associateInput(input: Partial<PostEntity.Input>) {
    this.ownerUsernameId = input?.ownerUsernameId;
    this.title = input?.title;
    this.description = input?.description;
    this.imageUrl = input?.imageUrl;
    this.id = input?.id;
    this.alternativeId = input?.alternativeId;
    this.createdDate = input?.createdDate;
    this.updatedDate = input?.updatedDate;
    this.deletedDate = input?.deletedDate;
  }

  private verifyInput(input: Partial<PostEntity.Input>) {
    this.verifyId(input?.id);
    this.verifyOwnerId(input?.ownerUsernameId);
    this.validateTitle(input?.title);
    this.validateDescription(input?.description);
    this.validateImageUrl(input?.imageUrl);
  }

  private validateTitle(input: string) {
    if (!this.getRegex('validateTitle').test(input)) {
      throw new BadRequestException(ExceptionsConstants.TITLE_NOT_VALID);
    }
  }
  private validateDescription(input: string) {
    if (!this.getRegex('verifyDescription').test(input)) {
      throw new BadRequestException(ExceptionsConstants.DESCRIPTION_NOT_VALID);
    }
  }
  private validateImageUrl(input: string) {
    if (!this.getRegex('validateImageUrl').test(input)) {
      throw new BadRequestException(ExceptionsConstants.IMAGE_URL_NOT_VALID);
    }
  }

  private getRegex(input: PostEntity.GetRegex): RegExp {
    const regexTest = {
      validateTitle: /\s/g,
      verifyDescription: /\s/g,
      validateImageUrl: /\s/g,
    };
    return regexTest[input];
  }

  public getState() {
    return {
      ownerUsernameId: this.ownerUsernameId,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      ...this.getDefault(),
    };
  }
}

export namespace PostEntity {
  export type Create = {
    ownerUsernameId: string;
    title: string;
    description: string;
    imageUrl: string;
  };

  export type GetRegex =
    | 'validateTitle'
    | 'verifyDescription'
    | 'validateImageUrl';

  export type Input = Create & InputDefault;
}

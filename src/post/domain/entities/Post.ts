import { BadRequestException } from '@nestjs/common';
import { BaseEntity } from '@src/shared/domain/entities/base';
import { InputDefault } from '@src/shared/domain/entities/inputs';
import { ExceptionsConstants } from '@src/shared/domain/exceptions';

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

  public createDefault() {
    this.associateInput({
      ownerUsernameId: '',
      title: '',
      description: '',
      imageUrl: '',
      id: '',
      alternativeId: 0,
      createdDate: new Date('01/01/2000'),
      updatedDate: new Date('01/01/2000'),
      deletedDate: new Date('01/01/2000'),
    });
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
    this.validateImageUrl(input?.imageUrl);
  }

  private validateImageUrl(input: string) {
    if (!this.getRegex('validateImageUrl').test(input)) {
      throw new BadRequestException(ExceptionsConstants.IMAGE_URL_NOT_VALID);
    }
  }

  private getRegex(input: PostEntity.GetRegex): RegExp {
    const regexTest = {
      validateImageUrl:
        '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$',
    };
    return new RegExp(regexTest[input]);
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

  export type GetRegex = 'validateImageUrl';

  export type Input = Create & InputDefault;
}

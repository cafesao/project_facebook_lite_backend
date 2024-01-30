import { BadRequestException } from '@nestjs/common';
import { BaseEntity } from '@src/shared/domain/entities/base';
import { InputDefault } from '@src/shared/domain/entities/inputs';
import { ExceptionsConstants } from '@src/shared/domain/exceptions';

export class UserEntity extends BaseEntity {
  constructor() {
    super();
  }

  private username: string;
  private email: string;
  private imageUrl: string;

  public create(input: Partial<UserEntity.Input>) {
    this.verifyInput(input);
    this.associateInput(input);
  }

  public createDefault() {
    this.associateInput({
      username: '',
      email: '',
      imageUrl: '',
      id: '',
      alternativeId: 0,
      createdDate: new Date('01/01/2000'),
      updatedDate: new Date('01/01/2000'),
      deletedDate: new Date('01/01/2000'),
    });
  }

  private associateInput(input: Partial<UserEntity.Input>) {
    this.username = input?.username;
    this.email = input?.email;
    this.imageUrl = input?.imageUrl;
    this.id = input?.id;
    this.alternativeId = input?.alternativeId;
    this.createdDate = input?.createdDate;
    this.updatedDate = input?.updatedDate;
    this.deletedDate = input?.deletedDate;
  }

  private verifyInput(input: Partial<UserEntity.Input>) {
    this.verifyId(input?.id);
    this.validateUsername(input?.username);
    this.validateEmail(input?.email);
    this.validateImageUrl(input?.imageUrl);
  }

  private validateUsername(input: string) {
    if (input.length > 32) {
      throw new BadRequestException(
        ExceptionsConstants.USERNAME_LARGE_64_LIMIT,
      );
    }
  }
  private validateEmail(input: string) {
    if (!this.getRegex('verifyEmail').test(input)) {
      throw new BadRequestException(ExceptionsConstants.EMAIL_NOT_VALID);
    }
  }
  private validateImageUrl(input: string) {
    if (!this.getRegex('validateImageUrl').test(input)) {
      throw new BadRequestException(ExceptionsConstants.IMAGE_URL_NOT_VALID);
    }
  }

  private getRegex(input: UserEntity.GetRegex): RegExp {
    const regexTest = {
      validateImageUrl:
        '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$',
      verifyEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    };
    return new RegExp(regexTest[input]);
  }

  public getState() {
    return {
      username: this?.username,
      email: this?.email,
      imageUrl: this?.imageUrl,
      ...this.getDefault(),
    };
  }
}

export namespace UserEntity {
  export type Create = {
    username: string;
    email: string;
    imageUrl: string;
  };

  export type GetRegex = 'validateImageUrl' | 'verifyEmail';

  export type Input = Create & InputDefault;
}

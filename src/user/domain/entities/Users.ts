import { BadRequestException } from '@nestjs/common';
import { BaseEntity } from 'src/shared/domain/entities/base';
import { InputDefault } from 'src/shared/domain/entities/inputs';
import { ExceptionsConstants } from 'src/shared/domain/exceptions';

export class UsersEntity extends BaseEntity {
  constructor() {
    super();
  }

  private username: string;
  private email: string;
  private imageUrl: string;

  public create(input: Partial<UsersEntity.Input>) {
    this.verifyInput(input);
    this.associateInput(input);
  }

  private associateInput(input: Partial<UsersEntity.Input>) {
    this.username = input?.username;
    this.email = input?.email;
    this.imageUrl = input?.imageUrl;
    this.id = input?.id;
    this.alternativeId = input?.alternativeId;
    this.createdDate = input?.createdDate;
    this.updatedDate = input?.updatedDate;
    this.deletedDate = input?.deletedDate;
  }

  private verifyInput(input: Partial<UsersEntity.Input>) {
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
    if (!this.getRegex('validateImageUrl').test(input)) {
      throw new BadRequestException(ExceptionsConstants.EMAIL_NOT_VALID);
    }
  }
  private validateImageUrl(input: string) {
    if (!this.getRegex('verifyEmail').test(input)) {
      throw new BadRequestException(ExceptionsConstants.IMAGE_URL_NOT_VALID);
    }
  }

  private getRegex(input: UsersEntity.GetRegex): RegExp {
    const regexTest = {
      validateImageUrl: /\s/g,
      verifyEmail: /\s/g,
    };
    return regexTest[input];
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

export namespace UsersEntity {
  export type Create = {
    username: string;
    email: string;
    imageUrl: string;
  };

  export type GetRegex = 'validateImageUrl' | 'verifyEmail';

  export type Input = Create & InputDefault;
}

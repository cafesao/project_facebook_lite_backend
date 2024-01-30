import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ExceptionsConstants } from '../exceptions';

export abstract class BaseEntity {
  public id: string;

  public alternativeId: number;

  public createdDate: Date;

  public updatedDate: Date;

  public deletedDate: Date;

  constructor() {
    //
  }

  protected delete(input?: any) {
    this.deletedDate = new Date();
    return this;
  }

  protected restore(input?: any) {
    this.deletedDate = null;
    return this;
  }

  protected isDeleted(): boolean {
    return !!this.deletedDate;
  }

  protected exists(): boolean {
    return !!this.id;
  }

  protected existsOrFail() {
    if (!this.exists()) throw new NotFoundException();
  }

  protected verifyId(id: string) {
    if (!this.getRegexDefault('verifyUUID').test(id)) {
      throw new BadRequestException(ExceptionsConstants.ID_NOT_UUID);
    }
  }

  protected verifyOwnerId(id: string) {
    if (!this.getRegexDefault('verifyUUID').test(id)) {
      throw new BadRequestException(ExceptionsConstants.OWNER_NOT_UUID);
    }
  }

  protected getRegexDefault(input: string): RegExp {
    const regexTest = {
      verifyUUID:
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    };
    return regexTest[input];
  }

  protected getDefault() {
    return {
      id: this?.id,
      alternativeId: this?.alternativeId,
      createdDate: this?.createdDate,
      updatedDate: this?.updatedDate,
      deletedDate: this?.deletedDate,
    };
  }

  abstract getState();
}

import { IFindUserWhere } from './find-user-where.interface';
import { IUpdateUserFields } from './update-user-fields.interface';

export interface IUpdateUser {
  readonly where: IFindUserWhere;

  readonly fields: IUpdateUserFields;
}

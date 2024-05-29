import { IUpdateTemporaryPasswordFields } from './update-temporary-password-fields.interface';
import { IUpdateTemporaryPasswordWhere } from './update-temporary-password-where.interface';

export interface IUpdateTemporaryPassword {
  readonly where: IUpdateTemporaryPasswordWhere;

  readonly fields: IUpdateTemporaryPasswordFields;
}

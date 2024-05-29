import * as crypto from 'crypto';
import { IUserEntity } from '../../../user/interfaces/user-entity.interface';

export const generateRandomUser = (
  partial?: Partial<IUserEntity>
): IUserEntity => {
  const random: IUserEntity = {
    isVerified: false,
    id: crypto.randomInt(10),
    name: crypto.randomBytes(16).toString('hex'),
    phone: crypto.randomBytes(16).toString('hex'),
    email: crypto.randomBytes(16).toString('hex'),
    address: crypto.randomBytes(16).toString('hex'),
    password: crypto.randomBytes(16).toString('hex')
  };

  Object.assign(random, partial);

  return random;
};

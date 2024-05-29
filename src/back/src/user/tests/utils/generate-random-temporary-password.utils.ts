import { TemporaryPassword } from 'src/user/entities/temporary-password.entity';
import * as crypto from 'crypto';
import { generateRandomUser } from './generate-random-user.util';
import { User } from 'src/user/entities/user.entity';
import { DeepPartial } from 'typeorm';

export const generateRandomTemporaryPassword = (
  partial?: DeepPartial<TemporaryPassword>
): TemporaryPassword => {
  const randomUser = generateRandomUser();
  const user = Object.assign(randomUser, partial.user) as User;

  const random: TemporaryPassword = {
    user,
    id: crypto.randomInt(5, 10),
    expiresAt: new Date('2025-01-01'),
    password: crypto.randomBytes(8).toString('hex')
  };

  Object.assign(random, partial);

  return random;
};

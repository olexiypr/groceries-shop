export interface IUserEntity {
  readonly id: number;

  readonly name: string;

  readonly email: string;

  readonly password: string;

  readonly phone?: string;

  readonly address?: string;

  readonly isVerified: boolean;
}

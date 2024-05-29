export interface ICreateUser {
  readonly name: string;

  readonly email: string;

  readonly password: string;

  readonly phone?: string;

  readonly address?: string;
}

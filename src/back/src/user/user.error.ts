export class UserError extends Error {
  constructor(message: string) {
    super(message);
  }

  public static UserNotUpdated(): UserError {
    return new UserError('User not updated');
  }

  public static TemporaryPasswordNotUpdated(): UserError {
    return new UserError('Temporary password not updated');
  }

  public static TemporaryPasswordNotDeleted(): UserError {
    return new UserError('Temporary password not deleted');
  }
}

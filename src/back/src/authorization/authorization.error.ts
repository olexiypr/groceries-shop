export class AuthorizationError extends Error {
  constructor(message: string) {
    super(message);
  }

  public static UserAlreadyExists(): AuthorizationError {
    return new AuthorizationError('User already exists');
  }

  public static WrongPassword(): AuthorizationError {
    return new AuthorizationError('Wrong password');
  }

  public static UserNotFound(): AuthorizationError {
    return new AuthorizationError('User not found');
  }

  public static AuthorizationHeaderNotFound(): AuthorizationError {
    return new AuthorizationError('Authorization header not found');
  }

  public static InvalidToken(): AuthorizationError {
    return new AuthorizationError('Invalid token');
  }
}

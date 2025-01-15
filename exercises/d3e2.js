// https://tech-docs.corndel.com/express/sending-errors.html

export class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

export class Account {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  updateUsername(newUsername, password) {
    if (!newUsername) {
      throw new AppError("New username is required", 400); // Bad Request
    }
    if (!password) {
      throw new AppError("Password is required", 401); // Unauthorized
    }
    if (password !== this.password) {
      throw new AppError("Incorrect password", 403); // Forbidden
    }

    this.username = newUsername;
  }
}

export interface IUser {
  email: string;
  password: string;
}

export class User implements IUser {
  email: string;
  password: string;

  constructor(email?: string, password?: string) {
    this.email = email;
    this.password = password;
  }

  static parse(json: string): IUser {
    const user = JSON.parse(json);
    if (user) {
      return new User(user.email, user.password);
    }
    return null;
  }
}

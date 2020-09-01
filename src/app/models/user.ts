export interface IJwt {
  access_token: string;
  expires_in: Int16Array;
  refresh_expires_in: Int16Array;
  refresh_token: string;
  token_type: string;
  id_token: string;
  session_state: string;
  scope: string;
}

export interface IUser {
  email: string;
  name: string;
  jwt: IJwt;
}

export class User implements IUser {
  email: string;
  name: string;
  jwt: IJwt;

  constructor(email?: string, name?: string, jwt?: IJwt) {
    this.email = email;
    this.name = name;
    this.jwt = jwt;
  }

  static parse(json: string): IUser {
    const user = JSON.parse(json);
    if (user) {
      return new User(user.email, user.name, user.jwt);
    }
    return null;
  }
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export interface UserWithToken extends User {
  accessToken: string;
}

export interface UserInRquest {
  userId: number;
}

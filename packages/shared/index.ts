export interface User {
  id: number;
  email: string;
  name?: string | null;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface LoginResponse extends AuthResponse {}
export interface RegisterResponse extends AuthResponse {}

export interface ProfileResponse extends User {}

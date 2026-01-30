import { BaseApi } from "./base-api";
import type { User } from "@/types";

export interface LoginResponse {
  user: User;
  accessToken: string;
}

class AuthService extends BaseApi {
  constructor() {
    super("auth");
  }

  async login(credentials: Record<string, any>): Promise<LoginResponse> {
    const { data } = await this.api.post<LoginResponse>("/login", credentials);
    return data;
  }

  async logout(): Promise<void> {
    await this.api.post("/logout");
  }

  async me(): Promise<User> {
    const { data } = await this.api.get<User>("/me");
    return data;
  }
}

export const authService = new AuthService();

import { BaseApi } from "./base-api";
import type { LoginResponse, ProfileResponse } from "@shared/core";

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

  async me(): Promise<ProfileResponse> {
    const { data } = await this.api.get<ProfileResponse>("/profile");
    return data;
  }
}

export const authService = new AuthService();

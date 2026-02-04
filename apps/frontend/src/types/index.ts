import type { User as SharedUser } from "@shared/core";

export type User = SharedUser;

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

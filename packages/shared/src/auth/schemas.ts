import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(6),
});

export type LoginInput = z.infer<typeof loginSchema>;

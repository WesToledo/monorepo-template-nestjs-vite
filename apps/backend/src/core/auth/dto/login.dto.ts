import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(6),
});

export class LoginDto extends createZodDto(loginSchema) {}

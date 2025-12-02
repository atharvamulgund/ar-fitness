import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Please enter valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(16, "Password must be at most 16 characters."),
});

export const registerFormSchema = z
  .object({

    email: z.string().email("Please enter a valid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(16, "Password must be at most 16 characters."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
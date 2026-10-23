import { z } from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(200, { message: "Name is too long" }),
  email: z.email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password is required" })
    .max(200, { message: "Password is too long" }),

  skills: z.array(z.string()),
});

export type FormData = z.infer<typeof FormSchema>;

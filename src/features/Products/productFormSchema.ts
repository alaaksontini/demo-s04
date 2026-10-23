import { z } from "zod";

export const productFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title is too long" }),
  price: z.coerce
    .number()
    .min(0.01, { message: "Price must be greater than 0" }),
  category: z
    .string()
    .min(1, { message: "Category is required" })
    .max(50, { message: "Category is too long" }),
  image: z.string().url({ message: "Must be a valid URL" }),
  /* rating: z.object({
    rate: z.number().min(0).max(5),
    count: z.number().min(0),
    }),*/
});

export type ProductFormInput = z.input<typeof productFormSchema>;
export type ProductFormData = z.output<typeof productFormSchema>;

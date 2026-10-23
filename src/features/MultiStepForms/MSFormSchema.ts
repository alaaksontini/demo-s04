import z from "zod";

export const MSFormSchema = z.object({
  nom: z.string(),
  prenom: z.string(),
  age: z.number(),

  aneesEtudes: z.number(),
  diplome: z.string(),
});

export type MSFormData = z.infer<typeof MSFormSchema>;

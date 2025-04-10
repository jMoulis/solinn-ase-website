import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Adresse e-mail invalide'),
  message: z.string().min(1, 'Le message est requis')
});

export type ContactFormInput = z.infer<typeof contactSchema>;
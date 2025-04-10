'use server';

import { Resend } from 'resend';
import ContactReply from './components/ConfirmationEmail';
import { contactSchema } from '@/lib/validation/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

type ErrorMessage = {
  name?: string[] | undefined;
  email?: string[] | undefined;
  message?: string[] | undefined;
  system?: string[] | undefined;
} | null;
type Response = {
  status: boolean;
  errors: ErrorMessage;
};
export async function sendEmail(formData: FormData): Promise<Response> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  });

  if (!parsed.success) {
    return {
      status: false,
      errors: parsed.error.flatten().fieldErrors
    };
  }
  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: 'Julien de Solinn <contact@mail.solinn.fr>',
    to: email,
    subject: '📬 Demande de contact',
    react: ContactReply({
      name: name
    })
  });
  if (error) {
    return {
      status: false,
      errors: {
        system: [
          "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer plus tard."
        ]
      }
    };
  }
  await resend.emails.send({
    from: 'Julien de Solinn <contact@mail.solinn.fr>',
    to: 'contact@solinn.fr',
    subject: '📬 Nouveau message de contact',
    html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `
  });

  return { status: true, errors: null };
}

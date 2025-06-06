'use server';

import { Resend } from 'resend';
import ContactReply from './[locale]/components/Contact/ConfirmationEmail';
import { contactSchema } from '@/lib/validation/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

const checkCaptcha = async (token: string): Promise<boolean> => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to verify reCAPTCHA');
  }

  const data = await response.json();
  console.log('reCAPTCHA verification response:', data);
  return data.success;
};
type ErrorMessage = {
  name?: string[] | undefined;
  email?: string[] | undefined;
  message?: string[] | undefined;
  system?: string[] | undefined;
} | null;
type Response = { status: boolean; errors: ErrorMessage };

export async function sendEmail(
  formData: FormData,
  token: string
): Promise<Response> {
  const isValidToken = await checkCaptcha(token);
  console.log('reCAPTCHA token valid:', isValidToken);
  if (!isValidToken) {
    return {
      status: false,
      errors: {
        system: ['La vérification reCAPTCHA a échoué. Veuillez réessayer.']
      }
    };
  }
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    topic: formData.get('topic'),
    app: formData.get('app')
  });

  if (!parsed.success) {
    return { status: false, errors: parsed.error.flatten().fieldErrors };
  }
  const { name, email, message, topic, app } = parsed.data;

  const { error } = await resend.emails.send({
    from: 'Julien de Solinn <contact@mail.solinn.fr>',
    to: email,
    subject: topic || '📬 Demande de contact',
    react: ContactReply({ name: name })
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
        <p><strong>Sujet :</strong> ${topic || 'Aucun sujet spécifié'}</p>
        <p><strong>Application :</strong> ${app || 'Aucune application spécifiée'}</p>
      `
  });

  return { status: true, errors: null };
}

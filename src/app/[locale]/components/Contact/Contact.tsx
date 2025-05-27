'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormInput } from '@/lib/validation/contact';
import { sendEmail } from '../../../actions';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Required = () => {
  return (
    <span className='text-xs text-mute px-2 bg-indigo-400 mx-2 rounded-sm text-white'>
      Requis
    </span>
  );
};
export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormInput) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const result = await sendEmail(formData);

    if (result.status) {
      setSuccess(true);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 md:mx-20 my-8 w-[400px]'>
      {/* Nom */}
      <div>
        <Label htmlFor='name' className='mb-2'>
          <span>Votre nom</span>
          <Required />
        </Label>
        <Input type='text' id='name' {...register('name')} />
        {errors.name && (
          <p className='text-sm text-red-600'>{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor='email' className='mb-2'>
          <span>Votre email</span>
          <Required />
        </Label>
        <Input type='email' id='email' {...register('email')} />
        {errors.email && (
          <p className='text-sm text-red-600'>{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor='message' className='mb-2'>
          <span>Votre message</span>
          <Required />
        </Label>
        <Textarea
          id='message'
          rows={15}
          {...register('message')}
          className='h-[200px] resize-none text-[16px]'
        />
        {errors.message && (
          <p className='text-sm text-red-600'>{errors.message.message}</p>
        )}
      </div>

      {/* Bouton */}
      <div className='text-center'>
        <Button type='submit' disabled={isSubmitting} className='bg-black'>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
        {success && (
          <p className='text-green-600 mt-4'>
            ✅ Votre message a bien été envoyé.
          </p>
        )}
      </div>
    </form>
  );
}

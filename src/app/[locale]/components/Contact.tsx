'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormInput } from '@/lib/validation/contact';
import { sendEmail } from '../../actions';
import { useState } from 'react';

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
    <section
      id='contact'
      className='bg-[#fffdf6] text-[#2a1d0f] md:py-20 py-6 px-6 font-sans border-t border-[#f0ead4]'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center md:mb-12 mb-4'>
          <h2 className='text-3xl font-bold text-[#cc6600] mb-2'>
            Nous contacter
          </h2>
          <p className='text-gray-700 text-lg'>
            Une question ? Une démo ? Écrivez-nous, on vous répond vite 😊
          </p>
          <a href='mailto:contact@solinn.fr' className='hover:underline'>
            Par mail : contact@solinn.fr
          </a>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-1 md:min-w-lg md:mx-20'>
          {/* Nom */}
          <div>
            <label
              htmlFor='name'
              className='block mb-2 font-medium text-[#5a4d1a]'>
              <span>Votre nom</span>
              <Required />
            </label>
            <input
              type='text'
              id='name'
              {...register('name')}
              className='w-full px-4 py-2 border border-[#e7e2ca] rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#dfcd72]'
            />
            {errors.name && (
              <p className='text-sm text-red-600'>{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block mb-2 font-medium text-[#5a4d1a]'>
              <span>Votre email</span>
              <Required />
            </label>
            <input
              type='email'
              id='email'
              {...register('email')}
              className='w-full px-4 py-2 border border-[#e7e2ca] rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#dfcd72]'
            />
            {errors.email && (
              <p className='text-sm text-red-600'>{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor='message'
              className='block mb-2 font-medium text-[#5a4d1a]'>
              <span>Votre message</span>
              <Required />
            </label>
            <textarea
              id='message'
              rows={5}
              {...register('message')}
              className='w-full resize-none px-4 py-2 border border-[#e7e2ca] rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#dfcd72]'
            />
            {errors.message && (
              <p className='text-sm text-red-600'>{errors.message.message}</p>
            )}
          </div>

          {/* Bouton */}
          <div className='text-center'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-700 cursor-pointer transition'>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            {success && (
              <p className='text-green-600 mt-4'>
                ✅ Votre message a bien été envoyé.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

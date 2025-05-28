'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormInput } from '@/lib/validation/contact';
import { sendEmail } from '../../../actions';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { BodyMD } from '../Typos/Typos';

const Required = () => {
  return (
    <span className='text-xs text-mute px-2 bg-indigo-400 mx-2 rounded-sm text-white'>
      Requis
    </span>
  );
};

type Props = {
  topic?: string;
  app?: string;
};
export default function ContactForm({ topic, app }: Props) {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      topic: topic || '',
      app: app || ''
    }
  });

  const onSubmit = async (data: ContactFormInput) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('topic', data.topic);
    formData.append('app', data.app || '');
    const result = await sendEmail(formData);

    if (result.status) {
      setSuccess(true);
      form.reset();
    } else {
      setSuccess(false);
      setErrors(result.errors || {});
    }
  };

  if (success) {
    return (
      <BodyMD className='text-green-600 mt-4'>
        ✅ Votre message a bien été envoyé.
      </BodyMD>
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4 my-8 w-full '>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='name'>
                Votre nom <Required />
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Jeanne Dupont'
                  className='text-[16px] bg-white'
                  id='name'
                  {...field}
                />
              </FormControl>
              <FormMessage>{errors.name}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='email'>
                Votre email <Required />
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  id='email'
                  placeholder='jeanne@dupond.fr'
                  className='text-[16px] bg-white'
                  {...field}
                />
              </FormControl>
              <FormMessage>{errors.email}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='topic'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='topic'>
                Sujet <Required />
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger className='w-full bg-white'>
                    <SelectValue placeholder='Sujet de votre demande' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='demo'>Demande de démo</SelectItem>
                    <SelectItem value='contact'>Demande de contact</SelectItem>
                    <SelectItem value='other'>Autre</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{errors.topic}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='app'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='app'>Quelle plateforme ?</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <SelectTrigger className='w-full bg-white'>
                    <SelectValue placeholder='Plateforme' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='ase'>ASE</SelectItem>
                    <SelectItem value='asso'>Asso</SelectItem>
                    <SelectItem value='other'>Autre</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{errors.app}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='message'>
                Votre message <Required />
              </FormLabel>
              <FormControl>
                <Textarea
                  id='message'
                  rows={5}
                  {...field}
                  className='h-[200px] resize-none text-[16px] bg-white'
                />
              </FormControl>
              <FormMessage>{errors.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Bouton */}
        <div className='text-center'>
          <Button
            type='submit'
            disabled={form.formState.isSubmitting}
            className='bg-black hover:bg-black/70 cursor-pointer'>
            {form.formState.isSubmitting
              ? 'Envoi en cours...'
              : 'Envoyer le message'}
          </Button>
        </div>
      </form>
    </Form>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import ContactForm from './Contact';
import { InlineWidget } from 'react-calendly';

export function ContactButton() {
  const t = useTranslations('HomePage.navbar');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='bg-transparent hover:bg-black border-black hover:text-white'>
          {t('contactUs')}
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[90vw]'>
        <DialogHeader>
          <DialogTitle>Contactez-nous</DialogTitle>
          <DialogDescription>
            Prenez contact avec notre équipe pour discuter de vos besoins, poser
            vos questions ou planifier une démonstration de nos solutions.
          </DialogDescription>
          <div className='flex'>
            <ContactForm />
            <InlineWidget url='https://calendly.com/julien-moulis-solinn' />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

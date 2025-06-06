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
import { cn } from '@/lib/utils';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

type Props = {
  label: string;
  className?: string;
  topic: string;
  app?: string;
  children?: React.ReactNode;
};
export function ContactButton({
  className,
  label,
  topic,
  app,
  children
}: Props) {
  const t = useTranslations('HomePage.navbar');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'bg-transparent hover:bg-cta-hover hover:border-cta-hover border-black hover:text-white cursor-pointer',
            className
          )}>
          {label ?? t('contactUs')}
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[90vw] md:w-[40vw] bg-custom-white'>
        <DialogHeader>
          <DialogTitle>Contactez-nous</DialogTitle>
          <DialogDescription hidden>
            Prenez contact avec notre équipe pour discuter de vos besoins, poser
            vos questions ou planifier une démonstration de nos solutions.
          </DialogDescription>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
            <ContactForm topic={topic} app={app} />
            <div id='captcha-container' />
          </GoogleReCaptchaProvider>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

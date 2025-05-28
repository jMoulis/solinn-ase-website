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
  console.log(label, 'label in ContactButton');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'bg-transparent hover:bg-black border-black hover:text-white cursor-pointer',
            className
          )}>
          {label ?? t('contactUs')}
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[90vw] md:w-[40vw] bg-primary'>
        <DialogHeader>
          <DialogTitle>Contactez-nous</DialogTitle>
          <DialogDescription hidden>
            Prenez contact avec notre équipe pour discuter de vos besoins, poser
            vos questions ou planifier une démonstration de nos solutions.
          </DialogDescription>
          <ContactForm topic={topic} app={app} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react'; // NEW import
import { Button } from '@/components/ui/button';

export function MotionHorizontalCollapsible() {
  const [open, setOpen] = React.useState(false);
  const panelWidth = 320; // px

  return (
    <div className='flex items-center'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => setOpen((prev) => !prev)}
        className='mr-2'>
        {open ? 'Hide' : 'Show'}
      </Button>
      <div className='relative'>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: panelWidth, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                width: { type: 'spring', stiffness: 300, damping: 35 },
                opacity: { duration: 0.2 }
              }}
              className='overflow-hidden bg-muted border rounded shadow p-4 flex flex-col h-32' // <--- hauteur fixe ici !
              style={{ width: panelWidth, minWidth: 0, height: '8rem' }} // Tailwind h-32 = 8rem = 128px
            >
              <div className='overflow-y-auto h-full'>
                <strong className='block mb-2'>
                  Horizontal Collapsible 🚀
                </strong>
                <p>
                  Hauteur fixe grâce à <b>h-32</b>.<br />
                  Le contenu scrollera verticalement si besoin.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

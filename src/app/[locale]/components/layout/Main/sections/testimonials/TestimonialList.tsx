'use client';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialList({
  testimonials
}: {
  testimonials: {
    image: StaticImageData;
    name: string;
    role: string;
    text: string;
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Largeur de base et largeur ouverte (en px ou fr selon le layout voulu)
  const closedWidth = 230;
  const openWidth = 230 + 320; // image + panel

  return (
    <ul
      className='grid gap-6 max-w-[99vw] w-full overflow-auto'
      style={{
        gridTemplateColumns: testimonials
          .map((_, i) =>
            openIndex === i ? `${openWidth}px` : `${closedWidth}px`
          )
          .join(' ')
      }}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          {...testimonial}
          key={index}
          open={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </ul>
  );
}

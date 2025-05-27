import { TitleH3 } from '@/app/[locale]/components/Typos/Typos';
import testimonial1 from '@/lib/assets/images/testimonial1.png';
import testimonial2 from '@/lib/assets/images/testimonial2.png';
import testimonial3 from '@/lib/assets/images/testimonial3.png';
import TestimonialList from './TestimonialList';

const testimonials = [
  {
    image: testimonial1,
    name: 'Marc',
    role: 'Directrice de l’association AidePlus',
    text: 'Solinn a transformé notre manière de travailler. Grâce à leurs outils, nous avons gagné en efficacité et en clarté dans nos actions.'
  },
  {
    image: testimonial2,
    name: 'Géraldine',
    role: 'Coordinatrice chez Solidarité Terre',
    text: 'L’équipe de Solinn a su comprendre nos besoins spécifiques. Leurs solutions sont intuitives et parfaitement adaptées à notre quotidien.'
  },
  {
    image: testimonial3,
    name: 'Stéphane',
    role: 'Assistant sociale',
    text: 'Avec Solinn, je peux me concentrer sur l’humain. Les outils sont simples et me permettent de suivre mes bénéficiaires sans stress.'
  }
];

function Testimonials() {
  return (
    <section
      id='testimonials'
      className='flex flex-col bg-[#FEFDF6] md:py-[80px] py-[40px] pt-0 px-6 md:px-[80px] '>
      <TitleH3 className='text-center mb-4'>
        Ils en parlent mieux que nous
      </TitleH3>
      <TestimonialList testimonials={testimonials} />
    </section>
  );
}
export default Testimonials;

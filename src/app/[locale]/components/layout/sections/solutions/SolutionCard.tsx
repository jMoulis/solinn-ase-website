import { BodyMD, TitleH3 } from '@/app/[locale]/components/Typos/Typos';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { Plus } from 'lucide-react';
import { ContactButton } from '../../../Contact/ContactButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  description: string;
  subtitle?: string;
  image: StaticImageData;
  items: string[];
  bgColor: string;
  button: {
    label: string;
    topic: string;
    app: string;
  };
};
function SolutionCard({
  image,
  title,
  description,
  items,
  bgColor,
  button,
  subtitle
}: Props) {
  const splitItems = (items: string[]) => {
    const firstFiveItems = items.slice(0, 5);
    const remainingItems = items.slice(5);
    return { firstFiveItems, remainingItems };
  };
  const { firstFiveItems, remainingItems } = splitItems(items);

  if (!image || !title || !description) {
    return null; // Return null if any required prop is missing
  }
  return (
    <li
      className={twMerge(
        'flex-1 rounded-[40px] md:p-[40px] p-6  space-y-4',
        bgColor
      )}>
      <header>
        <Image alt={title} src={image} width={300} height={200} />
      </header>
      <TitleH3>{title}</TitleH3>
      <p className='italic'>{subtitle}</p>
      <BodyMD>{description}</BodyMD>
      <ul className='ml-4 mb-0'>
        {firstFiveItems.map((item, index) => (
          <li className='list-disc' key={index}>
            <BodyMD>{item}</BodyMD>
          </li>
        ))}
      </ul>
      <Collapsible>
        <CollapsibleContent>
          <ul className='ml-4 mb-0'>
            {remainingItems.map((item, index) => (
              <li className='list-disc' key={index}>
                <BodyMD>{item}</BodyMD>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
        <CollapsibleTrigger className='mt-4 flex items-center hover:underline'>
          <span>En savoir</span> <Plus className='inline ml-2' size={20} />
        </CollapsibleTrigger>
      </Collapsible>
      <ContactButton
        className='bg-black text-white hover:bg-cta-hover'
        label={button.label}
        topic={button.topic}
        app={button.app}>
        <FontAwesomeIcon icon={faArrowRight} />
      </ContactButton>
    </li>
  );
}
export default SolutionCard;

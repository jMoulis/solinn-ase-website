import { BodyMD, TitleH3 } from '@/app/[locale]/components/Typos/Typos';
import Image, { StaticImageData } from 'next/image';
import { twMerge } from 'tailwind-merge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import Button from '@/app/[locale]/components/buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  items: string[];
  bgColor: string;
};
function SolutionCard({ image, title, description, items, bgColor }: Props) {
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
      className={twMerge('flex-1 rounded-[40px] p-[40px] space-y-4', bgColor)}>
      <header>
        <Image alt={title} src={image} width={300} height={200} />
      </header>
      <TitleH3>{title}</TitleH3>
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
        <CollapsibleTrigger className='mt-4'>En savoir +</CollapsibleTrigger>
      </Collapsible>
      <Button>
        <span>Demander une démo</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          className='ml-2'
          style={{
            fontSize: '12px',
            color: '#FFFFFF',
            width: '16px',
            height: '16px'
          }}
        />
      </Button>
    </li>
  );
}
export default SolutionCard;

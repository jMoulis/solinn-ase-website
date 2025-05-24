import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={twMerge(
        'bg-neutral-900 text-white w-fit rounded-[8px] whitespace-nowrap px-[24px] py-[12px] text-[16px] flex justify-center items-center',
        className
      )}>
      {children}
    </button>
  );
};
export default Button;

import React from 'react';

type Props = { children: React.ReactNode };

function Main({ children }: Props) {
  return (
    <main className='flex flex-col bg-white overflow-hidden pt-[100px]'>
      {children}
    </main>
  );
}
export default Main;

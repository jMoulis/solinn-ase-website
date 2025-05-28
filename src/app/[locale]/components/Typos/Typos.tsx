import React from 'react';
import { twMerge } from 'tailwind-merge';

export const TitleH1 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1
    style={{ fontFeatureSettings: "'liga' off" }}
    className={twMerge(
      'font-[dxRigraf] font-semibold tracking-[-2.25px] md:text-[90px] text-[60px] leading-[60px] md:leading-[90px]',
      className
    )}>
    {children}
  </h1>
);
export const TitleH2 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={twMerge(
      'font-[dxRigraf] text-center font-semibold md:text-[60px] text-[40px] leading-[50px] md:leading-[60px] tracking-[-0.01em]',
      className
    )}>
    {children}
  </h2>
);
export const TitleH3 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={twMerge(
      'font-[dxRigraf] md:text-[40px] text-[25px]  text-center md:text-left',
      className
    )}>
    {children}
  </h3>
);

export const TitleH4 = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4 className={twMerge('font-[dxRigraf] md:text-[30px]', className)}>
    {children}
  </h4>
);

export const DisplayXSBold = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={twMerge(
      'text-[24px] font-[700] leading-[32px] tracking-[-0.01em]',
      className
    )}>
    {children}
  </p>
);
export const BodyMD = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={twMerge(
      'text-[16px] font-normal leading-[24px] tracking-[-0.01em]',
      className
    )}>
    {children}
  </p>
);
export const BodyLG = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={twMerge(
      'text-[18px] font-normal leading-[28px] tracking-[-0.01em]',
      className
    )}>
    {children}
  </p>
);
export const BodyXLMD = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={twMerge(
      'text-[20px] font-[500] leading-[32px] tracking-[-0.01em]',
      className
    )}>
    {children}
  </p>
);

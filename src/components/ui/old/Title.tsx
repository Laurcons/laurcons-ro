import { Fonts } from '@/lib/fonts';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Title({
  tag = 'h1',
  children,
  className,
}: PropsWithChildren & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}) {
  const Tag = tag;
  return (
    <Tag className={twMerge(`text-4xl ${Fonts.ubuntu.className}`, className)}>
      {children}
    </Tag>
  );
}

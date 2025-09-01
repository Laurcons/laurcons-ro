import { Fonts } from '@/lib/fonts';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export default function Heading({
  tag = 'h1',
  children,
  className,
  id,
}: PropsWithChildren & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  id?: string;
}) {
  const Tag = tag;
  return (
    <Tag
      className={classNames(`${Fonts.robotoCondensed.className}`, className)}
      id={id}
    >
      {children}
    </Tag>
  );
}

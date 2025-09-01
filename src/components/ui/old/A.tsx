import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export default function A(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a
      href={props.href}
      className="text-sky-500"
      target={props.href?.startsWith('http') ? '_blank' : '_self'}
    >
      {props.children}
    </a>
  );
}

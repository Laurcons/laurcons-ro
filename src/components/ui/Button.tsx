import { twMerge } from 'tailwind-merge';

type ButtonUnderlyingElement = 'a' | 'button';
type PropsFor<T extends ButtonUnderlyingElement> = T extends 'button'
  ? React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  : React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >;

export default function Button<T extends ButtonUnderlyingElement>({
  type,
  className,
  ...rest
}: {
  type: ButtonUnderlyingElement;
} & PropsFor<T>) {
  const Tag = type;
  return (
    <Tag
      {...(rest as any)}
      className={twMerge(
        'inline-block bg-sky-900 rounded px-3 py-2',
        className
      )}
    ></Tag>
  );
}

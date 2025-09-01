import { cn } from '@/lib/utils';

type Props = {
  Image: React.ReactNode;
  caption?: string;
  className?: string;
};

export default function ImageCard({ Image, caption, className }: Props) {
  return (
    <figure
      className={cn('overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow', className)}
    >
      {/* <img className="w-full aspect-4/3" src={imageUrl} alt="image" /> */}
      {Image}
      {caption && <figcaption className="border-t-2 text-main-foreground border-border p-4">{caption}</figcaption>}
    </figure>
  );
}

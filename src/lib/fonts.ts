import { Inter, Roboto_Condensed, Ubuntu } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '500'],
  display: 'swap',
  style: ['italic', 'normal'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
});

export const Fonts = {
  inter,
  ubuntu,
  robotoCondensed,
};

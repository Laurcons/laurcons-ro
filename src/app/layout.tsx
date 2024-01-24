import { Fonts } from '@/lib/fonts';
import './globals.css';
import Banner from '@/components/HomeBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laurcons Personal',
  description: "Laurcons' Personal Website",
  openGraph: {
    title: 'Laurcons Personal',
    description: "Laurcons' Personal Website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`max-w-screen-xl mx-auto py-4 ${Fonts.inter.className}`}>
        <Banner />
        <div className="px-10">{children}</div>
        <div className="mb-52"></div>
      </body>
    </html>
  );
}

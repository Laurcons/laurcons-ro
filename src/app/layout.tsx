import { Fonts } from '@/lib/fonts';
import './globals.css';
import { Inter } from 'next/font/google';
import Banner from '@/components/HomeBanner';

export const metadata = {
  title: 'Laurcons Personal',
  description: "Laurcons' Personal Website",
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

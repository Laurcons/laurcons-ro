import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laurcons Personal',
  description: "Laurcons' Personal Website",
  openGraph: {
    title: 'Laurcons Personal',
    description: "Laurcons' Personal Website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

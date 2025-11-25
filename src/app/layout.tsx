import type { Metadata } from 'next';
import { Geologica, Quicksand, SUSE } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const geologica = Geologica({
  variable: '--font-geologica',
  subsets: ['latin'],
});

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

const suse = SUSE({
  variable: '--font-suse-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eric Batiste',
  description: 'Personal website and portfolio of Eric Batiste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${geologica.className} ${suse.variable} bg-darkest antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

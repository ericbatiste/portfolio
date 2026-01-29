import type { Metadata } from 'next';
import { Geologica, Quicksand, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const geologica = Geologica({
  variable: '--font-primary',
  subsets: ['latin'],
});

const quicksand = Quicksand({
  variable: '--font-secondary',
  subsets: ['latin'],
});

const splineSansMono = Spline_Sans_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eric Batiste',
  description: 'Website and Portfolio of Eric Batiste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geologica.className} ${quicksand.variable} ${splineSansMono.variable} bg-darkest antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

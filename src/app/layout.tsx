import type { Metadata } from 'next';
import { Geologica, Quicksand, Source_Code_Pro } from 'next/font/google';
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

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code',
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
    <html lang="en">
      <body
        className={`${geologica.className} ${quicksand.variable} ${sourceCodePro.variable} bg-darkest antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

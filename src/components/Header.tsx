'use client';

import DevNav from './DevNav';
import MusicNav from './MusicNav';
import HomeNav from './HomeNav';
import ContactNav from './ContactNav';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isDevRoute = pathname.includes('developer');
  const isMusicRoute = pathname.includes('music');
  const isContactRoute = pathname.includes('contact');

  return (
    <div className="fixed top-0 z-50 w-full">
      {isDevRoute ? (
        <DevNav />
      ) : isMusicRoute ? (
        <MusicNav />
      ) : isContactRoute ? (
        <ContactNav />
      ) : (
        <HomeNav />
      )}
    </div>
  );
}

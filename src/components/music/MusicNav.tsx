'use client';

import Link from 'next/link';
import NavMenuBtn from '../NavMenuBtn';
import EDBLogo from '../../images/EDBLogo.svg';

export default function MusicNav() {
  const navLinks = [{ href: '/contact', label: 'Contact' }];

  return (
    <nav className="text-lighter flex w-full items-center justify-between px-8 py-4 shadow-lg">
      <Link href="/">
        <EDBLogo
          width={60}
          height={60}
          fill="none"
          stroke="currentColor"
          className="hover:text-howdy-amber inline-block transition duration-300 hover:cursor-pointer [&_path]:stroke-8"
        />
      </Link>
      <div className="hidden space-x-4 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-howdy-amber text-xl transition duration-300 hover:cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <NavMenuBtn navlinks={navLinks} />
    </nav>
  );
}

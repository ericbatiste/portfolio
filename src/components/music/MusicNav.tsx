'use client';

import Link from 'next/link';
import NavMenuBtn from '../NavMenuBtn';

export default function MusicNav() {
  const navLinks = [{ href: '/contact', label: 'Contact' }];

  return (
    <nav className="text-light flex w-full items-center justify-between px-8 py-4 shadow-lg">
      <Link
        href="/"
        className="hover:text-howdy-amber text-2xl font-bold transition duration-300 hover:cursor-pointer"
      >
        EDB
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

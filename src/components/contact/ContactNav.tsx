'use client';

import Link from 'next/link';
import NavMenuBtn from '../NavMenuBtn';

export default function ContactNav() {
  const navLinks = [
    { href: '/developer', label: 'Developer' },
    { href: '/music', label: 'Musician' },
  ];

  return (
    <nav className="text-lighter flex w-full items-center justify-between px-8 py-4">
      <Link
        href="/"
        className="text-3xl font-bold transition duration-300 hover:text-cyan-600"
      >
        EDB
      </Link>
      <div className="hidden space-x-4 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xl font-semibold transition duration-300 hover:text-cyan-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <NavMenuBtn navlinks={navLinks} />
    </nav>
  );
}

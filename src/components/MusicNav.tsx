'use client';

import Link from 'next/link';

export default function MusicNav() {
  const navLinks = [{ href: '/contact', label: 'Contact' }];

  return (
    <nav className="text-light flex w-full items-center justify-between px-8 py-4 shadow-lg">
      <Link href="/" className="text-2xl font-bold transition duration-300">
        EDB
      </Link>
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xl transition duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

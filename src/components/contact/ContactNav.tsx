'use client';

import Link from 'next/link';

export default function ContactNav() {
  const navLinks = [
    { href: '/developer', label: 'Developer' },
    { href: '/music', label: 'Musician' },
  ];

  return (
    <nav className="bg-darker flex w-full items-center justify-between px-8 py-4 shadow-lg">
      <Link
        href="/"
        className="text-lighter text-3xl font-bold transition duration-300 hover:text-cyan-600"
      >
        EDB
      </Link>
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lighter text-xl font-semibold transition duration-300 hover:text-cyan-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';

export default function DevNav() {
  const navLinks = [
    { href: '#skills', label: 'Tech Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex w-full items-center justify-between px-8 py-4 shadow-xl">
      <Link
        href="/"
        className="text-lighter hover:text-rich-terracotta text-3xl font-bold transition duration-300"
      >
        EDB
      </Link>
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lighter hover:text-rich-terracotta text-xl font-semibold transition duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

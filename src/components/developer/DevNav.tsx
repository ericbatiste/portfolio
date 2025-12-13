'use client';

import Link from 'next/link';

export default function MusicNav() {
  const navLinks = [
    { href: '#about-me', label: 'aboutMe' },
    { href: '#my-projects', label: 'myProjects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="text-lighter flex w-full items-center justify-between px-8 py-4 shadow-lg">
      <Link
        href="/"
        className="hover:text-rich-terracotta text-3xl font-bold transition duration-300 hover:cursor-pointer"
      >
        EDB
      </Link>
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-rich-terracotta font-mono text-2xl font-light transition duration-300 hover:cursor-pointer tracking-wider"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
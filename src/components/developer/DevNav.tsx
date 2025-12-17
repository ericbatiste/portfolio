'use client';

import Link from 'next/link';
import NavMenuBtn from '../NavMenuBtn';
import { useEffect, useState } from 'react';

export default function DevNav() {
  const [hash, setHash] = useState('');

  const navLinks = [
    { href: '#about-me', label: 'aboutMe' },
    { href: '#my-projects', label: 'myProjects' },
    { href: '/contact', label: 'contact' },
  ];

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="text-light flex w-full items-center justify-between px-8 py-4 shadow-lg">
      <Link
        href="/"
        className="hover:text-rich-terracotta text-3xl font-bold transition duration-300 hover:cursor-pointer"
      >
        EDB
      </Link>

      <div className="hidden space-x-4 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${hash === link.href ? 'text-rich-terracotta' : 'text-lightest'} hover:text-rich-terracotta font-mono text-2xl font-light transition duration-300 hover:cursor-pointer`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <NavMenuBtn navlinks={navLinks} />
    </nav>
  );
}

'use client';

import Link from 'next/link';
import NavMenuBtn from '../NavMenuBtn';
import EDBLogo from '../../images/EDBLogo.svg';

export default function ContactNav() {
  const navLinks = [
    { href: '/developer', label: 'Developer' },
    { href: '/music', label: 'Musician' },
  ];

  return (
    <nav className="text-lighter flex w-full items-center justify-between px-8 py-4">
      <Link href="/">
        <EDBLogo
          width={60}
          height={60}
          fill="none"
          stroke="currentColor"
          className="inline-block transition duration-300 hover:cursor-pointer hover:text-cyan-600 [&_path]:stroke-8"
        />
      </Link>

      <div className="hidden space-x-4 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xl transition duration-300 hover:text-cyan-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
      
      <NavMenuBtn navlinks={navLinks} />
    </nav>
  );
}

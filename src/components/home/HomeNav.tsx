'use client';

import Link from 'next/link';
import NavMenuBtn from '../NavMenuBtn';

export default function HomeNav() {
  const navLinks = [
    { href: '/developer', label: 'Developer' },
    { href: '/musican', label: 'Musician' },
  ];

  return (
    <div className="text-lightest fixed z-100 flex w-full items-center justify-between gap-40 px-8 py-4 md:justify-center">
      <Link
        href="/developer"
        className="hover:text-dark hidden text-2xl transition duration-300 hover:cursor-pointer md:block"
      >
        Developer
      </Link>
      <Link
        href="/"
        className="hover:text-dark text-5xl font-bold transition duration-300 hover:cursor-pointer"
      >
        EDB
      </Link>
      <Link
        href="/music"
        className="hover:text-dark hidden text-2xl transition duration-300 hover:cursor-pointer md:block"
      >
        Musician
      </Link>
      <NavMenuBtn navlinks={navLinks} />
    </div>
  );
}

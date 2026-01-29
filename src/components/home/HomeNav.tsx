'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavMenuBtn from '../NavMenuBtn';
import EDBLogo from '../../images/EDBLogo.svg';

export default function HomeNav() {
  const navLinks = [
    { href: '/developer', label: 'Developer' },
    { href: '/music', label: 'Musician' },
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
        <EDBLogo
          width={80}
          height={80}
          fill='none'
          stroke='currentColor'
          strokeWidth={10}
          className="inline-block text-lightest"
        />
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

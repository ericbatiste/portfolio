'use client';

import Link from 'next/link';

export default function HomeNav() {
  return (
    <div className="fixed z-100 flex w-full items-center justify-center gap-40 px-8 py-4">
      <Link
        href="/developer"
        className="text-lightest hover:text-dark text-2xl transition duration-300 hover:cursor-pointer"
      >
        Developer
      </Link>
      <Link
        href="/"
        className="text-lightest hover:text-dark text-5xl font-bold transition duration-300 hover:cursor-pointer"
      >
        EDB
      </Link>
      <Link
        href="/music"
        className="text-lightest hover:text-dark text-2xl transition duration-300 hover:cursor-pointer"
      >
        Musician
      </Link>
    </div>
  );
}

import Link from 'next/link';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="bg-darkest flex h-screen w-full items-center py-8">
      <div className="mx-auto w-[25%] px-4">
        <div className="flex flex-col items-center gap-6">
          <Link href={'/contact'} className="text-center">
            <p className="text-light mb-1 transform text-2xl font-semibold text-nowrap transition-colors duration-200 hover:text-stone-600">
              Get in touch
            </p>
          </Link>
          <div className="w-full border-t border-stone-700" />
          <Socials />
        </div>
      </div>
    </footer>
  );
}

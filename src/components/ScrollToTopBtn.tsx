'use client';

import Link from 'next/link';
import { MoveUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link
          href={'#intro'}
          className="bg-light/10 text-light hover:bg-light/40 fixed right-6 bottom-6 z-50 cursor-pointer rounded-full p-4 shadow-lg transition-all"
        >
          <MoveUp size={40} />
        </Link>
      )}
    </>
  );
}

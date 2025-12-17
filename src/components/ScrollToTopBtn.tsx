'use client';

import { MoveUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [styleClasses, setStyleClasses] = useState(''); 
  const pathname = usePathname();
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

  useEffect(() => {
    if (pathname === '/') {
      setStyleClasses('bg-dark/10 text-dark hover:bg-dark/40')
    } else if (pathname === '/developer') {
      setStyleClasses('bg-light/10 text-light hover:bg-light/40')
    }
  }, [pathname])

  return (
    <>
      {isVisible && (
        <button
          onClick={() => {window.scrollTo(0, 0)}}
          className={`${styleClasses} fixed right-4 bottom-4 z-50 cursor-pointer rounded-full p-4 shadow-lg transition-all`}
        >
          <MoveUp size={30} />
        </button>
      )}
    </>
  );
}

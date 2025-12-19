import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinkProps } from '@/types/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMenuBtn({ navlinks }: NavLinkProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [hoverClasses, setHoverClasses] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    let hoverMenuLinkClass = '';
    let hoverMenuClass = '';

    if (pathname === '/') {
      hoverMenuLinkClass = 'hover:text-howdy-amber hover:border-lightest';
      hoverMenuClass = 'group-hover:border-darker';
    } else if (pathname === '/developer') {
      hoverMenuLinkClass =
        'hover:text-rich-terracotta hover:border-vibrant-teal';
      hoverMenuClass = 'group-hover:border-rich-terracotta';
    } else if (pathname === '/musician') {
      hoverMenuLinkClass = 'hover:text-howdy-amber hover:border-lightest';
      hoverMenuClass = 'group-hover:border-howdy-amber';
    } else if (pathname === '/contact') {
      hoverMenuLinkClass = 'hover:text-cyan-600 hover:border-lightest';
      hoverMenuClass = 'group-hover:border-cyan-600';
    }

    setHoverClasses([hoverMenuClass, hoverMenuLinkClass]);
  }, [pathname]);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <button
      className="group relative flex h-[2.8rem] w-[2.8rem] cursor-pointer flex-col items-center justify-center rounded-sm p-2 md:hidden"
      onClick={handleMenuClick}
    >
      <motion.div
        className={`${hoverClasses[0]} absolute w-[80%] border transition-colors`}
        animate={{
          rotate: menuIsOpen ? 45 : 0,
          y: menuIsOpen ? 0 : -10,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${hoverClasses[0]} absolute w-[80%] origin-left border transition-colors`}
        animate={{
          x: menuIsOpen ? -40 : 0,
          opacity: menuIsOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${hoverClasses[0]} absolute w-[80%] border transition-colors`}
        animate={{
          rotate: menuIsOpen ? -45 : 0,
          y: menuIsOpen ? 0 : 10,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />

      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className="bg-darker absolute top-12 right-0 flex w-max cursor-default flex-col gap-4 rounded-sm border p-4 shadow-lg"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navlinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="relative w-full"
              >
                <Link
                  href={link.href}
                  className={`${hoverClasses[1]} ${pathname === '/developer' && 'font-mono'} block w-full border-r p-1 pr-2 text-right text-2xl text-nowrap transition-colors`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

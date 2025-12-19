'use client';

import AboutMe from '@/components/developer/AboutMe';
import DevHero from '@/components/developer/DevHero';
import Footer from '@/components/Footer';
import MyProjects from '@/components/developer/MyProjects';
import ScrollToTopBtn from '@/components/ScrollToTopBtn';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Developer() {
  const pathname = usePathname();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const validIds = ['about-me', 'my-projects'];
          const pathWithHash = `${pathname}#${entry.target.id}`;
          
          if (entry.isIntersecting && validIds.includes(entry.target.id)) {
            window.history.replaceState(null, '', pathWithHash);
            window.dispatchEvent(new Event('hashchange'));
          }
          
          if (entry.isIntersecting && !validIds.includes(entry.target.id)) {
            window.history.replaceState(null, '', pathname);
            window.dispatchEvent(new Event('hashchange'));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-darker text-lighter">
      <ScrollToTopBtn />

      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        id="intro"
        className="snap-center flex h-screen items-center justify-center p-2"
      >
        <DevHero />
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        id="about-me"
        className="snap-center from-deep-canyon to-darker flex h-screen w-full items-center justify-center bg-gradient-to-b p-4 md:p-8 lg:p-12"
      >
        <AboutMe />
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        id="my-projects"
        className='flex justify-center min-h-screen p-6'
      >
        <MyProjects />
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        id="footer"
        className="snap-center"
      >
        <Footer />
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { FEIcons, BEIcons } from '@/data/techIcons';
import IconCircle from './IconCircle';
import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex max-w-350">
      <div className="md:w-1/2 md:pr-10">
        <div className="text-lighter font-sans text-3xl leading-relaxed font-light md:text-[1.6em] lg:text-3xl">
          <p className="mb-2 md:mb-4">Hi there,</p>
          <p className="mb-4 md:mb-6">
            I am a Fullstack Developer based in Westminster, CO. The
            wealth of my experience rests in{' '}
            <span className="text-soft-sand font-normal">Next.js</span>,{' '}
            <span className="text-soft-sand font-normal">React</span>,{' '}
            <span className="text-soft-sand font-normal">JavaScript</span>, and{' '}
            <span className="text-soft-sand font-normal">TypeScript</span>;
            however, my curiosity and desire to grow has led me to take on
            other technologies such as SwiftUI and Ruby on Rails.
          </p>
          <p className="mb-2 md:mb-4">
            Looking to connect?{' '}
            <Link
              href={'/contact'}
              className="text-sky-blue hover:text-vibrant-teal inline-flex items-center font-mono text-2xl text-nowrap"
            >
              _dropMeALine(
              <Send className="inline h-5 w-5" />)
            </Link>
          </p>
        </div>
      </div>
      <div className="relative hidden w-1/2 md:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {(() => {
            const radius =
              windowWidth < 900 ? 140 : windowWidth < 1150 ? 180 : 230;
            const iconSize =
              windowWidth < 900 ? 30 : windowWidth < 1150 ? 50 : 80;
            return (
              <IconCircle icons={FEIcons} radius={radius} iconSize={iconSize} />
            );
          })()}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {(() => {
            const radius =
              windowWidth < 900 ? 60 : windowWidth < 1150 ? 80 : 100;
            const iconSize =
              windowWidth < 900 ? 20 : windowWidth < 1150 ? 34 : 60;
            return (
              <IconCircle
                icons={BEIcons}
                radius={radius}
                iconSize={iconSize}
                reverse
              />
            );
          })()}
        </div>
      </div>
    </div>
  );
}

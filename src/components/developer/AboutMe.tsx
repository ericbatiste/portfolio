'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconData, IconCircleProps, RepelIconProps } from '@/types/techIcons';
import { FEIcons, BEIcons } from '@/data/techIcons';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'motion/react';
import { useState, useEffect, useRef } from 'react';

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [windowWidth, setWindowWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="from-deep-canyon to-darker flex h-screen items-center justify-center bg-gradient-to-b p-4 md:p-8 lg:p-12">
      <div className="md:w-1/2 md:pr-10">
        <div className="text-light font-sans text-3xl/[1.3] font-light lg:leading-relaxed">
          <p className="mb-2 md:mb-4">Hi there,</p>
          <p className="mb-4 md:mb-6">
            I am a Fullstack Developer based in Boulder, CO. The wealth of my
            experience is in{' '}
            <span className="text-soft-sand font-normal">Next.js</span>,{' '}
            <span className="text-soft-sand font-normal">React</span>,{' '}
            <span className="text-soft-sand font-normal">JavaScript</span>, and{' '}
            <span className="text-soft-sand font-normal">TypeScript</span>;
            however, my curiosity and desire for growth has led me to take on
            other technologies such as SwiftUI and Ruby on Rails.
          </p>
          <p className="mb-2 md:mb-4">
            Looking to connect?{' '}
            <Link
              href={'/contact'}
              className="text-sky-blue hover:text-vibrant-teal text-nowrap"
            >
              --drop me a line--
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

const IconCircle = ({
  icons,
  radius,
  iconSize,
  reverse = false,
}: IconCircleProps) => {
  return (
    <div className="relative flex w-30 items-center justify-center">
      {icons.map((icon: IconData, index: number) => (
        <RepelIcon
          key={`icon-${index}`}
          icon={icon}
          index={index}
          total={icons.length}
          radius={radius}
          size={iconSize}
          reverse={reverse}
        />
      ))}
    </div>
  );
};

const RepelIcon = ({
  icon,
  index,
  total,
  radius,
  size,
  reverse,
}: RepelIconProps) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const x = useSpring(offsetX, { stiffness: 100, damping: 20 });
  const y = useSpring(offsetY, { stiffness: 100, damping: 20 });

  const angle = useMotionValue((index * 360) / total);

  useEffect(() => {
    const startAngle = (index * 360) / total;
    const endAngle = reverse ? startAngle - 360 : startAngle + 360;

    const controls = animate(angle, endAngle, {
      duration: 60,
      repeat: Infinity,
      ease: 'linear',
    });

    return () => controls.stop();
  }, [angle, index, total, reverse]);

  const orbitX = useTransform(
    angle,
    (a) => Math.cos((a * Math.PI) / 180) * radius
  );
  const orbitY = useTransform(
    angle,
    (a) => Math.sin((a * Math.PI) / 180) * radius
  );

  const combinedX = useTransform([orbitX, x], (values) => {
    const [ox, rx] = values as [number, number];
    return ox + rx;
  });

  const combinedY = useTransform([orbitY, y], (values) => {
    const [oy, ry] = values as [number, number];
    return oy + ry;
  });

  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef.current) return;

      const rect = iconRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const threshold = 120;
      const repelDistance = 60;

      if (distance < threshold) {
        const angle = Math.atan2(dy, dx);
        const strength = 1 - distance / threshold;
        const repelX = -Math.cos(angle) * strength * repelDistance;
        const repelY = -Math.sin(angle) * strength * repelDistance;

        offsetX.set(repelX);
        offsetY.set(repelY);
      } else {
        offsetX.set(0);
        offsetY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={iconRef}
      className="border-misty-purple bg-rich-terracotta/30 hover:shadow-vibrant-teal/30 hover:border-sky-blue absolute rounded-full border-2 p-5 shadow-xl transition-colors duration-300"
      style={{
        x: combinedX,
        y: combinedY,
      }}
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        width={size}
        height={size}
        className="pointer-events-none"
      />
    </motion.div>
  );
};

'use client';

import Image from 'next/image';
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

export default function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="from-deep-canyon to-darker flex h-screen w-screen items-center justify-center gap-20 bg-gradient-to-b">
      <div className="w-md pr-20">
        <p className="text-soft-sand text-6xl/[1.5] font-bold">
          Fullstack Developer specializing Next.js and TypeScript.
        </p>
      </div>
      <div className="relative h-[500px] w-[500px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <IconCircle icons={FEIcons} radius={230} iconSize={80} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <IconCircle icons={BEIcons} radius={100} iconSize={60} reverse />
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
}: IconCircleProps & { reverse?: boolean }) => {
  return (
    <div className="relative flex h-96 w-96 items-center justify-center">
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

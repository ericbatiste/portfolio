'use client';

import Image from 'next/image';
import { TechIconProps } from '@/types/techIcons';
import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'motion/react';

export default function TechIcon({
  icon,
  index,
  total,
  radius,
  size,
  reverse,
}: TechIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const angle = useMotionValue((index * 360) / total);
  const x = useSpring(offsetX, { stiffness: 100, damping: 20 });
  const y = useSpring(offsetY, { stiffness: 100, damping: 20 });
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
  }, [offsetX, offsetY]);

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
}

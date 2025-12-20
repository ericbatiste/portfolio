'use client';

import Link from 'next/link';
import Image from 'next/image';
import cloudImg from '../images/cloud.png';
import skinTrackImg from '../images/skintrack.png';
import portrait2Img from '../images/portrait2.png';
import guitarImg from '../images/guitar.png';
import ScrollToTopBtn from '@/components/ScrollToTopBtn';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const ySky = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yMtn = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const sepia = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const filter = useMotionTemplate`sepia(${sepia})`;

  return (
    <div ref={containerRef} className="snap-y p-2">
      <div className="from-light to-blue-500 absolute inset-0 z-0 h-screen bg-linear-to-t" />
      <motion.div
        className="fixed inset-0 z-0 h-screen w-full overflow-hidden"
        style={{ y: ySky, scale, filter }}
      >
        <Image
          src={cloudImg}
          alt="Clouds"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="fixed inset-0 top-50 z-10 h-screen w-full overflow-hidden"
        style={{ y: yMtn, scale, filter }}
      >
        <Image
          src={skinTrackImg}
          alt="Snowy Mountain Tracks"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <section className="relative z-40 flex h-screen w-full snap-center items-center justify-center">
        <h1 className="text-howdy-amber font-heading text-9xl font-bold tracking-wide drop-shadow-lg">
          Howdy
        </h1>
      </section>

      <section
        ref={containerRef}
        className="relative flex h-screen w-full snap-center items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="from-deep-canyon via-rich-terracotta border-deep-canyon absolute top-[18%] z-30 h-[80%] w-full rounded-t-full border-t-2 bg-linear-to-b to-transparent md:w-2xl lg:w-3xl"
          style={{
            boxShadow: '0 -50px 100px -30px rgba(255,253,236,0.8)',
          }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
          className="z-40 text-center text-4xl leading-18"
        >
          <p className="text-darkest drop-shadow-dark drop-shadow-md">
            <span className="text-lightest text-7xl">Welcome,</span>
            <br />
            glad you found me!
          </p>

          <Link
            href={'/contact'}
            scroll={false}
            className="text-howdy-amber bg-dark hover:text-dark hover:bg-howdy-amber mt-10 inline-block rounded-full px-8 py-4 text-2xl font-semibold shadow-lg ring-2 transition-colors"
          >
            Reach out!
          </Link>
        </motion.div>
      </section>

      <section
        ref={containerRef}
        className="pointer-events-none relative z-10 flex h-screen w-full snap-center items-center justify-center pt-6"
      >
        <div className="relative h-[80%] w-full md:w-[80%]">
          <div className="grid h-full grid-cols-8 gap-2">
            <div className="border-lightest col-span-1 rounded-xl border-2 md:rounded-3xl" />
            <div className="col-span-1 flex flex-col gap-2">
              <div className="border-lightest h-6/7 rounded-xl border-2 md:rounded-3xl" />
              <div className="border-lightest grow rounded-xl border-2 md:rounded-3xl" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="border-lightest h-5/7 rounded-xl border-2 md:rounded-3xl" />
              <div className="border-lightest grow rounded-xl border-2 md:rounded-3xl" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="border-lightest h-4/7 rounded-xl border-2 md:rounded-3xl" />
              <div className="border-lightest grow rounded-xl border-2 md:rounded-3xl" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="border-lightest h-3/7 rounded-xl border-2 md:rounded-3xl" />
              <div className="border-lightest grow rounded-xl border-2 md:rounded-3xl" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="border-lightest h-2/7 rounded-xl border-2 md:rounded-3xl" />
              <div className="border-lightest grow rounded-xl border-2 md:rounded-3xl" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="border-lightest h-1/7 rounded-xl border-2 md:rounded-3xl" />
              <div className="border-lightest grow rounded-xl border-2 md:rounded-3xl" />
            </div>
            <div className="border-lightest col-span-1 rounded-xl border-2 md:rounded-3xl" />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-sky-blue absolute top-3 left-3 h-[92%] w-[82%] border-t-2 border-l-2 md:top-6 md:left-6"
            >
              <Link
                href="/developer"
                className="pointer-events-auto relative block h-full w-full overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={portrait2Img}
                    alt="Portrait"
                    fill
                    placeholder='blur'
                    className="object-cover"
                    style={{
                      transform: 'scale(1.6) translateX(-12%) translateY(-10%)',
                      filter: 'brightness(0.9) contrast(1.5) saturate(0)',
                    }}
                  />
                </div>
                <div className="bg-sky-blue/90 absolute inset-0 z-10 mix-blend-multiply" />
                <h1 className="text-lighter relative z-20 p-4 text-7xl font-semibold">
                  Developer
                </h1>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-rich-terracotta absolute right-3 bottom-3 h-[92%] w-[82%] border-r-2 border-b-2 md:right-6 md:bottom-6"
            >
              <Link
                href="/music"
                className="pointer-events-auto relative flex h-full w-full items-end justify-end overflow-hidden"
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={guitarImg}
                    alt="Guitar"
                    fill
                    placeholder='blur'
                    className="object-cover"
                    style={{
                      transform: 'scale(1.6) translateX(10%) translateY(18%)',
                      filter: 'brightness(0.9) contrast(1.5) saturate(0)',
                    }}
                  />
                </div>
                <div className="bg-rich-terracotta/90 absolute inset-0 z-20 mix-blend-multiply" />
                <h1 className="text-lighter relative z-30 p-4 text-7xl font-semibold">
                  Musician
                </h1>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <ScrollToTopBtn />
    </div>
  );
}

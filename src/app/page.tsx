'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <div ref={containerRef} className="snap-y">
      <motion.div
        className="fixed inset-0 z-0 h-screen w-full overflow-hidden"
        style={{ y: ySky, scale, filter }}
      >
        <div className='relative'>
          <Image
            src="/images/cloud.png"
            alt="Clouds"
            layout="responsive"
            width={3872}
            height={2592}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed inset-0 z-10 h-screen w-full overflow-hidden"
        style={{ y: yMtn, scale, filter }}
      >
        <div className="relative mt-60">
          <Image
            src="/images/skintrack.png"
            alt="Snowy Mountain Tracks"
            layout="responsive"
            width={5184}
            height={3456}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </motion.div>

      <section className="relative z-40 flex h-screen w-full snap-center items-center justify-center">
        <h1 className="text-howdy-amber font-heading text-9xl font-bold tracking-wide drop-shadow-lg">
          Howdy
        </h1>
      </section>

      <section
        ref={containerRef}
        className="relative flex h-screen w-full snap-center items-center justify-center bg-transparent"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="from-deep-canyon via-rich-terracotta border-deep-canyon absolute top-[18%] z-30 h-[80%] w-[50%] rounded-t-full border-t-2 bg-gradient-to-b to-transparent"
          style={{
            boxShadow: '0 -50px 100px -30px rgba(255,253,236,0.8)',
          }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
          className="z-40 text-center text-4xl leading-18"
        >
          <p className="text-deep-canyon drop-shadow-md drop-shadow-dark">
            <span className="text-lighter text-7xl">Welcome,</span>
            <br />
            glad you found me!
          </p>

          <Link
            href={'/contact'}
            scroll={false}
            className="text-howdy-amber bg-dark hover:text-dark mt-10 inline-block rounded-full px-8 py-4 text-2xl font-semibold shadow-lg ring-2 transition-colors hover:bg-howdy-amber"
          >
            Reach out!
          </Link>
        </motion.div>
      </section>

      <section
        ref={containerRef}
        className="pointer-events-none relative z-10 flex h-screen w-full snap-center items-center justify-center"
      >
        <div className="relative h-[70%] w-[80%]">
          <div className="grid h-full grid-cols-8 gap-2">
            <div className="col-span-1 rounded-3xl border-2 border-lightest" />
            <div className="col-span-1 flex flex-col gap-2">
              <div className="h-6/7 rounded-3xl border-2 border-lightest" />
              <div className="grow rounded-3xl border-2 border-lightest" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="h-5/7 rounded-3xl border-2 border-lightest" />
              <div className="grow rounded-3xl border-2 border-lightest" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="h-4/7 rounded-3xl border-2 border-lightest" />
              <div className="grow rounded-3xl border-2 border-lightest" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="h-3/7 rounded-3xl border-2 border-lightest" />
              <div className="grow rounded-3xl border-2 border-lightest" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="h-2/7 rounded-3xl border-2 border-lightest" />
              <div className="grow rounded-3xl border-2 border-lightest" />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <div className="h-1/7 rounded-3xl border-2 border-lightest" />
              <div className="grow rounded-3xl border-2 border-lightest" />
            </div>
            <div className="col-span-1 rounded-3xl border-2 border-lightest" />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-sky-blue absolute top-6 left-6 h-[92%] w-[82%] border-t-2 border-l-2"
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
                    src="/images/portrait2.png"
                    alt="Portrait"
                    fill
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
              className="border-rich-terracotta absolute right-6 bottom-6 h-[92%] w-[81%] border-r-2 border-b-2"
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
                    src="/images/guitar.png"
                    alt="Portrait"
                    fill
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

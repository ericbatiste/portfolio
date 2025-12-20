import Image from 'next/image';
import slotCanyonImg from '../../images/slotcanyon.png';
import portraitImg from '../../images/portrait.png';

export default function DevHero() {
  return (
    <>
      <div className="from-deep-canyon via-rich-terracotta to-vibrant-teal absolute inset-0 z-0 h-screen bg-linear-to-t" />
      <div className="from-deep-canyon absolute inset-0 z-10 h-screen bg-linear-to-t via-transparent to-transparent" />

      <div className="absolute inset-0 z-0">
        <Image
          src={slotCanyonImg}
          alt="Background image of sandstone slot canyon"
          priority
          fill
          className="mask-b-from-darkest object-cover contrast-110 saturate-110"
        />
      </div>

      <div className="relative z-10 mx-auto grid h-3/4 w-full max-w-[20rem] grid-cols-1 content-center gap-4 md:w-max md:max-w-350 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr] md:gap-6">
        <div className="border-misty-purple hover:border-vibrant-teal relative h-96 w-[18rem] justify-self-center overflow-hidden rounded-[8rem_0.5rem_0.5rem_0.5rem] border-2 transition-all duration-500 hover:shadow-xl md:h-120 md:w-[20rem] md:justify-self-end md:rounded-[12rem_0.5rem_0.5rem_0.5rem] lg:w-[24rem]">
          <Image
            src={portraitImg}
            alt="Portrait"
            priority
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex w-full justify-center gap-4 md:flex-col md:self-end">
          <h1 className="font-heading text-lightest text-7xl font-bold drop-shadow-lg md:text-8xl lg:text-9xl">
            Eric
          </h1>
          <h1 className="font-heading text-lightest text-7xl font-bold drop-shadow-lg md:text-8xl lg:text-9xl">
            Batiste
          </h1>
        </div>
        <div className="flex justify-center w-full md:col-span-2">
          <h2 className="text-vibrant-teal text-4xl md:text-5xl text-nowrap drop-shadow-xl lg:text-6xl tracking-wide">
            Software Developer
          </h2>
        </div>
      </div>
    </>
  );
}

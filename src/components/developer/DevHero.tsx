import Image from 'next/image';

export default function DevHero() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="from-deep-canyon via-rich-terracotta to-vibrant-teal absolute inset-0 z-0 h-screen bg-gradient-to-t" />
      <div className="from-deep-canyon absolute inset-0 z-10 h-screen bg-gradient-to-t via-transparent to-transparent" />

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slotcanyon.png"
          alt="Background image of sandstone slot canyon"
          fill
          className="mask-b-from-darkest object-cover contrast-110 saturate-110"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-full w-full items-center md:items-end justify-center gap-4 md:gap-6 lg:gap-10 pt-20 md:pt-0 md:px-12 md:pb-15 lg:px-20 lg:pb-30">
        <div className="border-misty-purple hover:border-vibrant-teal relative h-[82%] w-[24rem] overflow-hidden [border-radius:12rem_0.5rem_0.5rem_0.5rem] border-2 transition-all duration-500 hover:shadow-xl">
          <Image
            src="/images/portrait.png"
            alt="Portrait"
            priority
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-col gap-4 rounded-md pb-12">
          <h1 className="font-heading text-8xl font-bold text-stone-50 drop-shadow-lg">
            Eric Batiste
          </h1>
          <h2 className="text-vibrant-teal text-6xl font-semibold drop-shadow-xl">
            Software Developer
          </h2>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function DevHero() {
  return (
    <>
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

      <div className="relative z-10 mx-auto grid h-3/4 w-full max-w-[20rem] grid-cols-1 content-end gap-4 md:w-max md:max-w-7xl md:grid-cols-2 md:gap-6">
        <div className="border-misty-purple hover:border-vibrant-teal relative h-[24rem] w-[18rem] justify-self-center overflow-hidden [border-radius:8rem_0.5rem_0.5rem_0.5rem] border-2 transition-all duration-500 hover:shadow-xl md:h-[30rem] md:w-[20rem] md:justify-self-end md:[border-radius:12rem_0.5rem_0.5rem_0.5rem] lg:w-[24rem]">
          <Image
            src="/images/portrait.png"
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
        <div className="mx-auto md:col-span-2">
          <h2 className="text-vibrant-teal text-4xl font-semibold text-nowrap drop-shadow-xl md:text-6xl">
            Software Developer
          </h2>
        </div>
      </div>
    </>
  );
}

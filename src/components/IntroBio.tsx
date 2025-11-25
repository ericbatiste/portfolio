import Image from 'next/image';

export default function IntroBio() {
  return (
    <div className="flex h-screen items-center justify-center gap-20">
      <div className="from-deep-canyon via-rich-terracotta to-vibrant-teal absolute inset-0 z-0 mt-16 h-screen bg-gradient-to-t" />
      <div className="from-deep-canyon absolute inset-0 z-10 mt-16 h-screen bg-gradient-to-t via-transparent to-transparent" />

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slotcanyon.png"
          alt="Background"
          fill
          className="mt-16 object-cover"
        />
      </div>

      <div className="z-10 flex h-full w-full items-end justify-center gap-10 px-30 pb-20">
        <div className="border-misty-purple hover:border-vibrant-teal relative h-[82%] w-[24rem] overflow-hidden [border-radius:12rem_0.5rem_0.5rem_0.5rem] border-2 transition-all duration-500 hover:shadow-xl">
          <Image
            src="/images/portrait.png"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 rounded-md pb-12">
          <h1 className="font-heading text-8xl font-bold text-stone-50 drop-shadow-lg">
            Eric Batiste
          </h1>
          <p className="text-vibrant-teal text-6xl font-semibold drop-shadow-xl">
            Software Developer
          </p>
        </div>
      </div>
    </div>
  );
}

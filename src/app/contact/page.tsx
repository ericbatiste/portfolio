'use client';

import ContactForm from '@/components/contact/ContactForm';
import Socials from '@/components/Socials';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="from-darkest to-deep-canyon/20 flex min-h-screen items-center justify-center bg-linear-to-br p-2">
      <div className="my-20 w-full max-w-xl">
        <div className="mb-4 text-center md:mb-6">
          <h1 className="mb-3 text-3xl font-bold text-stone-200">
            Looking to Get in Touch?
          </h1>
          <p className="text-light text-lg">Send me an email</p>
        </div>

        <div className="bg-darker/50 mb-4 rounded-xl border border-stone-950 p-4 shadow-lg shadow-cyan-950/40 md:mb-6 md:p-6">
          <ContactForm />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-light mb-4 text-lg">Or connect with me on</p>
          <Socials />
        </div>
      </div>
    </div>
  );
}

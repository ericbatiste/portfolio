'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { ContactFormData } from '@/types/contact';
import { Send, CheckCircle, AlertCircle, LoaderPinwheel } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans">
      <div>
        <label htmlFor="name" className="text-lighter mb-1 block font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Buzz Lightyear"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-light text-lighter w-full rounded-lg border px-4 py-2 transition-all outline-none placeholder:text-stone-400 focus:border-transparent focus:ring-2 focus:ring-cyan-800"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-lighter mb-1 block font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="buzzin@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-light text-lighter w-full rounded-lg border px-4 py-2 transition-all outline-none placeholder:text-stone-400 focus:border-transparent focus:ring-2 focus:ring-cyan-800"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-lighter mb-1 block font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Howdy..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-light text-light w-full resize-none rounded-lg border px-4 py-2 transition-all outline-none placeholder:text-stone-400 focus:border-transparent focus:ring-2 focus:ring-cyan-800"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="text-lightest flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 px-6 py-2 font-medium transition-colors duration-200 hover:cursor-pointer hover:bg-cyan-800 disabled:cursor-not-allowed disabled:bg-gray-600"
      >
        {status === 'sending' ? (
          <>
            <LoaderPinwheel size={18} className="animate-spin" />
          </>
        ) : (
          <>
            <Send size={18} />
            Send It!
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
          <CheckCircle size={20} />
          <p>Message sent successfully!</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertCircle size={20} />
          <p>{errorMessage}</p>
        </div>
      )}
    </form>
  );
}

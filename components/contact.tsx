'use client';

import { useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Réinitialiser les champs du formulaire
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div
      className="w-full flex items-center justify-center md:py-6 py-2"
      id="contact"
    >
      <form onSubmit={handleSubmit} className="md:w-2/4 w-full">
        <div className="flex items-center justify-center py-2">
          <Input
            className="max-w-md"
            isRequired
            label="Your Name"
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <Input
            className="max-w-md"
            isRequired
            label="Email"
            onChange={e => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <Textarea
            className="max-w-md"
            label="Message"
            isRequired
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <button
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            type="submit"
          >
            {' '}
            Send message{' '}
          </button>
        </div>
      </form>
    </div>
  );
};

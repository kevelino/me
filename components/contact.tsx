'use client';

import { useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire (par exemple, utiliser un service d'envoi d'e-mails)
    console.log('Formulaire soumis :', { name, email, message });
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
            isRequired
            type="text"
            label="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <Input
            isRequired
            type="email"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <Textarea
            isRequired
            label="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            {' '}
            Send message{' '}
          </button>
        </div>
      </form>
    </div>
  );
};

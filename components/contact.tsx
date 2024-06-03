/* eslint-disable */
import { Input, Textarea } from '@nextui-org/input';

export const ContactForm = () => {

  return (
    <div
      className="w-full flex items-center justify-center md:py-6 py-2"
      id="contact"
    >
      <form className="md:w-3/4 w-full">
        <div className="flex items-center justify-center py-2">
          <Input
            className="max-w-md"
            label="Your Name"
            type="text"
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <Input
            className="max-w-md"
            label="Email"
            type="email"
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <Textarea
            className="max-w-md"
            label="Message"
          />
        </div>
        <div className="flex items-center justify-center py-2">
          <button
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            type="submit"
            disabled
          >
            {' '}
            Send message{' '}
          </button>
        </div>
      </form>
    </div>
  );
};

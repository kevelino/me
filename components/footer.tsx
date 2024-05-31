export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-5 flex items-center justify-center bg-gray-300 dark:bg-neutral-800">
      <div className="px-2">
        <p>
          Made with 🧡 by Kevelino, &copy; {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

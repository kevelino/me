import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/navbar';
import { Social } from '@/components/social';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx('min-h-screen bg-background', poppins.className)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto md:pt-16 pt-4 px-6 flex-grow">
              {children}
            </main>
            <Social />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

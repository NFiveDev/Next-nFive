import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Inter } from 'next/font/google';
import { Providers } from './providers';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer';

const openSans = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${openSans.className}`}>
      <body className=''>
        <Providers>
          <div className='min-h-screen flex flex-col items-start bg-white'>
            <header className='border-b-1 border-slate-200 w-full'>
              <NavBar />
            </header>
            <div className='grow w-full'>
              <div className='max-w-7xl mx-auto px-6'>
                {children}
              </div>
            </div>
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}

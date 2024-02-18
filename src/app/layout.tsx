import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import NavBar from './components/nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS with Jotform Sample',
  description:
    'Example application showcasing Jotform inside a NextJS application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen flex-col items-center border bg-stone-200'>
          <div className='mx-auto flex w-full max-w-[800px] flex-col p-2 md:p-4 lg:p-8'>
            <NavBar />
            <div className='min-h-48'>{children}</div>
            <footer className='mt-auto w-full text-sm'>
              <div className='mx-auto mt-8 max-w-[800px]'>
                <div className='flex gap-4 border-t border-t-stone-400/50 p-2'>
                  <Link
                    className='text-emerald-800 underline opacity-50 hover:text-emerald-950 hover:opacity-100'
                    href='https://github.com/jeroenheijmans/sample-nextjs-with-jotform'
                    target='_blank'
                  >
                    GitHub source
                  </Link>
                  <span className='opacity-50'>
                    Git commit {process.env.GIT_COMMIT_HASH}
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}

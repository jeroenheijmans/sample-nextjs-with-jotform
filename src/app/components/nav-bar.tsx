'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinkStyle =
  'border-b-2 border-gray-600/20 p-1 text-indigo-600 hover:border-gray-800 hover:text-indigo-800';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='flex gap-4 bg-stone-300 px-4 py-2'>
      <Link
        className={`${navLinkStyle} ${pathname === '/' ? 'border-gray-800/100' : ''}`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={`${navLinkStyle} ${pathname === '/pop-up-demo' ? 'border-gray-800/100' : ''}`}
        href='/pop-up-demo'
      >
        Pop-up Demo
      </Link>
      <Link
        className={`${navLinkStyle} ${pathname === '/pop-over-demo' ? 'border-gray-800/100' : ''}`}
        href='/pop-over-demo'
      >
        Pop-over Demo
      </Link>
    </nav>
  );
}

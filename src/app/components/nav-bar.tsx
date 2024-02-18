'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinkStyle =
  'border-b-2 border-gray-600/20 p-1 text-emerald-600 hover:border-gray-800 hover:text-emerald-800';

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
        className={`${navLinkStyle} ${pathname === '/cards-demo' ? 'border-gray-800/100' : ''}`}
        href='/cards-demo'
      >
        Cards Demo
      </Link>
    </nav>
  );
}

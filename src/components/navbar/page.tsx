'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1>LamaDev</h1>
      </Link>
      <div className="flex gap-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={`hover:text-green-400 transition ${pathname === link.url ? 'text-green-500 font-semibold' : 'text-white'}`}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

'use client'
import { getNavLinks } from '@/model/navConfig';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export type NavLink = {
  label: string;
  url: string;
  isActive: boolean;
}

const NavBar = () => {
  const links = getNavLinks(usePathname());
  return (
    <nav className='bg-purple sticky top-0'>
      <div className=''>
        <ul className='flex flex-col m:flex-row justify-center'>
          {links.map((link) =>
            <li key={link.url} className='py-1 m:py-2 l:py-4 px-2'>
              <a className={classNames(
                'transition-bg ease-in-out duration-150',
                'l:px-2 hover:bg-lilac text-xl l:text-2xl',
                'drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]',
                link.isActive ? 'text-white' : 'text-red',
              )
              } href={link.url} >{link.label}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
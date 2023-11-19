'use client';
import { getNavLinks } from '@/model/navConfig';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useState } from 'react';
import Icon from '@/ui/atoms/Icon';
import chevronRight from '@/ui/atoms/Icon/paths/chevronRight';

export type NavLink = {
  label: string;
  url: string;
  isActive: boolean;
};

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const links = getNavLinks(usePathname());
  return (
    <nav className="bg-purple sticky top-0">
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="absolute flex flex-row items-center right-5 top-2 m:hidden z-10"
      >
        <span className="text-red text-xl font-medium">MENU</span>
        <Icon
          {...chevronRight}
          size="30px"
          className={classNames(
            'transition duration-150 fill-red ml-2 rotate-90',
            isMenuOpen && '-scale-x-100',
          )}
        />
      </button>
      <ul className="flex flex-col m:flex-row w-full m:w-auto justify-center absolute m:relative divide-y m:divide-y-0 border-lilac">
        {links.map((link) => (
          <li
            key={link.url}
            className={classNames(
              isMenuOpen ? 'visible' : 'hidden m:visible m:inline-block',
              'bg-purple m:bg-none ',
              'py-2 last:pb-2 m:py-2 l:py-4 px-4 m:px-1',
            )}
          >
            <a
              className={classNames(
                'transition-bg ease-in-out duration-150',
                'm-2',
                'l:px-2 hover:bg-lilac font-medium text-xl l:text-2xl text-shadow',
                link.isActive ? 'text-white' : 'text-red',
              )}
              href={link.url}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

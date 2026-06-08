'use client';
import { getNavLinks } from '@/model/navConfig';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { useState } from 'react';
import Icon from '@/ui/atoms/Icon';
import chevronRight from '@/ui/atoms/Icon/paths/chevronRight';
import Link from 'next/link';

export type NavLink = {
  label: string;
  url: string;
  isActive: boolean;
};

const NavBar = ({textColour, backgroundColour }: { textColour: string; backgroundColour: string; }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const links = getNavLinks(usePathname());
  const doSetMenuClosed = () => setMenuOpen(false);
  return (
    <nav className={`bg-${backgroundColour} sticky top-0 z-30 font-seaSummerCalm`}>
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className={`absolute flex flex-row items-center right-5 top-2 m:hidden z-40  bg-${backgroundColour} px-2`}
      >
        <span className={`text-${textColour} text-2xl bg-${backgroundColour} font-medium`}>
          MENU
        </span>
        <Icon
          {...chevronRight}
          size="16px"
          className={classNames(
            `transition duration-150 fill-${textColour} stroke-1 stroke-${backgroundColour} ml-2 rotate-90`,
            isMenuOpen && '-scale-x-100',
          )}
        />
      </button>
      <ul
        className={`flex flex-col m:flex-row w-full m:w-auto justify-center absolute m:relative divide-y m:divide-y-0 border-${textColour} ${
          isMenuOpen ? 'z-11' : ''
        }`}
      >
        {links.map((link) => (
          <li
            key={link.url}
            className={classNames(
              isMenuOpen ? 'visible' : 'hidden m:visible m:inline-block',
              `bg-${backgroundColour} m:bg-none`,
              `text-${textColour}`,
              'py-3 last:pb-2 m:py-2 l:py-4 px-4 m:px-2',
            )}
          >
            <Link
              className={classNames(
                'transition-bg ease-in-out duration-150',
                'py-2 rounded-xl',
                `l:px-2 hover:bg-${textColour} hover:text-${textColour} hover:font-seaSummer font-medium text-2xl l:text-3xl`,
              )}
              href={link.url}
              onClick={doSetMenuClosed}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

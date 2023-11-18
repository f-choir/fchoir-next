import { NavLink } from '../ui/molecules/NavBar';

const navLinks = [
  {label: 'HOME', url: '/'},
  {label: 'ABOUT', url: '/about'},
  {label: 'ANTICS', url: '/antics'},
  {label: 'MERCH', url: '/merch'},
  {label: 'CONTACT', url: '/contact'},
  {label: 'F*MEMBERS', url: '/members'},
];

export const getNavLinks = (pathname: string): NavLink[] => {
  return navLinks.map(link => ({...link, isActive: link.url === pathname }));
}


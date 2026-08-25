import { NavLink } from '@/ui/molecules/NavBar';

const navLinks = [
  { label: 'F*', url: '/' },
  { label: 'ABOUT', url: '/about' },
  { label: 'ANTICS', url: '/antics' },
  { label: 'MERCH', url: 'https://fchoir.bandcamp.com/merch' },
  { label: 'CONTACT', url: '/contact' },
  { label: 'MEMBERS', url: '/members' },
];

export const getNavLinks = (pathname: string): NavLink[] => {
  return navLinks.map((link) => ({ ...link, isActive: link.url === pathname, isExternal: link.url.includes('https') }));
};

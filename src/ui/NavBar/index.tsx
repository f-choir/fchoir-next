type NavLink = {
  label: string;
  url: string;
}

export type NavBarProps = {
    links: NavLink[];
}

// let's have an active link? use router to figure out which url is active.

const NavBar = ({ links }: NavBarProps) => {
  return (
    <nav className='bg-purple-950 sticky top-0'>
      <div className=''>
        <ul className='flex flex-row justify-center'>
          {links.map((link) =>
            <li key={link.url} className='p-2 md:p-4'>
              <a className={'px-4 text-red-600 hover:bg-gray-100 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'} href={link.url} >{link.label}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
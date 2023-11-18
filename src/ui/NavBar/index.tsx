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
    <nav className='bg-purple sticky top-0'>
      <div className=''>
        <ul className='flex flex-col m:flex-row justify-center'>
          {links.map((link) =>
            <li key={link.url} className='py-2 l:py-4 px-2'>
              <a className={'transition ease-in-out duration-150 l:px-2 text-red hover:bg-lilac text-xl l:text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'} href={link.url} >{link.label}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
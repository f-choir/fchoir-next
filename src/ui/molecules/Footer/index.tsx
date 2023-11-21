import classNames from 'classnames';

const INSTAGRAM = '';
const EMAIL = '';
const FACEBOOK = '';

const linkClasses = classNames(
  'text-red text-l l:text-xl text-shadow p-2 m:p-4 pl-4 l:px-8 pt-2 pb-2 m:pb-6',
);

const Footer = () => (
  <footer className={'flex flex-col m:flex-row justify-center bg-purple w-full'}>
    <a href={INSTAGRAM} className={linkClasses}>
      instagram.com/@f__choir
    </a>
    <a href={EMAIL} className={linkClasses}>
      wearefchoir@gmail.com
    </a>
    <a href={FACEBOOK} className={linkClasses}>
      facebook.com/fchoirlondon
    </a>
  </footer>
);

export default Footer;

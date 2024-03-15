import classNames from 'classnames';

const INSTAGRAM = 'https://instagram.com/f__choir';
const EMAIL = 'mailto:wearefchoir@gmail.com';
const FACEBOOK = 'https://facebook.com/fchoirlondon';

const linkClasses = classNames(
  'text-red text-l l:text-xl text-shadow p-2 m:p-4 pl-4 l:px-8 pt-2 pb-2 m:pb-6',
);

const Footer = () => (
  <footer className={'flex flex-col m:flex-row justify-center bg-purple w-full '}>
    <a
      href={INSTAGRAM}
      className={linkClasses}
      aria-label={'instagram.com @ f underscore underscore choir'}
    >
      instagram - @f__choir
    </a>
    <a href={EMAIL} className={linkClasses} aria-label={'we are f choir @ g mail.com'}>
      wearefchoir@gmail.com
    </a>
    <a href={FACEBOOK} className={linkClasses} aria-label={'facebook dot com f choir london'}>
      facebook - fchoirlondon
    </a>
  </footer>
);

export default Footer;

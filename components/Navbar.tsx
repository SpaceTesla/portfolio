import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import socials from '@/data/socials';
import ThemeSwitcher from './ThemeSwitcher';

const links = ['About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  return (
    <div className='navbar fixed top-0 w-full z-50 bg-neutral shadow-lg text-neutral-content'>
      <div className='navbar-start'>
        {/* Social Links */}
        <ul className='flex'>
          {socials.map((social) => (
            <li key={social.name}>
              <Link
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-nav-sm btn-ghost'
              >
                <FontAwesomeIcon icon={social.icon} className='h-4 w-4' />
                <span className='sr-only'>{social.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='navbar-center text-neutral-content hidden md:flex'>
        {/* Navigation Links */}
        <ul className='flex'>
          {links.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                className='btn btn-nav-sm btn-ghost'
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='navbar-end'>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;

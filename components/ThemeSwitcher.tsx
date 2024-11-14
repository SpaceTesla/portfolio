'use client';
import { useEffect, useState } from 'react';
import themes from '@/data/themes';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const initialTheme = themes[Math.floor(Math.random() * themes.length)];
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <div className='dropdown dropdown-end text-base-content'>
      <div tabIndex={0} role='button' className='btn btn-warning m-1'>
        Choose Theme
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu menu-xs bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
      >
        {themes.map((themeOption) => (
          <li key={themeOption}>
            <a
              onClick={() => setTheme(themeOption)}
              className={theme === themeOption ? 'active' : ''}
            >
              {themeOption}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;

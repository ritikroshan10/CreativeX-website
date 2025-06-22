import { useContext, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

// icons
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';
import { BiImageAdd } from 'react-icons/bi';
import { RiContactsFill } from 'react-icons/ri';
import { LuSun, LuMoon } from 'react-icons/lu';

const Navbar = () => {
  // use context
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  // state for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // navbar links
  const navLinks = [
    { to: '/', icon: <AiFillHome />, label: 'Home' },
    { to: '/about', icon: <BsPersonCircle />, label: 'About' },
    { to: '/services', icon: <MdMiscellaneousServices />, label: 'Services' },
    { to: '/gallery', icon: <BiImageAdd />, label: 'Gallery' },
    { to: '/contact', icon: <RiContactsFill />, label: 'Contact' },
  ];

  return (

    <nav className="shadow-md px-6 py-4 transition-colors duration-300  flex flex-wrap items-center justify-between 
                    bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white">

      {/*=================Logo==================*/}

      <div className="text-2xl font-bold flex items-center gap-2">
        <FaLaptopCode />
        <NavLink to="/">CreativeX</NavLink>
      </div>

      {/*==============Toggle button - Mobile only initial hidden============*/}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/*=============Links - Desktop & conditional Mobile==================== */}
      <div
        className={`w-full lg:w-auto lg:flex items-center gap-6 mt-4 lg:mt-0 text-base font-medium transition-all 
                    ${menuOpen ? 'block' : 'hidden'} lg:block`}
      >

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 transition font-medium ${isActive
                  ? 'text-blue-600 underline underline-offset-4'
                  : 'hover:text-blue-500'
                }`
              }
            >
              {link.icon} {link.label}
            </NavLink>

          ))}
        </div>

        {/*==================Theme Toggle=========================*/}
        <div className="w-full lg:w-auto">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 justify-center mx-auto lg:mx-0 mt-4 lg:mt-0 px-4 py-2 rounded-full 
                       bg-blue-600 hover:bg-blue-700 text-white 
                       dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-black transition"
          >
            {darkMode ? <LuSun /> : <LuMoon />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

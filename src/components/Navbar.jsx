import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from "../assets/wtmlogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Spotlight', path: '/spotlight' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-[100%] z-5">
      <div className="container mx-auto md:px-0 px-4 lg:px-4">
        <div className="flex justify-between items-center py-3">
          <NavLink to="/" className="flex gap-2 items-center">
          <img className='w-6' src={logo} alt="wtm-logo" />
            <span className="text-md font-bold text-primary">International Women's Day Kano</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex lg:space-x-8 space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => {
                  return isActive ? { borderBottom: "1.5px solid #FF69B4",  borderRadius:"5px"} : {};
                }}
                className="text-dark hover:text-primary transition duration-300"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="h-6 w-6 text-dark" />
            ) : (
              <HiMenu className="h-6 w-6 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => {
                    return isActive ? { borderBottom: "1.5px solid #FF69B4",  borderRadius:"5px"} : {};
                  }}
                  className="block px-3 py-2 text-dark hover:text-primary transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
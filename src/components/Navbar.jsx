import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from "../assets/wtm.png";
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
      <div className="w-[95%] mx-auto  ">
        <div className="flex justify-between items-center py-3">
        <NavLink to="/" className="flex gap-2 items-center">
  <img className='w-6' src={logo} alt="wtm-logo" />
  <span className="md:text-[18px]  text-[13px] md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
    International Women's Day Kano
  </span>
</NavLink>


          {/* Desktop Navigation */}
          <div className="w-[65%] hidden lg:flex  space-x-4">
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
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="h-6 w-6 text-primary" />
            ) : (
              <HiMenu className="h-6 w-6 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
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
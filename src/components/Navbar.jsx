import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "text-yellow-300"
        : "text-white hover:text-yellow-300"
    }`;

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold">ICCK Tampere</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/newsletters" className={linkClass}>Newsletters</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink
            to="/church-offerings"
             className={({ isActive }) =>
              isActive
               ? "text-yellow-400 font-semibold"
               : "text-white hover:text-yellow-300"
            }
           >
            Church Offerings
         </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/newsletters" className={linkClass} onClick={() => setIsOpen(false)}>Newsletters</NavLink>
          <NavLink to="/events" className={linkClass} onClick={() => setIsOpen(false)}>Events</NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink
            to="/donate"
            className="block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold text-center hover:bg-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
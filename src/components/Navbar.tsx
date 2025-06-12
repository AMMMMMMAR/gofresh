import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinkStyles = "hover:text-yellow-400 transition-colors text-sm lg:text-base";
  const mobileNavLinkStyles = "block px-3 py-2 text-base hover:text-yellow-400 transition-colors rounded";

  return (
    <nav className="bg-green-900 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl md:text-2xl font-bold text-yellow-400">
            Go Fresh
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#home" className={navLinkStyles}>Home</a>
            <a href="#about" className={navLinkStyles}>About</a>
            <a href="#menu" className={navLinkStyles}>Menu</a>
            <a href="#location" className={navLinkStyles}>Location</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-green-900 border-t border-green-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#menu"
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#location"
                className={mobileNavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Location from './components/Location';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isNavbarClick = target.closest('nav');
      
      if (!isNavbarClick && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-12 md:py-20">
          <About />
        </section>

        <section id="menu" className="py-12 md:py-20 bg-white">
          <MenuSection />
        </section>

        <section id="location" className="py-12 md:py-20 bg-white">
          <Location />
        </section>
      </main>

      <footer className="bg-green-900 text-white py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <Phone size={18} />
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <Mail size={18} />
                  <span>admin@gofreshspot.com</span>
                </p>
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <MapPin size={18} />
                  <span>3924 Telegraph Ave, Oakland,
                  CA 94609, United States</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Hours</h3>
              <div className="space-y-2 text-sm md:text-base">
                <p>Monday - Friday: 7am - 8pm</p>
                <p>Friday: 1pm - 2:30pm close</p>
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/gofreshspot/?hl=en" className="hover:text-yellow-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://www.tiktok.com/@gofreshspot?lang=en" className="hover:text-yellow-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-5.182 0c0-1.72 1.66-3.01 3.35-2.48V9.66c-3.45-.46-6.47 2.22-5.92 5.91.42 2.83 2.66 4.98 5.5 5.15 3.1.19 5.76-2.1 5.76-5.15V9.01a7.41 7.41 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-green-800 pt-8 text-sm md:text-base">
            <p>&copy; 2025 Ammar Moharram</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
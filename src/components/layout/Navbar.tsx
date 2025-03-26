
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarLogo from '../ui/NavbarLogo';
import NavLinks, { NavItem } from '../ui/nav/NavLinks';
import QuoteButton from '../ui/nav/QuoteButton';
import MobileMenu from '../ui/nav/MobileMenu';
import TopBar from '../ui/nav/TopBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Our Expertise', path: '/expertise' },
    { 
      name: 'Solutions & Products', 
      path: '/solutions',
      submenu: [
        { name: 'Staple Food Fortification', path: '/solutions/staple-food' },
        { name: 'Processed Food Solutions', path: '/solutions/processed-foods' },
        { name: 'Therapeutic Foods', path: '/solutions/therapeutic' },
        { name: 'Animal Nutrition', path: '/solutions/animal-nutrition' },
        { name: 'Customized Formulations', path: '/solutions/custom' },
        { name: 'FMCG Fortification', path: '/solutions/fmcg' },
      ]
    },
    { 
      name: 'About Us', 
      path: '#',
      submenu: [
        { name: 'Quality Assurance', path: '/quality' },
        { name: 'Innovation Lab', path: '/innovation' },
        { name: 'Success Stories', path: '/success-stories' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Allow scrolling when menu is closed
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TopBar />
      <nav 
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 mt-12",
          scrolled 
            ? "backdrop-blur-md bg-white/70 shadow-subtle py-2" 
            : "backdrop-blur-md bg-white/50 py-4"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <NavbarLogo />
          </Link>

          <NavLinks items={navItems} />
          <QuoteButton />

          <button
            className="lg:hidden rounded-md p-2 text-neutral-800 backdrop-blur-md bg-white/30 hover:bg-white/40 focus:outline-none"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} navItems={navItems} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;

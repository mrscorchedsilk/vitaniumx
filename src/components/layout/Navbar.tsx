
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Expertise', path: '/expertise' },
    { 
      name: 'Solutions & Products', 
      path: '/solutions',
      submenu: [
        { name: 'Staple Food Fortification', path: '/solutions/staple-food' },
        { name: 'Processed Foods', path: '/solutions/processed-foods' },
        { name: 'Therapeutic & Specialized', path: '/solutions/therapeutic' },
        { name: 'Animal Nutrition', path: '/solutions/animal-nutrition' },
        { name: 'Customized Formulations', path: '/solutions/custom' },
      ]
    },
    { name: 'Quality Assurance', path: '/quality' },
    { name: 'Innovation Lab', path: '/innovation' },
    { name: 'Knowledge Hub', path: '/knowledge' },
    { name: 'Success Stories', path: '/success-stories' },
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

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-subtle py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ad988369-a220-4ca6-af61-429afee9a968.png" 
              alt="VitaniumX Logo" 
              className="h-10"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => 
            item.submenu ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center text-neutral-800 font-medium hover:text-vitanium-600 transition-colors">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1 rounded-md bg-white">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className="block px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 hover:text-vitanium-600"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-neutral-800 font-medium transition-colors",
                  location.pathname === item.path 
                    ? "text-vitanium-600" 
                    : "hover:text-vitanium-600"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            to="/get-quote" 
            className="btn-primary"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden rounded-md p-2 text-neutral-800 hover:bg-neutral-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-white z-40 transition-transform ease-in-out duration-300 transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-20 pb-6 px-4 max-h-screen overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => 
              item.submenu ? (
                <div key={item.name} className="py-2">
                  <div className="font-medium text-lg mb-2">{item.name}</div>
                  <div className="ml-4 border-l-2 border-neutral-200 pl-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className="block py-1 text-neutral-600 hover:text-vitanium-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block py-2 text-lg font-medium",
                    location.pathname === item.path 
                      ? "text-vitanium-600" 
                      : "text-neutral-800 hover:text-vitanium-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 mt-4 border-t border-neutral-200">
              <Link 
                to="/get-quote" 
                className="btn-primary w-full flex justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

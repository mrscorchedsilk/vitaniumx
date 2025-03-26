
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarLogo from '../ui/NavbarLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
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

  const handleBackButton = () => {
    setIsOpen(false);
  };

  // Check if path is current location or if it's a parent path of the current location
  const isActivePath = (path: string) => {
    if (path === '#') return false;
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Check if the submenu contains the current page
  const hasActivePath = (submenu: {name: string, path: string}[]) => {
    return submenu.some(item => isActivePath(item.path));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-emerald-900 to-vitanium-800 text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container-wide flex justify-center items-center space-x-10">
          <a href="tel:+919429694121" className="flex items-center text-sm hover:text-emerald-300 transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            +91 9429694121
          </a>
          <a href="mailto:hello@vitaniumx.com" className="flex items-center text-sm hover:text-emerald-300 transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            hello@vitaniumx.com
          </a>
        </div>
      </div>
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

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => 
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className={cn(
                    "flex items-center font-medium transition-colors",
                    hasActivePath(item.submenu)
                      ? "text-emerald-600" 
                      : "text-neutral-800 hover:text-emerald-600"
                  )}>
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute left-0 mt-2 w-56 backdrop-blur-md bg-white/90 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-1 rounded-lg overflow-hidden">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-emerald-50/50 hover:text-emerald-600",
                            isActivePath(subitem.path)
                              ? "text-emerald-600 bg-emerald-50/50"
                              : "text-neutral-800"
                          )}
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
                    isActivePath(item.path)
                      ? "text-emerald-600" 
                      : "hover:text-emerald-600"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link 
              to="/get-quote" 
              className={cn(
                "btn-primary",
                location.pathname === "/get-quote" && "bg-emerald-700 hover:bg-emerald-800"
              )}
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="lg:hidden rounded-md p-2 text-neutral-800 backdrop-blur-md bg-white/30 hover:bg-white/40 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile menu overlay - separate from the nav element */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Frosted glass background */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/70"></div>
        
        {/* Menu content */}
        <div className="relative w-full h-full pt-28 pb-6 px-6 overflow-y-auto">
          <button 
            onClick={handleBackButton}
            className="absolute top-20 left-6 p-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            aria-label="Back"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <div className="space-y-4 mt-8">
            {navItems.map((item) => 
              item.submenu ? (
                <div key={item.name} className="py-2">
                  <div className={cn(
                    "font-medium text-lg mb-3",
                    hasActivePath(item.submenu) ? "text-emerald-700" : "text-neutral-700"
                  )}>{item.name}</div>
                  <div className="ml-4 border-l-2 border-emerald-200 pl-4 space-y-3">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className={cn(
                          "block py-1.5",
                          isActivePath(subitem.path)
                            ? "text-emerald-600 font-medium"
                            : "text-neutral-600 hover:text-emerald-600"
                        )}
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
                    isActivePath(item.path)
                      ? "text-emerald-600"
                      : "text-neutral-800 hover:text-emerald-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-6 mt-6 border-t border-neutral-200">
              <Link 
                to="/get-quote" 
                className={cn(
                  "btn-primary w-full flex justify-center",
                  location.pathname === "/get-quote" && "bg-emerald-700 hover:bg-emerald-800"
                )}
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

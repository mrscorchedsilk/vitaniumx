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
      path: '#',
      submenu: [
        { name: 'Micronutrient Premix', path: '/solutions/micronutrient-premix' },
        { name: 'Therapeutic Nutrition', path: '/solutions/therapeutic-nutrition' },
        { name: 'Customized Formulation', path: '/solutions/custom' },
        { name: 'Government Program Solutions', path: '/solutions/government-programs' },
      ]
    },
    { 
      name: 'Knowledge Hub', 
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackButton = () => {
    setIsOpen(false);
  };

  const isActivePath = (path: string) => {
    if (path === '#') return false;
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  const hasActivePath = (submenu: {name: string, path: string}[]) => {
    return submenu.some(item => isActivePath(item.path));
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          scrolled 
            ? "backdrop-blur-md bg-white/70 shadow-subtle" 
            : "backdrop-blur-md bg-white/50"
        )}
      >
        <div className="bg-gradient-to-r from-vitanium-700 to-vitanium-400 text-white py-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-10"></div>
          <div className="container-wide flex justify-center items-center space-x-6 md:space-x-10">
            <a href="tel:+919429694121" className="flex items-center text-sm hover:text-vitanium-300 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +91 9429694121
            </a>
            <a href="mailto:hello@vitaniumx.com" className="flex items-center text-sm hover:text-vitanium-300 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              hello@vitaniumx.com
            </a>
          </div>
        </div>
        
        <div className="container-wide flex items-center justify-between py-4">
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
                      ? "text-vitanium-600" 
                      : "text-neutral-800 hover:text-vitanium-600"
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
                            "block px-4 py-2 text-sm hover:bg-vitanium-50/50 hover:text-vitanium-600",
                            isActivePath(subitem.path)
                              ? "text-vitanium-600 bg-vitanium-50/50"
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
                      ? "text-vitanium-600" 
                      : "hover:text-vitanium-600"
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
              "btn-primary bg-vitanium-500 hover:bg-vitanium-600 focus:outline-none focus:ring-0",
              location.pathname === "/get-quote" && "bg-[#2a9edb] hover:bg-[#2290cc]"
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

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-white/70"></div>
        
        <div className="relative w-full h-full pt-28 pb-6 px-6 overflow-y-auto">
          <button 
            onClick={handleBackButton}
            className="absolute top-20 left-6 p-2 rounded-full bg-vitanium-100 text-vitanium-500 hover:bg-vitanium-200"
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
                    hasActivePath(item.submenu) ? "text-vitanium-700" : "text-neutral-700"
                  )}>{item.name}</div>
                  <div className="ml-4 border-l-2 border-vitanium-200 pl-4 space-y-3">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className={cn(
                          "block py-1.5",
                          isActivePath(subitem.path)
                            ? "text-vitanium-600 font-medium"
                            : "text-neutral-600 hover:text-vitanium-600"
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
                      ? "text-vitanium-600"
                      : "text-neutral-800 hover:text-vitanium-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            
            <div className="pt-6 mt-6 border-t border-neutral-200 space-y-4">
              <div className="flex flex-col items-center space-y-4">
                <a href="tel:+919429694121" className="flex items-center text-neutral-700 hover:text-vitanium-600 transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  +91 9429694121
                </a>
                <a href="mailto:hello@vitaniumx.com" className="flex items-center text-neutral-700 hover:text-vitanium-600 transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  hello@vitaniumx.com
                </a>
              </div>
              
              <Link 
                to="/get-quote" 
                className={cn(
                  "flex items-center btn-primary bg-vitanium-500 hover:bg-vitanium-600 focus:outline-none focus:ring-0",
                  location.pathname === "/get-quote" && "bg-vitanium-500 hover:bg-vitanium-600"
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

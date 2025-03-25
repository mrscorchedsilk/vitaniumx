
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
          "fixed top-0 w-full z-50 transition-all duration-300 mt-12",
          scrolled 
            ? "glass shadow-subtle py-2" 
            : "glass py-4"
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
                  <button className="flex items-center text-neutral-800 font-medium hover:text-emerald-600 transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute left-0 mt-2 w-56 glass rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-1 rounded-lg overflow-hidden">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block px-4 py-2 text-sm text-neutral-800 hover:bg-emerald-50/50 hover:text-emerald-600"
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
              className="btn-primary"
            >
              Get a Quote
            </Link>
          </div>

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

        <div
          className={cn(
            "lg:hidden fixed inset-0 glass z-40 transition-transform ease-in-out duration-300 transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-20 pb-6 px-4 max-h-screen overflow-y-auto">
            <button 
              onClick={handleBackButton}
              className="absolute top-4 left-4 p-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <div className="space-y-1">
              {navItems.map((item) => 
                item.submenu ? (
                  <div key={item.name} className="py-2">
                    <div className="font-medium text-lg mb-2 text-emerald-700">{item.name}</div>
                    <div className="ml-4 border-l-2 border-emerald-200 pl-4 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block py-1 text-neutral-600 hover:text-emerald-600"
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
                        ? "text-emerald-600" 
                        : "text-neutral-800 hover:text-emerald-600"
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
    </>
  );
};

export default Navbar;

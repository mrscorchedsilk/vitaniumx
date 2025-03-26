
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type NavItem = {
  name: string;
  path: string;
  submenu?: { name: string; path: string }[];
};

type NavLinksProps = {
  items: NavItem[];
  mobile?: boolean;
  onClick?: () => void;
};

export const isActivePath = (path: string, locationPathname: string) => {
  if (path === '#') return false;
  if (path === '/' && locationPathname !== '/') return false;
  return locationPathname === path || 
         (path !== '/' && locationPathname.startsWith(path));
};

export const hasActivePath = (submenu: {name: string, path: string}[], locationPathname: string) => {
  return submenu.some(item => isActivePath(item.path, locationPathname));
};

const NavLinks: React.FC<NavLinksProps> = ({ items, mobile = false, onClick }) => {
  const location = useLocation();

  if (mobile) {
    return (
      <div className="space-y-4 mt-8">
        {items.map((item) => 
          item.submenu ? (
            <div key={item.name} className="py-2">
              <div className={cn(
                "font-medium text-lg mb-3",
                hasActivePath(item.submenu, location.pathname) ? "text-emerald-700" : "text-neutral-700"
              )}>{item.name}</div>
              <div className="ml-4 border-l-2 border-emerald-200 pl-4 space-y-3">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    to={subitem.path}
                    className={cn(
                      "block py-1.5",
                      isActivePath(subitem.path, location.pathname)
                        ? "text-emerald-600 font-medium"
                        : "text-neutral-600 hover:text-emerald-600"
                    )}
                    onClick={onClick}
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
                isActivePath(item.path, location.pathname)
                  ? "text-emerald-600"
                  : "text-neutral-800 hover:text-emerald-600"
              )}
              onClick={onClick}
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center space-x-8">
      {items.map((item) => 
        item.submenu ? (
          <div key={item.name} className="relative group">
            <button className={cn(
              "flex items-center font-medium transition-colors",
              hasActivePath(item.submenu, location.pathname)
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
                      isActivePath(subitem.path, location.pathname)
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
              isActivePath(item.path, location.pathname)
                ? "text-emerald-600" 
                : "hover:text-emerald-600"
            )}
          >
            {item.name}
          </Link>
        )
      )}
    </div>
  );
};

export default NavLinks;

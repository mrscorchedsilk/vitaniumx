
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

type QuoteButtonProps = {
  mobile?: boolean;
  onClick?: () => void;
};

const QuoteButton: React.FC<QuoteButtonProps> = ({ mobile = false, onClick }) => {
  const location = useLocation();
  
  const buttonClasses = cn(
    "btn-primary",
    location.pathname === "/get-quote" && "bg-emerald-700 hover:bg-emerald-800"
  );

  if (mobile) {
    return (
      <div className="pt-6 mt-6 border-t border-neutral-200">
        <Link 
          to="/get-quote" 
          className={cn(buttonClasses, "w-full flex justify-center")}
          onClick={onClick}
        >
          Get a Quote
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <Link 
        to="/get-quote" 
        className={buttonClasses}
      >
        Get a Quote
      </Link>
    </div>
  );
};

export default QuoteButton;

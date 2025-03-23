
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;

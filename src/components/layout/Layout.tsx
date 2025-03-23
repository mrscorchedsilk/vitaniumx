
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'sonner';
import OrganicShape from '../ui/OrganicShape';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
      {/* Decorative organic shapes in the background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <OrganicShape color="primary" size="lg" position="top-right" opacity={0.06} delay={0.3} />
        <OrganicShape color="secondary" size="xl" position="bottom-left" opacity={0.06} delay={0.5} />
        <OrganicShape color="tertiary" size="md" position="top-left" opacity={0.04} delay={0.7} />
        <OrganicShape color="quaternary" size="sm" position="bottom-right" opacity={0.05} delay={0.9} />
      </div>
      
      <Navbar />
      <main className="flex-grow relative overflow-hidden">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;

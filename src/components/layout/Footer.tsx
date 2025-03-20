
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/154cc4d2-fd89-483f-8eb7-21939f1f9c8c.png" 
              alt="VitaniumX Logo" 
              className="h-10" 
            />
            <p className="text-neutral-300 mt-4 max-w-xs">
              Leading manufacturer of micronutrient premixes for food fortification, combating hidden hunger through precision nutrition.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-neutral-300 hover:text-vitanium-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-vitanium-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-vitanium-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-vitanium-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/expertise" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Solutions & Products
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Innovation Lab
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Secondary Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/industries" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link to="/global-presence" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Global Presence
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-neutral-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Factory:</p>
                  <p className="text-neutral-300">F-80, Ramghat Rd, Sector 1, Talanagri, Talashpur, Aligarh, Uttar Pradesh 202001, India</p>
                </div>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Marketing Office:</p>
                  <p className="text-neutral-300">Innov8 Coworking Space, 3rd Floor, Orchid Centre, Gurugram, Haryana 122022, India</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0" />
                <a href="tel:+919429694121" className="text-neutral-300 hover:text-white transition-colors">+91 94296 94121</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0" />
                <a href="mailto:hello@vitaniumx.com" className="text-neutral-300 hover:text-white transition-colors">hello@vitaniumx.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Progressive Processors Private Limited. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

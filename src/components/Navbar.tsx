import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { openCalendlyPopup } from '../utils/calendly';
import { Link } from 'react-router-dom';

type NavbarProps = {
  scrollToVideo: () => void;
  scrollToBooking: () => void;
  scrollToTestimonials: () => void;
};

const Navbar = ({ scrollToVideo, scrollToBooking, scrollToTestimonials }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#38071e]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo Container */}
          <div className="flex items-center gap-4">
            {/* Main Logo */}
            <div className="h-[120px] flex items-center -my-8 -ml-4">
              <img 
                src="/1-LOGO.png" 
                alt="ConstructClients.ai Logo" 
                className="h-full w-auto object-contain scale-[2.8]"
              />
            </div>
            {/* Second Logo */}
            <div className="h-[140px] flex items-center -my-8">
              <img 
                src="/2-LOGO.png" 
                alt="Name Logo" 
                className="h-full w-auto object-contain scale-[3.2] brightness-150 contrast-125 saturate-125"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={scrollToVideo}
              className="text-white hover:text-[#ec9611] transition-colors"
            >
              How We Work
            </button>
            <button 
              onClick={scrollToTestimonials}
              className="text-white hover:text-[#ec9611] transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={openCalendlyPopup}
              className="bg-[#ec9611] hover:bg-[#d88610] text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Book a Call
            </button>
            <Link to="/about" className="hover:text-[#ec9611]">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  scrollToVideo();
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-[#ec9611] transition-colors py-2"
              >
                How We Work
              </button>
              <button 
                onClick={() => {
                  scrollToTestimonials();
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-[#ec9611] transition-colors py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  openCalendlyPopup();
                  setIsMenuOpen(false);
                }}
                className="bg-[#ec9611] hover:bg-[#d88610] text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
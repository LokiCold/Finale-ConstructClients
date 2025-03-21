import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { openCalendlyPopup } from '../utils/calendly';
import { Link } from 'react-router-dom';

type NavbarProps = {
  scrollToVideo: () => void;
  scrollToBooking: () => void;
  scrollToTestimonials: () => void;
  scrollToFAQ: () => void;
};

const Navbar = ({ scrollToVideo, scrollToBooking, scrollToTestimonials, scrollToFAQ }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-[200] bg-[#38071e] shadow-lg">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo Container */}
          <div className="flex md:items-center md:gap-12 w-full md:w-auto justify-center md:justify-start">
            {/* Main Logo */}
            <div className="h-[50px] flex items-center">
              <img 
                src="/Untitled design (5).svg" 
                alt="ConstructClients.ai Logo" 
                className="h-full w-auto object-contain scale-[1.5]"
              />
            </div>
            {/* Second Logo */}
            <div className="h-[140px] hidden md:flex items-center -my-8">
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
              Our Solution
            </button>
            <button 
              onClick={scrollToTestimonials}
              className="text-white hover:text-[#ec9611] transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={scrollToFAQ}
              className="text-white hover:text-[#ec9611] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={scrollToBooking}
              className="bg-[#ec9611] hover:bg-[#d88610] text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Book My Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden absolute top-full left-0 right-0 bg-[#38071e]/95 backdrop-blur-sm
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="flex flex-col space-y-4 p-4 border-t border-white/10">
            <button 
              onClick={() => {
                scrollToVideo();
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#ec9611] transition-colors py-2 text-left"
            >
              Our Solution
            </button>
            <button 
              onClick={() => {
                scrollToTestimonials();
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#ec9611] transition-colors py-2 text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => {
                scrollToFAQ();
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-[#ec9611] transition-colors py-2 text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => {
                scrollToBooking();
                setIsMenuOpen(false);
              }}
              className="bg-[#ec9611] hover:bg-[#d88610] text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-center"
            >
              Book My Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
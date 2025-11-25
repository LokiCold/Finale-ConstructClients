import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a0517] text-white py-8 relative z-10">
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(56, 7, 30, 0.8), rgba(42, 5, 23, 0.95))'
        }}
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col space-y-6">
          {/* Top section with logo and links */}
          <div className="flex itemss-center justify-between flex-wrap gap-4">
            <div className="flex itemss-center">
              <img 
                src="/Untitled design (5).svg" 
                alt="ConstructClients Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.currentTarget.src = '/fallback-image.png';
                }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {/* Socials Section */}
              <div className="flex itemss-center gap-2">
                <span className="text-white">Check out our socials:</span>
                <a 
                  href="https://www.linkedin.com/in/constructclients/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] text-white p-2 rounded hover:bg-[#005885] transition-all flex itemss-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="white"
                    className="w-5 h-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex space-x-4">
                <Link 
                  to="/terms" 
                  className="bg-[#ec9611] text-white px-4 py-2 rounded hover:bg-[#d88610] transition"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/privacy-policy"
                  className="bg-[#ec9611] text-white px-4 py-2 rounded hover:bg-[#d88610] transition"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright */}
          <div className="border-t border-gray-700/30 pt-6">
            <p className="text-center text-gray-400">
              Copyright © 2025 ConstructClients. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
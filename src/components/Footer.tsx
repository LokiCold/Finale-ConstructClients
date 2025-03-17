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
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
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
            <div className="flex space-x-4 flex-wrap">
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
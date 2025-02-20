import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img 
            src="/2-LOGO.png" 
            alt="Logo" 
            className="h-12 w-auto"
            onError={(e) => {
              e.currentTarget.src = '/fallback-image.png'; // Fallback image
            }}
          />
        </div>
        <div className="text-sm">
          <div className="flex space-x-4">
            <Link to="/terms" className="bg-[#ec9611] text-white px-4 py-2 rounded hover:bg-[#d88610] transition">
              Terms of Service
            </Link>
            <Link to="/privacy" className="bg-[#ec9611] text-white px-4 py-2 rounded hover:bg-[#d88610] transition">
              Privacy Policy
            </Link>
          </div>
          <div className="mt-2">
            &copy; {new Date().getFullYear()} ConstructClients.ai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
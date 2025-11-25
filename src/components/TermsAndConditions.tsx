import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#38071e] text-white">
      {/* Header Section */}
      <div className="bg-[#2a0517] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-float relative">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-30"></div>
            <div className="relative z-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent">Terms and Conditions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Our terms of service and conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#2a0517]/80 backdrop-blur-sm rounded-xl shadow-2xl border border-[#ec9611]/20 p-8 md:p-12">
          <p className="text-gray-300 text-center">This page is currently under construction. Please check back later for our terms and conditions details.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 
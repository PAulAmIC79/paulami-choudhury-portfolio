import React from 'react';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper; 
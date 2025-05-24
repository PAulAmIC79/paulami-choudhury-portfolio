import React from 'react';
import { FaRegCopyright, FaHeart } from "react-icons/fa";

const Last = () => {
  const today = new Date();
  return (
    <footer className="py-8 mt-16 border-t border-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center text-gray-400">
            <FaRegCopyright className="w-4 h-4 mr-2" />
            <span>{today.getFullYear()}</span>
            <span className="mx-2">•</span>
            <span>Paulami Choudhury</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Built with</span>
            <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>using MERN Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Last;
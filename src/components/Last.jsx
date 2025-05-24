import React from 'react';
import { FaRegCopyright, FaHeart } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Last = () => {
  const today = new Date();
  return (
    <footer className="py-8 mt-16 border-t border-gray-800">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center text-white">
            <FaRegCopyright className="w-4 h-4 mr-2" />
            <span>{today.getFullYear()}</span>
            <span className="mx-2">•</span>
            <span>Paulami Choudhury</span>
          </div>
          <div className="flex items-center text-white text-sm">
            <span>Built with</span>
            <FaCircle className="w-2 h-2 mx-2 text-white animate-pulse" />
            <span>MERN Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Last;
import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Last = () => {
    const today = new Date();
    return (    
      <div className="flex justify-center mt-7">
          <FaRegCopyright className="w-4 h-6 ml-1 mr-1"/>
          <h3 className='mr-1'>{today.getFullYear()}</h3>
      <h3>Paulami Choudhury, All rights reserved • Built with MERN Stack</h3>
     </div>
  )
}

export default Last
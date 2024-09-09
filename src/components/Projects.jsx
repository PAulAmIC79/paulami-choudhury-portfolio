import React from 'react';
import { Link } from "react-router-dom";

const handleLinkClick = (event) => {
  event.preventDefault();

  window.open(event.target.href, '_blank', 'noopener,noreferrer')
}

const Projects = () => {
  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-4xl underline text-center mb-20 mt-28">
      <h1>My Projects</h1>
      </div>
      <ul className='grid grid-rows-2 grid-flow-col gap-4 justify-evenly'>
        <li className='inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:underline'>
          <Link to="https://github.com/PAulAmIC79/ToDo-List-Project" onClick={handleLinkClick}>To-Do List using MERN Stack</Link>
        </li>

      </ul>
    </div>
    </section>
  );
}

export default Projects
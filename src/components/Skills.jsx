import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-4xl underline text-center mb-20 mt-16">
      <h1>My Skills</h1>
      </div>
      <ul className='grid grid-rows-5 lg:grid-rows-3 grid-flow-col gap-4 justify-evenly'>
        <li className='inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>HTML</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>CSS</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>JavaScript</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>ExpressJS</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>MongoDB</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>NodeJS</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>NextJS</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>ReactJS</li>
        <li className='inline-flex text-white  bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg'>Wordpress</li>
      </ul>
    </div>
    </section>
  );
}

export default Skills
import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const handleLinkClick = (event) => {
  event.preventDefault();
  window.open(event.target.href, '_blank', 'noopener,noreferrer');
}

const Projects = () => {
  const projects = [
    {
      title: "To-Do List",
      description: "A full-stack MERN application for managing tasks",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/PAulAmIC79/ToDo-List-Project"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "An interactive game built with React and Vite",
      tech: ["React", "Vite", "JavaScript"],
      link: "https://github.com/PAulAmIC79/ttc-game"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">My Projects</h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="p-4 sm:p-6">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4"
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + techIndex * 0.1 }}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-blue-900/50 text-blue-300 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to={project.link}
                    onClick={handleLinkClick}
                    className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                  >
                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    View on GitHub
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
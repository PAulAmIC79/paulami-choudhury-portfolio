import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600' },
    { name: 'ExpressJS', color: 'from-gray-600 to-gray-700' },
    { name: 'MongoDB', color: 'from-green-500 to-green-600' },
    { name: 'NodeJS', color: 'from-green-600 to-green-700' },
    { name: 'NextJS', color: 'from-gray-800 to-gray-900' },
    { name: 'ReactJS', color: 'from-blue-400 to-blue-500' },
    { name: 'Wordpress', color: 'from-blue-600 to-blue-700' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="container px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">My Skills</h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${skill.color} p-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-${skill.color.split('-')[1]}/25`}
            >
              <div className="relative rounded-lg bg-gray-900 p-3 sm:p-4 text-center">
                <span className="text-base sm:text-lg font-medium text-white">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
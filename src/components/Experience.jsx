import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'SumukhAI (Current)',
      position: 'Web Developer',
      description: 'Develope and maintain company website and web applications'
    },
    {
      company: 'Sisyphus Infotech (Former)',
      position: 'Frontend Developer',
      description: 'Designed and implemented user interfaces for various client projects'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="scroll-mt-20 MT-8 md:pr-52 md:pl-52">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Experience</h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6 sm:space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <div className="relative rounded-lg bg-gray-900 p-4 sm:p-6 transition-all duration-300 group-hover:bg-opacity-90">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    <FaBriefcase className="text-2xl sm:text-3xl mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-blue-400 mb-3 text-sm sm:text-base">{exp.position}</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

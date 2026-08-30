import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLink, FaChevronRight } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';

const ShopifyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      type: 'Shopify E-commerce · Mumbai',
      badge: 'ONGOING PROJECT',
      badgeColor: 'from-green-500 to-emerald-600',
      title: 'The Indian Bhakti Box',
      description: 'A Shopify e-commerce storefront for a Mumbai-based startup bringing thoughtfully curated Indian spiritual and cultural products into modern homes. Working as the Shopify Developer, I\'m developing and customizing the storefront with a focus on the brand experience, product discovery, responsive design and the overall customer journey — from discovering the brand and exploring collections to finding products and making a purchase. The store is currently in development ahead of its planned September 2026 launch.',
      image: 'indianbhaktibox.png',
      role: 'Shopify Developer',
      scope: 'Shopify Development · Theme Customization · Custom Sections · Responsive Development · Customer Journey',
      capabilities: [
        'Shopify Development',
        'Theme Customization',
        'Custom Sections',
        'Responsive Development',
        'Customer Journey'
      ],
      highlights: [
        'Building a Shopify storefront for a Mumbai-based startup preparing for launch in September 2026',
        'Customizing the storefront to support brand discovery, collection exploration and product understanding',
        'Developing responsive storefront experiences that work across desktop, tablet and mobile',
        'Shaping the customer journey from brand discovery through product consideration and purchase',
        'Creating a clean, conversion-aware shopping experience aligned with the brand purpose and customer needs'
      ],
      status: 'Currently in development ahead of September 2026 launch',
      website: 'https://www.theindianbhaktibox.com/',
      customerJourney: [
        { step: 'DISCOVER', description: 'Understand the brand and its purpose.' },
        { step: 'EXPLORE', description: 'Discover products through categories, festivals and intentions.' },
        { step: 'CONSIDER', description: 'Learn about products and their meaning before purchasing.' },
        { step: 'PURCHASE', description: 'Move naturally from product discovery toward purchase.' },
        { step: 'RETURN', description: 'Create opportunities for customers to reconnect with the brand through stories, festivals and new products.' }
      ]
    },
    {
      id: 2,
      type: 'Shopify E-commerce · Chocolate & Wellness',
      badge: 'COMPLETED PROJECT',
      badgeColor: 'from-blue-500 to-cyan-600',
      title: 'Nirvritti Chocolates',
      description: 'Nirvritti Chocolates is a Mumbai-based chocolate brand built around the idea that chocolate can be thoughtfully crafted for modern lifestyles. The website experience brings this healthy, natural positioning into the customer journey — helping visitors discover chocolates by lifestyle and occasion while communicating the ingredients, craftsmanship and product qualities behind the brand. The experience moves customers from discovering the brand and its philosophy to exploring product ranges, understanding what makes the chocolates different and choosing products based on their needs.',
      image: 'pc-1.webp',
      role: 'Shopify Developer',
      scope: 'Shopify Development · E-commerce UX · Theme Customization · Responsive Development · Customer Journey',
      capabilities: [
        'Shopify Development',
        'E-commerce UX',
        'Theme Customization',
        'Responsive Development',
        'Customer Journey'
      ],
      highlights: [
        'Communicating a natural, wellness-oriented positioning — natural ingredients, handmade small-batch production, no preservatives, no artificial flavour, no palm oil',
        'Presenting the FIT-ROOT range through different needs and occasions such as Energy, Love, Kids and Care',
        'Building a self-select journey so customers can browse by what they\'re looking for rather than a single catalog view',
        'Designing a responsive storefront that works across desktop, tablet and mobile'
      ],
      status: 'Completed — live and shipping',
      website: 'https://nirvrittichocolates.store/',
      customerJourney: [
        { step: 'DISCOVER', description: 'Understand Nirvritti\'s natural and wellness-oriented approach to chocolate.' },
        { step: 'EXPLORE', description: 'Discover the FIT-ROOT range through different needs and occasions such as Energy, Love, Kids and Care.' },
        { step: 'UNDERSTAND', description: 'Learn about the ingredients, craftsmanship and product qualities before making a purchase.' },
        { step: 'CHOOSE', description: 'Find products based on lifestyle, occasion or personal preference.' },
        { step: 'PURCHASE', description: 'Move naturally from product discovery to shopping.' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="shopify-projects" className="scroll-mt-20 md:pr-52 md:pl-52">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Shopify Project Showcase</h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg mt-6 max-w-3xl mx-auto">
            Real Shopify e-commerce work — from an ongoing brand launch to a completed store for a Mumbai-based chocolate brand — each shaped around the full customer journey from discovery to purchase.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedProject(project.id)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 cursor-pointer"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Card Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 relative z-10">
                
                {/* Image Section */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  
                  {/* Header with Badge */}
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${project.badgeColor} text-white`}>
                        <SiShopify className="w-3 h-3 sm:w-4 sm:h-4" />
                        {project.badge}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-400">{project.type}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4 sm:space-y-6">
                    
                    {/* Role & Scope */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs uppercase text-green-400 font-semibold tracking-wide mb-1">Role</p>
                        <p className="text-gray-300 text-sm">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-green-400 font-semibold tracking-wide mb-1">Scope</p>
                        <p className="text-gray-300 text-sm">{project.scope}</p>
                      </div>
                    </div>

                    {/* Capabilities Tags */}
                    <div>
                      <p className="text-xs uppercase text-green-400 font-semibold tracking-wide mb-2">Capabilities</p>
                      <div className="flex flex-wrap gap-2">
                        {project.capabilities.slice(0, 4).map((cap, idx) => (
                          <span key={idx} className="text-xs bg-green-500/10 text-green-300 px-2.5 py-1 rounded-full border border-green-500/20 hover:bg-green-500/20 transition-colors duration-300">
                            {cap}
                          </span>
                        ))}
                        {project.capabilities.length > 4 && (
                          <span className="text-xs bg-green-500/10 text-green-300 px-2.5 py-1 rounded-full border border-green-500/20">
                            +{project.capabilities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end pt-2">
                      {project.website ? (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold text-sm sm:text-base"
                        >
                          Visit Website →
                        </a>
                      ) : (
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold text-sm sm:text-base"
                        >
                          View Project Details
                          <FaChevronRight className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-2xl border border-gray-700/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              >
                {projects.find(p => p.id === selectedProject) && (
                  <div className="relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-0 right-0 text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                    >
                      ✕
                    </button>

                    {/* Modal Content */}
                    {(() => {
                      const project = projects.find(p => p.id === selectedProject);
                      return (
                        <div>
                          {/* Header */}
                          <div className="mb-6 sm:mb-8">
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${project.badgeColor} text-white`}>
                                <SiShopify className="w-3 h-3 sm:w-4 sm:h-4" />
                                {project.badge}
                              </span>
                              <span className="text-xs sm:text-sm text-gray-400">{project.type}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{project.description}</p>
                          </div>

                          {/* Project Image */}
                          <div className="mb-8 rounded-xl overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-auto"
                            />
                          </div>

                          {/* Details Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                            <div>
                              <h3 className="text-lg font-bold text-green-400 mb-3 uppercase tracking-wide">Role</h3>
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.role}</p>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-green-400 mb-3 uppercase tracking-wide">Scope</h3>
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.scope}</p>
                            </div>
                          </div>

                          {/* Capabilities */}
                          <div className="mb-8">
                            <h3 className="text-lg font-bold text-green-400 mb-4 uppercase tracking-wide">Shopify Capabilities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {project.capabilities.map((cap, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                  <FaChevronRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm sm:text-base">{cap}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="mb-8">
                            <h3 className="text-lg font-bold text-green-400 mb-4 uppercase tracking-wide">Project Highlights</h3>
                            <div className="space-y-3">
                              {project.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex gap-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                                  <span className="text-green-400 font-bold flex-shrink-0 mt-1">•</span>
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Customer Journey */}
                          {project.customerJourney && (
                            <div className="mb-8">
                              <h3 className="text-lg font-bold text-green-400 mb-4 uppercase tracking-wide">Customer Journey</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                                {project.customerJourney.map((item) => (
                                  <div key={item.step} className="p-3 rounded-lg border border-gray-700 bg-gray-800/60">
                                    <p className="text-xs uppercase text-green-400 font-semibold tracking-wide mb-2">{item.step}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Status */}
                          <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 mb-6">
                            <p className="text-xs uppercase text-green-400 font-semibold tracking-wide mb-2">Project Status</p>
                            <p className="text-gray-300 text-base sm:text-lg font-semibold">{project.status}</p>
                          </div>

                          {project.website && (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:opacity-90 transition-opacity duration-300"
                            >
                              Visit Website →
                            </a>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ShopifyProjects;

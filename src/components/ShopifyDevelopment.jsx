import React from 'react';
import { motion } from 'framer-motion';
import { SiShopify } from 'react-icons/si';
import { FaStore, FaCode, FaDesktop, FaShoppingCart, FaMobileAlt, FaSearch, FaCogs, FaImage } from 'react-icons/fa';

const ShopifyDevelopment = () => {
  const capabilities = [
    { name: 'Shopify Store Development', icon: <FaStore className="text-2xl" />, description: 'End-to-end store setup' },
    { name: 'Theme Customization', icon: <FaDesktop className="text-2xl" />, description: 'Premium theme modifications' },
    { name: 'Custom Sections', icon: <FaCode className="text-2xl" />, description: 'Unique Liquid components' },
    { name: 'Responsive Design', icon: <FaMobileAlt className="text-2xl" />, description: 'Mobile-first experiences' },
    { name: 'Product Experience', icon: <FaShoppingCart className="text-2xl" />, description: 'Discovery & selection' },
    { name: 'Cart & Checkout', icon: <FaSearch className="text-2xl" />, description: 'Frictionless purchases' },
    { name: 'App Integration', icon: <FaCogs className="text-2xl" />, description: 'Third-party connectivity' },
    { name: 'Figma to Shopify', icon: <FaImage className="text-2xl" />, description: 'Design to development' },
  ];

  const journeyStages = [
    {
      stage: 'DISCOVER',
      title: 'How Discovery Happens',
      description: 'The first impression matters. I focus on creating brand experiences that capture attention and communicate value at first glance.',
      icon: '🔍'
    },
    {
      stage: 'EXPLORE',
      title: 'Guided Product Discovery',
      description: 'Customers need to quickly understand what you sell. Intuitive navigation, smart collections, and clear product categories make exploration effortless.',
      icon: '🗺️'
    },
    {
      stage: 'CONSIDER',
      title: 'Building Confidence',
      description: 'Product details, images, reviews, and comparisons answer the questions customers have before buying. Every element builds trust.',
      icon: '💭'
    },
    {
      stage: 'PURCHASE',
      title: 'Seamless Checkout',
      description: 'The path to purchase should be frictionless. Optimized cart, clear shipping, and secure payment reduce abandonment and increase conversions.',
      icon: '✓'
    },
    {
      stage: 'RETURN',
      title: 'Building Loyalty',
      description: 'The post-purchase experience determines if customers come back. I design retention strategies that transform buyers into brand advocates.',
      icon: '💝'
    }
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
    <section id="shopify-development" className="scroll-mt-20 mt-10 md:mt-16 md:pr-52 md:pl-52">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
            <div className="flex items-center justify-center gap-3 mb-4">
                {/* Icon */}
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className="mb-6"
                            >
                              <SiShopify className="text-6xl sm:text-7xl text-green-400" />
                            </motion.div>
                            </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Shopify & E-commerce</h1>
          </div>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I build Shopify experiences that go beyond simply getting a store online. I focus on the complete customer journey — from discovering a brand and exploring products to making a purchase and coming back again.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Shopify Capabilities
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 h-full"
              >
                <div className="relative rounded-lg bg-gray-900 p-4 sm:p-6 text-center flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 group-hover:bg-opacity-90 h-full">
                  <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base mb-2">{capability.name}</h3>
                    <p className="text-xs sm:text-sm text-green-300/80">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Customer Journey Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              I Don't Just Build Pages.
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
              I Build Customer Journeys.
            </h3>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {journeyStages.map((stage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 p-4 sm:p-6 transition-all duration-300 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stage.icon}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-green-400 mb-2 uppercase">{stage.stage}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 sm:p-8 text-center"
          >
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold text-green-400">Every design and development decision</span> is made with the customer journey in mind. A Shopify store isn't just a collection of pages — it's an experience that guides customers from curiosity to confidence to conversion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyDevelopment;

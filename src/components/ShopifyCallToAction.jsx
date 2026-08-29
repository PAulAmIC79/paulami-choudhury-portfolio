import React from 'react';
import { motion } from 'framer-motion';
import { SiShopify } from 'react-icons/si';
import { Link } from 'react-scroll';

const ShopifyCallToAction = () => {
  return (
    <section className="scroll-mt-20 mt-10 md:mt-16 md:pr-52 md:pl-52">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-teal-900/30 border border-green-500/30 p-8 sm:p-12 md:p-16"
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mb-6"
            >
              <SiShopify className="text-6xl sm:text-7xl text-green-400" />
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Have a Shopify Project in Mind?
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Let's build an experience your customers want to come back to.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Whether you're starting a new Shopify store, customizing an existing theme, or optimizing your customer journey, I'm ready to help you create an e-commerce experience that converts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 sm:px-12 py-4 text-base sm:text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center justify-center gap-2"
              >
                <SiShopify className="w-5 h-5 sm:w-6 sm:h-6" />
                Start a Shopify Project
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#shopify-projects"
                className="px-8 sm:px-12 py-4 text-base sm:text-lg bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10 border border-white/20 inline-flex items-center justify-center gap-2"
              >
                View Shopify Projects
              </motion.a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-green-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-2xl">
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">3</h4>
                <p className="text-gray-400 text-sm sm:text-base">Shopify Projects</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">8+</h4>
                <p className="text-gray-400 text-sm sm:text-base">Core Capabilities</p>
              </div>
              <div className="text-center">
                <h4 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">5</h4>
                <p className="text-gray-400 text-sm sm:text-base">Journey Stages</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopifyCallToAction;

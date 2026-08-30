import { motion } from 'framer-motion';
import { SiShopify } from 'react-icons/si';

/* eslint-disable react/prop-types */
const ShopifyProjectCard = ({ project, onSelect, itemVariants }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    onClick={() => onSelect(project.id)}
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 relative z-10">
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

      <div className="md:col-span-2 flex flex-col justify-between">
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

        <div className="space-y-4 sm:space-y-6">
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

          <div className="flex justify-end pt-2">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold text-sm sm:text-base"
            >
              Visit Website →
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ShopifyProjectCard;
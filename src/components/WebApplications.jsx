import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBrain, FaBuilding, FaTools, FaExternalLinkAlt } from 'react-icons/fa';

const badgeStyles = {
  'FULL-STACK PRODUCT': 'from-indigo-500 to-violet-600',
  'BUSINESS APPLICATION · SUMUKHAI CLIENT': 'from-teal-500 to-cyan-600',
  'INTERNAL BUSINESS APPLICATION': 'from-amber-500 to-orange-600',
  'IN DEVELOPMENT': 'from-gray-500 to-gray-600',
};

const cardBorderStyles = {
  'FULL-STACK PRODUCT': 'hover:border-indigo-500/50 hover:shadow-indigo-500/20',
  'BUSINESS APPLICATION · SUMUKHAI CLIENT': 'hover:border-teal-500/50 hover:shadow-teal-500/20',
  'INTERNAL BUSINESS APPLICATION': 'hover:border-amber-500/50 hover:shadow-amber-500/20',
  'IN DEVELOPMENT': 'border-dashed hover:border-gray-500/60 hover:shadow-gray-500/10',
};

const chipStyles = {
  'FULL-STACK PRODUCT': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  'BUSINESS APPLICATION · SUMUKHAI CLIENT': 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  'INTERNAL BUSINESS APPLICATION': 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  'IN DEVELOPMENT': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

const ctaTextStyles = {
  'FULL-STACK PRODUCT': 'text-indigo-400 hover:text-indigo-300',
  'BUSINESS APPLICATION · SUMUKHAI CLIENT': 'text-teal-400 hover:text-teal-300',
  'INTERNAL BUSINESS APPLICATION': 'text-amber-400 hover:text-amber-300',
  'IN DEVELOPMENT': 'text-gray-400',
};

const apps = [
  {
    id: 1,
    icon: <FaChartLine className="text-xl" />,
    label: 'FULL-STACK PRODUCT',
    title: 'Google Analytics Weekly Report',
    domain: 'app.sumukhai.io',
    what: 'An AI-powered analytics application that connects to Google Analytics 4 and transforms weekly website data into clear, plain-English insights.',
    who: 'Business owners and consultants who have GA4 installed but don\'t have time to read it',
    problem: 'GA4 is built for analysts, not founders — dense terminology and no sense of what actually matters that week',
    built: 'An end-to-end product: Google OAuth + GA4 Data API integration, an insight-generation engine, automated weekly reporting, billing/subscriptions and multi-business support',
    tech: ['Next.js 16', 'Supabase', 'Google Analytics Data API', 'PayPal + UPI billing', 'Vercel Cron'],
    cta: { label: 'View Live App', href: 'https://app.sumukhai.io' },
    note: 'Available through SumukhAI',
  },
  {
    id: 2,
    icon: <FaBrain className="text-xl" />,
    label: 'BUSINESS APPLICATION · SUMUKHAI CLIENT',
    title: 'Client Intelligence System',
    domain: 'clientintel.sumukhai.io',
    what: 'A client intelligence platform that gives coaches and consultants a continuously updated memory of their client relationships.',
    who: 'Coaches and consultants juggling many client relationships across scattered channels',
    problem: 'Client context lives across Gmail, Slack, calendar and WhatsApp, and none of it talks to the others',
    built: 'Multi-source capture, a two-stage AI extraction and merge pipeline, source-cited client memory, automated meeting-prep briefs and tenant-isolated authentication',
    tech: ['Next.js', 'Supabase (Postgres + RLS)', 'Claude Haiku 4.5 + Sonnet 5', 'Google & Slack OAuth'],
    cta: { label: 'View Project', href: 'https://clientintel.sumukhai.io' },
    note: 'Built for a SumukhAI client',
  },
  {
    id: 3,
    icon: <FaBuilding className="text-xl" />,
    label: 'INTERNAL BUSINESS APPLICATION',
    title: 'SumukhAI Client Portal',
    domain: 'client-portal.sumukhai.io',
    what: 'A production client-visibility and operations platform for a digital marketing agency, connecting internal project management with a client-facing portal.',
    who: 'A digital marketing agency and the clients whose projects it runs',
    problem: 'Agency projects were run across email threads, spreadsheets and calls, leaving clients guessing at status',
    built: 'A dual-role (admin/client) system covering milestones, services, payment history, client-visible updates, requirements, meetings, deliverables, documents and role-gated authentication',
    tech: ['Next.js 16', 'Prisma', 'PostgreSQL / Supabase', 'NextAuth v5'],
    cta: { label: 'View Case Study', href: '/case-studies/sumukhai-client-portal.html' },
    note: 'Internally used by SumukhAI for client operations and reporting',
  },
  {
    id: 4,
    icon: <FaTools className="text-xl" />,
    label: 'IN DEVELOPMENT',
    title: 'Indian DigiSeva',
    domain: 'in development',
    what: 'A digital assistance platform for Indian document and government-related application processes.',
    who: null,
    problem: null,
    built: 'Details of this project will be added here once it\'s further along — no features are listed yet to avoid overstating where the build currently stands.',
    tech: [],
    cta: null,
    note: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const WebApplications = () => {
  return (
    <section id="web-applications" className="scroll-mt-20 mt-10 md:pr-52 md:pl-52">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Web Applications</h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg mt-6 max-w-3xl mx-auto">
            Beyond websites and e-commerce, I build full-stack web applications that solve practical business
            problems — from analytics and client intelligence to internal operations and workflow management.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {apps.map((app) => (
            <motion.div
              key={app.id}
              variants={itemVariants}
              whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 transition-all duration-300 hover:shadow-xl flex flex-col ${cardBorderStyles[app.label]}`}
            >
              {/* mini browser-chrome bar so it reads as a software product, not a page */}
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 border-b border-gray-700/50 bg-black/20">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-gray-500 truncate">{app.domain}</span>
              </div>

              <div className="p-5 sm:p-7 flex flex-col flex-1">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${badgeStyles[app.label]} text-white`}>
                    {app.icon}
                    {app.label}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{app.what}</p>

                {(app.who || app.problem) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {app.who && (
                      <div>
                        <p className="text-[11px] uppercase text-gray-500 font-semibold tracking-wide mb-1">Who it's for</p>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{app.who}</p>
                      </div>
                    )}
                    {app.problem && (
                      <div>
                        <p className="text-[11px] uppercase text-gray-500 font-semibold tracking-wide mb-1">Problem it solves</p>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{app.problem}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-[11px] uppercase text-gray-500 font-semibold tracking-wide mb-1">What I built</p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{app.built}</p>
                </div>

                {app.tech.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {app.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full border ${chipStyles[app.label]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-2">
                  {app.note && (
                    <p className="text-[11px] sm:text-xs text-gray-500 italic mb-3">{app.note}</p>
                  )}
                  <div className="flex justify-end">
                    {app.cta ? (
                      <a
                        href={app.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 transition-colors duration-300 font-semibold text-sm sm:text-base ${ctaTextStyles[app.label]}`}
                      >
                        {app.cta.label} <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className={`text-sm sm:text-base font-semibold ${ctaTextStyles[app.label]}`}>
                        {app.label === 'IN DEVELOPMENT' ? 'Coming soon' : 'View Case Study →'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebApplications;

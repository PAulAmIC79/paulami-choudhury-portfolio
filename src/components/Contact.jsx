import React from "react";
import { FaPaperPlane, FaRedo, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
const Contact = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8ea21553-121b-4370-93a7-031914aea616");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert('Message has sent successfully');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      content: "paulamichoudhury12@gmail.com",
      link: "mailto:paulamichoudhury12@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 9475248161",
      link: "tel:+919475248161"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      content: "Cooch Behar, West Bengal, India",
      link: "#contact"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      link: "/"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      link: "/"
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: "Instagram",
      link: "/"
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      title: "FaceBook",
      link: "/"
    }
  ];

  return (
    <section id="contact" className="scroll-mt-20 mt-10 md:mt-16 md:pr-40 md:pl-40">
      <div className="container px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Wanna work together?</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">CONTACT ME</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl md:mb-6 font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6 flex-grow">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium md:text-lg text-white">{info.title}</h4>
                      <p className="text-sm md:text-m">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg md:text-2xl font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="p-3 bg-blue-600/20 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors duration-300"
                      title={social.title}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm h-full"
          >
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6 h-full flex flex-col">
              <motion.div variants={itemVariants} className="space-y-1.5 sm:space-y-2">
                <label className="block text-base sm:text-lg font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1.5 sm:space-y-2">
                <label className="block text-base sm:text-lg font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1.5 sm:space-y-2">
                <label className="block text-base sm:text-lg font-medium text-gray-300">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors duration-300 text-sm sm:text-base"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1.5 sm:space-y-2">
                <label className="block text-base sm:text-lg font-medium text-gray-300">Message</label>
                <textarea
                  name="comments"
                  rows="3"
                  required
                  placeholder="Enter your message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                ></textarea>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                >
                  <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Send Message
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={refreshPage}
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-sm sm:text-base"
                >
                  <FaRedo className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Reset Form
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
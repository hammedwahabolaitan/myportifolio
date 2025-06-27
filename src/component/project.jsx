import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const project = () => {
  const allProjects = [
    {
      title: 'Yusluv-Interior',
      description: 'yusluv interior and Design dynamic website',
      demoUrl: 'https://bd-parcel-management.web.app/',
      codeUrl: 'https://github.com/mahizaman490/assignment-12-client-side-',
      screenshot: '/image/Screenshot (164).png',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'LINE-GURU',
      description: 'Betting website built with React, Firebase, and Tailwind CSS..',
      demoUrl: 'https://multikart-kappa.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/multikart',
      screenshot: '/image/Screenshot (161).png',
      tech: ['React', 'Firebase', "Tailwind CSS", 'Framer Motion'],
    },

    {
      title: 'MULTIKART',
      description: 'Full-Stack E-commerce website built with React, Node, Firebase, and Tailwind CSS..',
      demoUrl: 'https://multikart-kappa.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/multikart',
      screenshot: 'https://i.ibb.co/tPPQHQ39/Screenshot-155.png',
      tech: ['React',"NODE","mysql", 'Firebase', "Tailwind CSS"],
    },
    {
      title: 'WAB-VTU',
      description: 'Top-Up website built with React, Firebase, and Tailwind CSS..',
      demoUrl: 'https://multikart-kappa.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/multikart',
      screenshot: '/image/Screenshot (168).png',
      tech: ['React', 'Firebase', "Tailwind CSS", 'Framer Motion'],
    },
    {
      title: 'Gardenia Gift Store',
      description: ' Gift Store built with react.',
      demoUrl: 'https://gardenia-react-six.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/Gardenia-React',
      screenshot: '/image/Screenshot (184).png',
      tech: ['React', 'Firebase', "Tailwind CSS",],
    },

  {
      title: 'Technology & Electronics',
      description: 'CRUD dashboard for product management and user control.',
      demoUrl: 'https://technology-and-electroni-c64c7.web.app/',
      screenshot: 'https://i.ibb.co/x3tLvjr/Technology-and-Electronics.png',
      tech: ['React', 'Firebase', 'Context API'],
    },
    {
      title: 'UPWORK-CLONE',
      description: 'Upwork-copy full-stack app with custom menus,and secure login.',
      demoUrl: 'https://upworkclone.vercel.app/',
      screenshot: '/image/Screenshot (173).png',
      tech: ['React', 'Firebase',"Node","Mysql",'Tailwind CSS'],
    },
    {
      title: 'Flavor Fusion Palace',
      description: 'Restaurant app with custom menus, cart, and secure login.',
      demoUrl: 'https://flavor-fusion-palace.web.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/upwork-clone',
      screenshot: 'https://i.ibb.co/rts5tzG/Flavour-Fusion-Home.png',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
    },

    {
      title: 'Training-Studio',
      description: 'LandingPage GYM Web-App',
      demoUrl: 'https://training-studio-kohl.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/training-studio',
      screenshot: '/image/Screenshot (78).png',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'WabRace',
      description: 'LANDINGPAGE BUILT WITH FRONT-END',
      demoUrl: 'https://wabrace.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/wabrace.git',
      screenshot: '/image/Screenshot (82).png',
      tech: ['React','JavaScript',"Tailwind Css"]
    },

    {
      title: 'w3-blog',
      description: 'This is a single blog  page built with html,and css',
      demoUrl: 'https://w3-blog-smoky.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/w3-blog',
      screenshot: '/image/Screenshot (79).png',
      tech: ['HTML','CSS',"JAVASCRIPT"]
    },

    {
      title: 'My-Blog',
      description: 'This is a dynamic blog page work with back-end built with JavaScript,React,Tailwind CSS, and Node.js',
      demoUrl: 'https://blog-pied-tau.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/blog',
      screenshot: '/image/blog.webp',
      tech: ['HTML','CSS',"JAVASCRIPT","React"]
    },

    {
      title: 'Age_Calculator',
      description: 'This is 3 in one age calculator first task from CodeAlpha for siwes',
      demoUrl: 'https://age-calculator-beta-ten.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/Age_calculator',
      screenshot: '/image/age_calculator.png',
      tech: ['HTML','CSS',"JAVASCRIPT"]
    },
    
    {
      title: 'Calculator',
      description: 'This Calculator  built with Html ,Css, and Javascript',
      demoUrl: 'https://calculator-sand-eta.vercel.app/',
      codeUrl: 'https://github.com/hammedwahabolaitan/calculator.git',
      screenshot: '/image/Screenshot (88).png',
      tech: ['HTML','CSS',"JAVASCRIPT"]
    },
    {
      title: 'DevConnect',
      description: 'A platform where developers showcase their portfolios.',
      demoUrl: 'https://devconnect.vercel.app',
      codeUrl: 'https://github.com/hammedwahabolaitan/DevConnect',
      screenshot: '/image/devconnect.png',
      tech: ["React", "Firebase", "Tailwind CSS"],
    },

  ];

  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(filter));

  const techTags = ['All', 'React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'Context API'];
 const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};


  return (
    <section id='projects' className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Tech Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === tag
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Slider */}
        {filteredProjects.length > 0 ? (
          <Slider {...sliderSettings}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4"
              >
                <motion.div
                  whileHover={{ backgroundColor: '#1e293b' }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full"
                >
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="rounded-md mb-4 h-48 object-cover w-full"
                  />
                  <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-xs px-2 py-1 rounded text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm text-white"
                    >
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-400">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
};

export default project;

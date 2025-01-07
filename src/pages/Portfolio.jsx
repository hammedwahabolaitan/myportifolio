import React from 'react';
import ProjectCard from './ProjectCard';
import Header from '../component/Header';
import Footers from './Footers';

const projects = [
  {
    image: '/image/Screenshot (78).png',
    title: 'traing-studio',
    description: 'This is a web-App built with html,css,and JavaScript',
    technologies: ['html', 'css', 'JavaScript'],
    liveLink: 'https://training-studio-kohl.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/training-studio',
  },
  {
    image: '/image/Screenshot (82).png',
    title: 'wabrace',
    description: 'This is a web-App built with React, JavaScript, and Tailwind',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    liveLink: 'https://wabrace.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/wabrace.git',
  },
 
  {
    image: '/image/Screenshot (79).png',
    title: 'w3-blog',
    description: 'this is blog single page built with html,and css',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://w3-blog-smoky.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/w3-blog',
  },

  {
    image: '/image/Screenshot (88).png',
    title: 'my calculator',
    description: 'this calculator  built with html ,css, and javascript',
    technologies: ['HTML', 'CSS','javascript' ],
    liveLink: 'https://calculator-sand-eta.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/calculator.git',
  },

  {
    image: '/image/Screenshot (87).png',
    title: 'ozun',
    description: 'this is ozun single page built with html,and css',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://ozun.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/ozun.git',
  },

  {
    image: '/image/Screenshot (92).png',
    title: 'my blog',
    description: 'This is a dynamic blog page work with back-end built with html,css,and JavaScript && react frame work',
    technologies: ['html', 'css', 'JavaScript', 'react'],
    liveLink: 'https://blog-pied-tau.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/blog',
  },
  // Add other projects here
];
const portfolio = () => {
  return (
    <div>
        <Header />
      <section id="portfolio" className="px-[4%] my-20 text-center bg-slate-00">
      <h1 className="auto-type lg:text-[50px] font-[500] pb-4 drop-shadow  max-sm:text-[40px] md:text-[50px] text-center font-serif">
        My Portfolio
      </h1>
      <p className="leading-relax lg:text-[20px] text-[20px] opacity-50 text-center md:text-[25px]">
        Projects I have worked on thus far demonstrating my developer skills and capabilities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    
    </section>
 <Footers />
    </div>
  );
};

export default portfolio;

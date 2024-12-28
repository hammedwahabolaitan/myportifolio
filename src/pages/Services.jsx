import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: 'src/assets/img/Screenshot (78).png',
    title: 'traing-studio',
    description: 'This is a web-App built with html,css,and JavaScript',
    technologies: ['html', 'css', 'JavaScript'],
    liveLink: 'https://training-studio-kohl.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/training-studio',
  },
  {
    image: 'src/assets/img/Screenshot (82).png',
    title: 'wabrace',
    description: 'This is a web-App built with React, JavaScript, and Tailwind',
    technologies: ['React', 'JavaScript', 'Tailwind'],
    liveLink: 'https://wabrace.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/wabrace.git',
  },
 
  {
    image: 'src/assets/img/Screenshot (79).png',
    title: 'w3-blog',
    description: 'this is blog single page built with html,and css',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://w3-blog-smoky.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/w3-blog',
  },
  // Add other projects here
];

const Services = () => {
  return (
    <div>
      <section id="Services" className="px-[4%] py-[3%] text-center bg-slate-200">
      <h1 className="auto-type lg:text-[50px] font-[500] pb-4 drop-shadow  max-sm:text-[40px] md:text-[50px] text-center font-serif">
        My Work
      </h1>
      <p className="leading-relax lg:text-[20px] text-[20px] text-[#3c406883] text-center md:text-[25px]">
        Projects I have worked on thus far demonstrating my developer skills and capabilities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    <div className='cursor-pointer mt-10 text-red-700 uppercase text-2xl'>
      <a href="/portfolio"> 
      view more
      </a>
    </div>
    </section>
    </div>
  );
};

export default Services;

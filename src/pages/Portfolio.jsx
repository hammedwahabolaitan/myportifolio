import React from 'react';
import ProjectCard from './ProjectCard';
import Header from '../component/Header';

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

  {
    image: 'src/assets/img/Screenshot (88).png',
    title: 'my calculator',
    description: 'this calculator  built with html ,css, and javascript',
    technologies: ['HTML', 'CSS','javascript' ],
    liveLink: 'https://calculator-sand-eta.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/calculator.git',
  },

  {
    image: 'src/assets/img/Screenshot (87).png',
    title: 'ozun',
    description: 'this is ozun single page built with html,and css',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://ozun.vercel.app/',
    codeLink: 'https://github.com/hammedwahabolaitan/ozun.git',
  },

  {
    image: 'src/assets/img/Screenshot (92).png',
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
      <p className="leading-relax lg:text-[20px] text-[20px] text-[#3c406883] text-center md:text-[25px]">
        Projects I have worked on thus far demonstrating my developer skills and capabilities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    
    </section>
    <footer id="footer" className="footer bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="footer-menu mb-8">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <div className="navbar-header">
            <a className="navbar-brand text-2xl font-bold" href="index.html">
              WAB<span className="text-red-500">TECH</span>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-3/4 ">
          <ul className="footer-menu-item flex flex-wrap gap-4 text-lg">
            <li><a href="#" className="hover:text-blue-500">HOME</a></li>
            <li><a href="#" className="hover:text-blue-500">ABOUT</a></li>
            <li><a href="#" className="hover:text-blue-500">REVIEW</a></li>
            <li><a href="#" className="hover:text-blue-500">BLOG</a></li>
            <li><a href="#" className="hover:text-blue-500">CONTANCT</a></li>
            <li><a href="#" className="hover:text-blue-500">PORTFOLIO</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='border-gray-600 border-b-2 my-10'></div>
    <div className="hm-footer-copyright">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <p className="text-sm">
            ©copyright. Designed and developed by <a href="wabtech.wegic.app" className="text-blue-400 hover:underline">WABTECH</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
          <span className="mr-4 text-sm"><i className="pi pi-phone"></i> +2348107450970</span>
          <div className="footer-social flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-facebook"></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-twitter pi-spin "></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-linkedin"></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-google-plus"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="scroll-Top" className="fixed bottom-4 right-4">
    <div className="return-to-top bg-red-600 hover:bg-gray-700 rounded-full p-3 cursor-pointer">
      <a href="#"><i className="pi pi-angle-up text-[#141111]" id="scroll-top" aria-hidden="true" title="Back to Top"></i></a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default portfolio;

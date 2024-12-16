import React from 'react';

const ProjectCard = ({ project }) => {
  const { image, title, description, technologies, liveLink, codeLink } = project;

  return (
    <div className="work border-2 border-[#bbb5b5] shadow w-full h-auto pb-5 cursor-pointer">
      <img src={image} alt={title} className="h-[35vh] w-full object-cover " />
      <div className="text-center px-4">
        <h2 className="text-base leading-loose pt-3 pb-2 drop-shadow uppercase text-green-400">{title}</h2>
        <p className="leading-loose text-[13px] pb-2 text-blue-700">{description}</p>
        <div className="flex gap-4 items-center justify-center">
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="cursor-pointer border-2 border-gray-900 hover:bg-[#ff004f] py-1 px-3 rounded-lg text-[11px] uppercase"
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="flex justify-center pt-3 gap-4 ">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] underline text-gray-400 hover:text-orange-500"
          >
            <i className="fa-solid fa-link"></i> Live Preview
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] underline text-gray-400 hover:text-orange-500"
          >
            <i className="fa-brands fa-github"></i> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

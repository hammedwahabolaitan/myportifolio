import { motion } from "framer-motion";
import projects from "../data/Projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          My Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>

              <div className="mt-4 flex justify-center space-x-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                  Live
                </motion.a>
                <motion.a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
                >
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

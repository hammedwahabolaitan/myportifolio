import { motion } from "framer-motion";
import profileImg from "/image/ohwcar.jpg"; // Add your image here


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500 text-4xl" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
];


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={profileImg}
            alt="Olaitan"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right - Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-400">
            I'm Olaitan, a passionate <span className="text-blue-500">Full-Stack Web Developer</span> with experience in React, Node.js, and MySQL.
            I love building dynamic, responsive, and high-performance web applications.
          </p>

          <p className="mt-4 text-gray-400">
            My goal is to create seamless and user-friendly digital experiences while continuously learning and improving my skills.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 container mx-auto px-6 text-center"
      >
        <h3 className="text-3xl font-bold">My Tech Stack</h3>
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

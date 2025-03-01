import { motion } from "framer-motion";
import heroVideo from "/image/hero-bg.mp4"; // Add your video here

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Olaitan</span>
        </h1>
        <p className="mt-4 text-lg">Full-Stack Web Developer | React & Node.js</p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Let's Work Together
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

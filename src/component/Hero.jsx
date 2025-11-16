import { motion } from "framer-motion";
import heroVideo from "/image/hero-bg.mp4"; // Add your video here

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">

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
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Hammed Wahab</span>
        </h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           <h3> Full-Stack Developer</h3>
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building fast, scalable, and user-focused web apps with React, Next.js, and Node.js
          </motion.p>
        <motion.a
          href="https://wa.link/3qn25y"
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import { ToastContainer } from "react-toastify";
import Contact from "./component/Contact";
import About from "./component/About";
import Resume from "./component/Resume";
import Reviews from "./component/Reviews";
import Footer from "./component/Footer";
import Modal from "./component/Modal";
import { Helmet } from 'react-helmet';
import Project from "./component/project";



function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <Helmet>
  <title>portifolio- Hammed Wahab Olaitan</title>
  <meta name="description" content="Explore full-stack projects built with React, Node.js, MySQL, and Firebase." />
</Helmet>
      <Hero />
      <About />     
      <Resume />
      <Project />
      <Reviews />
      <Contact />
      <Modal />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;

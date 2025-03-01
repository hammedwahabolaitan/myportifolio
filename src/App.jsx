import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import { ToastContainer } from "react-toastify";
import Contact from "./component/Contact";
import About from "./component/About";
import Resume from "./component/Resume";
import Reviews from "./component/Reviews";
import Footer from "./component/Footer";

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
      <Hero />
      <About />     
      <Resume />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;

import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-gray-400">© {new Date().getFullYear()} Wabtech | All Rights Reserved</p>
      
      {/* Social Media Icons */}
      <div className="flex justify-center mt-4 space-x-6">
        <a href="https://www.linkedin.com/in/hammed-wahab-olaitan-999153317" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/hammedwahabolaitan" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-500 transition" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-600 transition" />
        </a>
        <a href="https://x.com/Hammedwaha18544" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://wa.link/3qn25y" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

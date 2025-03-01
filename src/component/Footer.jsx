import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-gray-400">© {new Date().getFullYear()} Olaitan | All Rights Reserved</p>
      
      {/* Social Media Icons */}
      <div className="flex justify-center mt-4 space-x-6">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-500 transition" />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-600 transition" />
        </a>
        <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

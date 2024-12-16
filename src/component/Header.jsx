import React, { useState } from 'react';
import { FaBars, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Icons from react-icons

// menu items 
const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Review",
    link: "#reviews",
  },
  {
    name: "Portfolio",
    link: "/Portfolio",
  },
  {
    name: "Account",
    link: "/",
  },
  {
    name: "Blog",
    link: "/Blog",
  },
  {
    name: "contact",
    link: "/Contact",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header id="sticky" className="fixed top-0 right-0 left-0 bg-[#adabab] shadow-lg z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Hamburger Icon */}
            <div className="flex items-center">
              <button
                className="text-gray-600 hover:text-black md:hidden"
                onClick={toggleMobileMenu}
              >
                <FaBars size={23} />
              </button>
              <a href="/" className="ml-4">
                {/* Logo */}
                {/* <img src="src/assets/img/Screenshot (57)1.png" alt="" className='h-7' /> */}
                <h1 className="uppercase text-3xl text-blue-700 font-serif">
                  wab<span className="text-red-700">tech</span>
                </h1>
              </a>
            </div>

            {/* Main Navigation */}
            <nav
              className={`${
                isMobileMenuOpen ? 'block' : 'hidden'
              } md:flex space-x-6 uppercase`}
            >
              <ul className="md:flex items-center space-x-4">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a href={item.link} className="hover:underline">
                      {item.name}
                    </a>
                    {item.subMenu && item.subMenu.length > 0 && (
                      <ul className="absolute left-0 mt-2 hidden bg-white shadow-lg group-hover:block z-50">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={22} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={22} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <FaWhatsapp size={22} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="space-y-2 uppercase">
              {menuItems.map((item, index) => (
                <li key={index} className="group">
                  <a href={item.link} className="block py-2 px-4 hover:bg-gray-100">
                    {item.name}
                  </a>
                  {/* Display submenus in mobile view as well */}
                  {item.subMenu && item.subMenu.length > 0 && (
                    <ul className="pl-4">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-2 hover:bg-gray-100">
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      title: "Women Fashion",
      subtitle: "Welcome to Fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/woman fashion 2.jpeg", // Update to the correct image path
    },
    {
      title: "Men Fashion",
      subtitle: "Welcome to Fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/man fashion.webp", // Update to the correct image path
    },
    {
      title: "Women Fashion",
      subtitle: "Welcome to Fashion",
      href: "/left-sidebar/collection",
      image: "src/assets/img/woman fashion 3.avif", // Update to the correct image path
    },
  ];

  return (
    <section className="p-0 mb">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className={`home ${index % 2 === 0 ? 'home2' : 'home1'} text-center bg-gray-200 py-10 h-[80vh]`}>
              {slide.image && (
                <img src={slide.image} alt={slide.title} className="w-full object-cover absolute top-0 left-0 l" />
              )}
              <div className="container mx-auto flex justify-start mt-24">
                <div className="flex justify-center relative">
                  <div className="slider-contain bg-opacity-50 p-4 rounded-lg">
                    <h4 className="text-lg text-gray-600">{slide.subtitle}</h4>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2 uppercase">{slide.title}</h1>
                    <a
                      className="btn btn-solid mt-4 inline-block bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
                      href={slide.href}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow bg-black text-white p-3 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#8250;
    </button>
  );
};

// Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow bg-black text-white p-3 rounded-full absolute left-4 top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#8249;
    </button>
  );
};

export default Hero;
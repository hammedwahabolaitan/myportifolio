import React from 'react';
import Slider from "react-slick"; // Assuming you're using react-slick for the carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SpecialProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h4 className="text-lg uppercase">Our Collection</h4>
          <h2 className="text-2xl font-bold">Special Products</h2>
          <div className="w-16 h-1 bg-gray-400 mx-auto mt-2"></div>
        </div>

        <Slider {...settings} className="relative">
          {/* Blog Post 1 */}
          <div className="px-4">
            <a href="/blogs/blog_detail" className="block">
              <div className="overflow-hidden rounded-md">
                <img src="/src/assets/img/5(1).jpg" alt="Blog" className="w-full object-cover" />
                <span className="block"></span>
              </div>
            </a>
            <div className="mt-4 text-center">
              <h4 className="text-sm">25 January 2018</h4>
              <a href="/blogs/blog_detail" className="block text-base text-gray-800">Lorem ipsum dolor sit consectetur adipiscing elit</a>
              <hr className="my-4 border-t border-gray-300" />
              <h6 className="text-sm text-gray-600">by: John Dio, 2 Comments</h6>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="px-4">
            <a href="/blogs/blog_detail" className="block">
              <div className="overflow-hidden rounded-md">
                <img src="src/assets/img/3(1).jpg" alt="Blog" className="w-full object-cover hover:bg-" />
                <span className="block"></span>
              </div>
            </a>
            <div className="mt-4 text-center">
              <h4 className="text-sm">26 January 2018</h4>
              <a href="/blogs/blog_detail" className="block text-base text-gray-800">Lorem ipsum dolor sit consectetur adipiscing elit</a>
              <hr className="my-4 border-t border-gray-300" />
              <h6 className="text-sm text-gray-600">by: John Dio, 2 Comments</h6>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="px-4">
            <a href="/blogs/blog_detail" className="block">
              <div className="overflow-hidden rounded-md">
                <img src="src/assets/img/4(1).jpg" alt="Blog" className="w-full object-cover" />
                <span className="block"></span>
              </div>
            </a>
            <div className="mt-4 text-center">
              <h4 className="text-sm">29 January 2018</h4>
              <a href="/blogs/blog_detail" className="block text-base text-gray-800">Lorem ipsum dolor sit consectetur adipiscing elit</a>
              <hr className="my-4 border-t border-gray-300" />
              <h6 className="text-sm text-gray-600">by: John Dio, 2 Comments</h6>
            </div>
          </div>

          {/* Additional Blog Posts */}
          {/* Repeat similar structure for the rest of the posts */}
        </Slider>
      </div>
    </section>
  );
}

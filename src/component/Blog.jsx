import React from 'react';
import Header from './Header';
import FaqSection from './Faq';
import Footers from '../pages/Footers';

export default function BlogSection() {
  return (

    <div>
      <Header />

    <section className="my-28 blog-page">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Sidebar */}
          <div className="w-full xl:w-1/4 lg:w-1/3 md:w-2/5">
            <div className="space-y-8">
              {/* Recent Blog */}
              <div className="bg-gray-800 p-4 rounded-md">
                <h4 className="text-white text-lg font-bold mb-4">Recent Blog</h4>
                <ul className="space-y-4">
                  {recentBlogs.map((blog, index) => (
                    <li key={index} className="flex">
                      <img
                        className="w- h-20 object-cover rounded-md mr-4"
                        src={blog.imgSrc}
                        alt="Blog"
                      />
                      <div className="flex flex-col justify-center">
                        <h6 className="text-gray-400 text-sm">{blog.date}</h6>
                        <p className="text-gray-400 text-xs">{blog.hits} hits</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Blog */}
              <div className="bg-gray-800 p-4 rounded-md">
                <h4 className="text-white text-lg font-bold mb-4">Popular Blog</h4>
                <ul className="space-y-6">
                  {popularBlogs.map((blog, index) => (
                    <li key={index}>
                      <div className="flex items-center mb-2">
                        <div className="bg-gray-700 text-white p-2 rounded-md text-center">
                          <span className="block text-lg font-bold">{blog.day}</span>
                          <span className="block text-xs">{blog.month}</span>
                        </div>
                        <div className="ml-4">
                          <h6 className="text-gray-300">{blog.title}</h6>
                          <p className="text-gray-400 text-xs">{blog.hits} hits</p>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm">{blog.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="w-full xl:w-3/4 lg:w-2/3 md:w-3/5">
            {blogs.map((blog, index) => (
              <div key={index} className="flex flex-wrap mb-5">
                <div className="w-full xl:w-1/2">
                  <a href="blog">
                    <img
                      src={blog.imgSrc}
                      alt=""
                      className="w- h-[50vh] object-cover rounded-md"
                    />
                  </a>
                </div>
                <div className="w-full xl:w-1/2 p-0 flex flex-col justify-center">
                  <h6 className="text-gray-400 text-sm mb-2">{blog.date}</h6>
                  <a href="#blog">
                    <h4 className="text-white text-xl font-bold mb-2">{blog.title}</h4>
                  </a>
                  <ul className="flex space-x-4 text-gray-400 text-sm mb-4">
                    <li>Posted By: {blog.author}</li>
                    <li><i className="pi pi-heart text-blue-500"></i> {blog.hits} Hits</li>
                    <li><i className="pi pi-comments text-red-500 "></i> {blog.comments} Comments</li>
                  </ul>
                  <p className="text-gray-400">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>

    <FaqSection />



 <Footers />
    </div>
  );
}

// Dummy data for blogs
const recentBlogs = [
  { imgSrc: '/image/IMG_20220320_132656~2.jpg', date: '25 January 2018', hits: 0 },
  { imgSrc: '/image/IMG_20220320_132656~2.jpg', date: '26 January 2018', hits: 4 },
  { imgSrc: '/image/wab.jpg', date: '29 January 2018', hits: 0 },
  { imgSrc: '/image/wab.jpg', date: '29 January 2018', hits: 6},
  { imgSrc: '/image/IMG_20211220_075331.jpg', date: '29 January 2018', hits: 7 },
  { imgSrc: '/image/IMG_20211220_075331.jpg', date: '29 January 2018', hits: 4 },
];

const popularBlogs = [
  { day: '03', month: 'May', title: 'Injected humour the like', hits: 6, description: 'It looks like readable English...' },
  { day: '06', month: 'May', title: 'Injected humour the like', hits: 6, description: 'It looks like readable English...' },
  { day: '06', month: 'May', title: 'Injected humour the like', hits: 6, description: 'It looks like readable English...' },
];

const blogs = [
  { imgSrc: '/image/IMG_20220320_132656~2.jpg', date: '26 January 2018', title: 'Denouncing pleasure and praising pain', author: 'Admin Admin', hits: 5, comments: 10, description: 'Consequences that are extremely painful...' },
  { imgSrc: '/image/wab.jpg', date: '25 January 2018', title: 'Denouncing pleasure and praising pain', author: 'Admin Admin', hits: 5, comments: 10, description: 'Consequences that are extremely painful...' },
  { imgSrc: '/image/IMG_20211220_075331.jpg', date: '29 January 2018', title: 'Denouncing pleasure and praising pain', author: 'Admin Admin', hits: 5, comments: 10, description: 'Consequences that are extremely painful...' },
];

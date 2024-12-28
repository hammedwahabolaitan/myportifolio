import React from 'react';
import Header from './Header';
import FaqSection from './Faq';

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



    <footer id="footer" className="footer bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="footer-menu mb-8">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <div className="navbar-header">
            <a className="navbar-brand text-2xl font-bold" href="index.html">
              WAB<span className="text-red-500">TECH</span>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-3/4 ">
          <ul className="footer-menu-item flex flex-wrap gap-4 text-lg">
            <li><a href="#" className="hover:text-blue-500">HOME</a></li>
            <li><a href="#" className="hover:text-blue-500">ABOUT</a></li>
            <li><a href="#" className="hover:text-blue-500">REVIEW</a></li>
            <li><a href="#" className="hover:text-blue-500">BLOG</a></li>
            <li><a href="#" className="hover:text-blue-500">CONTANCT</a></li>
            <li><a href="#" className="hover:text-blue-500">PORTFOLIO</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='border-gray-600 border-b-2 my-10'></div>
    <div className="hm-footer-copyright">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <p className="text-sm">
            ©copyright. Designed and developed by <a href="wabtech.wegic.app" className="text-blue-400 hover:underline">WABTECH</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center">
          <span className="mr-4 text-sm"><i className="pi pi-phone"></i> +2348107450970</span>
          <div className="footer-social flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-facebook"></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-twitter pi-spin "></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-linkedin"></i></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><i className="pi pi-google-plus"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="scroll-Top" className="fixed bottom-4 right-4">
    <div className="return-to-top bg-red-600 hover:bg-gray-700 rounded-full p-3 cursor-pointer">
      <a href="#"><i className="pi pi-angle-up text-[#141111]" id="scroll-top" aria-hidden="true" title="Back to Top"></i></a>
    </div>
  </div>
</footer>
    </div>
  );
}

// Dummy data for blogs
const recentBlogs = [
  { imgSrc: 'src/assets/img/IMG_20220320_132656~2.jpg', date: '25 January 2018', hits: 0 },
  { imgSrc: 'src/assets/img/IMG_20220320_132656~2.jpg', date: '26 January 2018', hits: 4 },
  { imgSrc: 'src/assets/img/wab.jpg', date: '29 January 2018', hits: 0 },
  { imgSrc: 'src/assets/img/wab.jpg', date: '29 January 2018', hits: 6},
  { imgSrc: 'src/assets/img/IMG_20211220_075331.jpg', date: '29 January 2018', hits: 7 },
  { imgSrc: 'src/assets/img/IMG_20211220_075331.jpg', date: '29 January 2018', hits: 4 },
];

const popularBlogs = [
  { day: '03', month: 'May', title: 'Injected humour the like', hits: 6, description: 'It looks like readable English...' },
  { day: '06', month: 'May', title: 'Injected humour the like', hits: 6, description: 'It looks like readable English...' },
  { day: '06', month: 'May', title: 'Injected humour the like', hits: 6, description: 'It looks like readable English...' },
];

const blogs = [
  { imgSrc: 'src/assets/img/IMG_20220320_132656~2.jpg', date: '26 January 2018', title: 'Denouncing pleasure and praising pain', author: 'Admin Admin', hits: 5, comments: 10, description: 'Consequences that are extremely painful...' },
  { imgSrc: 'src/assets/img/wab.jpg', date: '25 January 2018', title: 'Denouncing pleasure and praising pain', author: 'Admin Admin', hits: 5, comments: 10, description: 'Consequences that are extremely painful...' },
  { imgSrc: 'src/assets/img/IMG_20211220_075331.jpg', date: '29 January 2018', title: 'Denouncing pleasure and praising pain', author: 'Admin Admin', hits: 5, comments: 10, description: 'Consequences that are extremely painful...' },
];

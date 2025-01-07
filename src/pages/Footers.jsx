import React from 'react'

export default function Footers() {
  return (
   <div>
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
            <li><a href="/blog" className="hover:text-blue-500">BLOG</a></li>
            <li><a href="/contact" className="hover:text-blue-500">CONTANCT</a></li>
            <li><a href="/portfolio" className="hover:text-blue-500">PORTFOLIO</a></li>
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
    <div className="return-to-top bg-red-600 hover:bg-gray-700 rounded-full p-4 cursor-pointer">
      <a href="https://wa.link/3qn25y"><i className="pi pi-whatsapp text-[#141111]" id="scroll-top" aria-hidden="true" title="Back to Top"></i></a>
    </div>
  </div>
</footer>
   </div>
  )
}

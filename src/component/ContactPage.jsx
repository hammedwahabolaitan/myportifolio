import React from 'react';

const ContactPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Contact</h2>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-gray-900">Home</a>
                </li>
                <li className="text-gray-500">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between mb-8">
            {/* Google Map */}
            <div className="w-full lg:w-7/12 h-80">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m/14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
                allowFullScreen=""
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-5/12 space-y-6">
              <ul className="space-y-6">
                <li className="flex space-x-4 items-start">
                  <div className="text-blue-500 text-2xl">
                    <i className="pi pi-phone" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Contact us</h6>
                    <a href="https://wa.link/3qn25y">
                    <p>+2349050220726</p>
                    <p>https://wa.link/3qn25y</p>
                    
                    </a>
                  </div>
                </li>
                <li className="flex space-x-4 items-start">
                  <div className="text-blue-500 text-2xl">
                    <i className="pi pi-map-marker" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Address</h6>
                    <p>iyanan church iwo road ibadan</p>
                    <p>oyo state nigeria</p>
                  </div>
                </li>
                <li className="flex space-x-4 items-start">
                  <div className="text-blue-500 text-2xl">
                    <i className="pi pi-envelope" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Email</h6>
                    <a href="olaitanwahabhammed@gmail.com">
                    <p>olaitanwahabhammed@gmail.com</p>
                    <p>olaitanwahabhammed@gmail.com</p>

                    </a>
                  </div>
                </li>
                <li className="flex space-x-4 items-start">
                  <div className="text-blue-500 text-2xl">
                    <i className="pi pi-fax" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">Fax</h6>
                    <a href="olaitanwahabhammed@gmail.com">
                    <p>olaitanwahabhammed@gmail.com</p>
                    <p>olaitanwahabhammed@gmail.com</p>

                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fname" className="block text-gray-700">First Name</label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-gray-700">Last Name</label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter Your Number"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Write Your Message</label>
                <textarea
                  id="message"
                  placeholder="Write Your Message"
                  rows="6"
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
              <div>
                <a href="https://wa.link/3qn25y"><button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Send Your Message
                </button></a>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ContactPage;

import React from 'react';

const LoginPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Login</h2>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-gray-900">Home</a>
                </li>
                <li className="text-gray-500">Login</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Login Form */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-6">Login</h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border rounded-md"
                      defaultValue="test@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-md"
                      defaultValue="test123"
                    />
                  </div>
                  <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block text-center">Login</a>
                </form>

                {/* Social Login */}
                <div className="mt-6">
                  <ul className="flex space-x-4">
                    <li>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook text-blue-600 text-2xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-google-plus text-red-500 text-2xl"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* New Customer Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">New Customer</h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h6 className="text-lg font-semibold mb-2">Create An Account</h6>
                <p className="mb-4">
                  Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping, click register.
                </p>
                <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-md inline-block text-center">Create an Account</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

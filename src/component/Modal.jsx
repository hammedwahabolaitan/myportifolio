import React, { useEffect, useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Close modal function
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Optional: Set up logic to show the modal when the page first loads
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-900 hover:text-gray-700"
              aria-label="Close"
            >
              ✖
            </button>
            <div className="text-center">
              <img
                src="/image/wabtechlogo1.jpg"
                alt="Offer Banner"
                className="mx-auto mb-4 w-full"
              />
              <h2 className="text-2xl font-bold mb-4 uppercase ">Newsletter</h2>
              <form
                action="https://"
                method="post"
                target="_blank"
                className="needs-validation"
              >
                <div className="flex justify-center items-center">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Enter your email"
                    required
                    className="border border-gray-300 p-2 rounded-l-md w-full max-w-xs"
                  />
                  
                  <button
                    type="submit"
                    id="mc-submit"
                    className="bg-secondary border border-red-200 py-2 px-4 rounded-r-md hover:bg-gray-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

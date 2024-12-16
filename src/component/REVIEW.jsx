import React, { useRef, useEffect } from 'react';

export default function Review() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const scrollAmount = 1; // Adjust the scroll speed
    const intervalTime = 30; // Adjust the interval time

    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 100, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      <section id="reviews" className="reviews py-16 bg-gray-100">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Clients Reviews</h2>
          <p className="text-gray-600">What our clients say about us</p>
        </div>

        <div className="reviews-content max-w-5xl mx-auto">
          <div className="testimonial-carousel flex space-x-4 overflow-x-scroll no-scrollbar" ref={carouselRef}>
            {/* Testimonial 1 */}

            
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional testimonials */}
            {/* You can repeat the Testimonial box here, as shown in your initial code */}

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>


            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-testimonial-box bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-1/3">
              <div className="testimonial-description">
                <div className="testimonial-info flex items-center mb-4">
                  <div className="testimonial-img w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src="src/assets/img/wab.jpg" className="w-full h-full object-cover" alt="Client" />
                  </div>
                  <div className="testimonial-person">
                    <h2 className="text-xl font-semibold text-gray-800">Tom Leakar</h2>
                    <h4 className="text-gray-500">London, UK</h4>
                    <div className="testimonial-person-star flex mt-2">
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                      <i className="pi pi-star text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-comment">
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      
 


    </div>
  );
}



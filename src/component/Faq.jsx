import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqData = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question:
        "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      question:
        "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
    },
    {
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      question:
        "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      answer:
        "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
    },
  ];

  return (
    <section id="faq" className="faq section py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-1 lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <div className="content px-4 lg:px-8">
              <h3 className="text-2xl font-semibold">
                <span>Frequently Asked </span>
                <strong>Questions</strong>
              </h3>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.
              </p>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-container space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item p-4 border rounded-lg ${activeIndex === index ? "bg-gray-100" : "bg-white"
                    }`}
                >
                  <h3
                    className="text-lg font-medium flex justify-between cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>
                      <span className="num mr-2 font-bold">{index + 1}.</span> {faq.question}
                    </span>
                    <i
                      className={`faq-toggle bi ${activeIndex === index ? "bi-chevron-up" : "bi-chevron-right"
                        }`}
                    />
                  </h3>
                  {activeIndex === index && (
                    <div className="faq-content mt-2">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

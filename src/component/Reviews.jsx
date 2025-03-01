import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Doe",
    feedback: "Olaitan is an exceptional developer! The project was delivered on time with outstanding quality.",
    company: "Tech Solutions Inc.",
  },
  {
    name: "Jane Smith",
    feedback: "Great experience working with Olaitan. Highly skilled and professional.",
    company: "Creative Web Studio",
  },
  {
    name: "Michael Johnson",
    feedback: "Highly recommend! The website was smooth, responsive, and exceeded expectations.",
    company: "Startup Hub",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          What Clients Say
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-300 italic">"{review.feedback}"</p>
              <h4 className="mt-4 font-bold text-blue-500">{review.name}</h4>
              <span className="text-gray-400 text-sm">{review.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { motion } from "framer-motion";

const reviews = [
   {
    name: "Dr. Adeola Odeji",
    feedback: "Hammed's expertise in web development is outstanding. He optimized our pharmacy website, improving load times by 70% and significantly enhancing user experience",
    company: "Owner, Odeji Pharmacy",
  },
  {
    name: "John Doe",
    feedback: "Wahab is an exceptional developer! The project was delivered on time with outstanding quality.",
    company: "Tech Solutions Inc.",
  },
  {
    name: "Yusuf Azeez",
    feedback: "Great experience working with Wahab. Highly skilled and professional.",
    company: "Yusluv Interior",
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

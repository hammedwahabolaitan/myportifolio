import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        "service_hcnhxbw", // Replace with your EmailJS service ID
        "template_famthld", // Replace with your EmailJS template ID
        
        {
          from_name: form.name,
          from_email: form.email, // Ensure this matches the template variable
          message: form.message,
          reply_to: form.email, // Add this field for proper reply-to
        },
        "okpF-0PSZgQfmaZpM" // Replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to send message. Try again!");
      });
  };
  
    

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-left text-gray-300">Name</label>
            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-300">Email</label>
            <motion.input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-300">Message</label>
            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white h-32 focus:outline-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className="w-full mt-4 p-3 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

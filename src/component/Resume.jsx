import { motion } from "framer-motion";

const Resume = () => {
  const resumeUrl = "/Olaitan_Resume.pdf"; // Place your resume in the public folder

  return (
    <section id="resume" className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          My Resume
        </motion.h2>

        <p className="mt-4 text-gray-400">
          Click below to view my resume in your browser or download it.
        </p>

        {/* View Resume */}
        <motion.a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Resume
        </motion.a>

        {/* Download Resume */}
        <motion.a
          href={resumeUrl}
          download="Olaitan_Resume.pdf"
          whileHover={{ scale: 1.1 }}
          className="mt-4 inline-block px-6 py-3 bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;






// import { useState } from "react";
// import { motion } from "framer-motion";

// const Resume = () => {
//   const [resumeUrl, setResumeUrl] = useState(""); // Store uploaded resume URL

//   const handleResumeUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setResumeUrl(url);
//     }
//   };

//   return (
//     <section id="resume" className="py-20 bg-gray-900 text-white text-center">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl font-bold"
//         >
//           My Resume
//         </motion.h2>

//         <p className="mt-4 text-gray-400">
//           View or download my latest resume below.
//         </p>

//         {/* Upload Resume */}
//         <input
//           type="file"
//           accept="application/pdf"
//           onChange={handleResumeUpload}
//           className="mt-6 text-center text-gray-300 cursor-pointer"
//         />

//         {/* View or Download Resume */}
//         {resumeUrl && (
//           <div className="mt-6">
//             <iframe src={resumeUrl} className="w-full h-96 rounded-lg"></iframe>
//             <motion.a
//               href={resumeUrl}
//               download="Olaitan_Resume.pdf"
//               whileHover={{ scale: 1.1 }}
//               className="mt-4 inline-block px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
//             >
//               Download Resume
//             </motion.a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Resume;







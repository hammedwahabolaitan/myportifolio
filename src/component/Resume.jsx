import React from 'react';

const ResumeSection = () => {
  // Sample resume data
  const resumeData = {
    name: "HAMMED WAHAB",
    summary: "Innovative and deadline-driven Web Designer with over 3 years of experience in designing and developing user-interface and SEO materials from initial concept to polished final deliverables.",
    contact: {
      address: "iyana church, iwo road, ibadan ",
      phone: "(+234)8107450970",
      email: "olaitanwahabhamed@gmail.com",
    },
    education: [
      {
        degree: "Master of Web Design",
        years: "2020- 2022",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description: "In-depth study of advanced Web design principles and practices."
      },
      {
        degree: "Bachelor in soft ware developement",
        years: "2022 - 2023",
        institution: "Rochester Institute of Technology, Rochester, NY",
        description: "Foundation in graphic design concepts and applications."
      },
    ],
    experience: [
      {
        title: "Senior Web Development Specialist",
        years: "2019 - Present",
        company: "Experion, New York, NY",
        responsibilities: [
          "Lead the design, development, and implementation of API communication materials.",
          "Delegate tasks to a team of 7 designers.",
          "Supervise the quality assessment of all development materials.",
          "Manage production budgets ranging from $2,000 to $25,000.",
        ],
      },
      {
        title: "Logo Design",
        years: "2024",
        company: "Stepping Stone Advertising, New York, NY",
        responsibilities: [
          "Developed various programs, including logos,",
          "Managed multiple projects simultaneously under tight deadlines.",
          "Advised clients on optimal graphic design solutions.",
          "Created design presentations and proposals for clients and account managers.",
        ],
      },
    ],
  };

  return (
    <section id="resume" className="resume section py-10">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Resume</h2>
        <p className="text-gray-600">
          A summary of my professional experience and educational background.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Summary and Education */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title text-xl font-semibold mb-4">Summary</h3>
            <div className="resume-item pb-6">
              <h4 className="text-lg font-semibold">{resumeData.name}</h4>
              <p className="text-gray-600 mb-4">
                <em>{resumeData.summary}</em>
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>{resumeData.contact.address}</li>
                <li>{resumeData.contact.phone}</li>
                <li>{resumeData.contact.email}</li>
              </ul>
            </div>

            <h3 className="resume-title text-xl font-semibold mb-4">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div className="resume-item pb-6" key={index}>
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                <h5 className="text-gray-500 mb-2">{edu.years}</h5>
                <p className="text-gray-600 italic mb-2">{edu.institution}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Professional Experience */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title text-xl font-semibold mb-4">Professional Experience</h3>
            {resumeData.experience.map((job, index) => (
              <div className="resume-item pb-6" key={index}>
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <h5 className="text-gray-500 mb-2">{job.years}</h5>
                <p className="text-gray-600 italic mb-4">{job.company}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {job.responsibilities.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

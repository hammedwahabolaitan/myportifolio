const AboutSection = () => {
    return (
      <section id="about" className="about section py-20 shadow-lg">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Profile Info Section */}
            <div className="space-y-6 shadow-l">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <img
                    src="/image/IMG_20220320_132656~2.jpg"
                    alt="Profile"
                    className="img-fluid rounded-lg shadow-lg h-[40vh] "
                  />
                </div>
                <div className="col-span-1 space-y-2">
                  <p><strong>Name: </strong> <span>hammed wahab</span></p>
                  <p><strong>Profile: </strong> <span>Fullstack Web Developer</span></p>
                  <p><strong>Email: </strong> <span className="text-blue-600"><a href="">olaitanwahabhammed@gmail.com</a></span></p>
                  <p><strong>Phone: </strong> <span>(+234)9050220726</span></p>
                  <p><strong>WathsApp: </strong> <span className="text-blue-600"><a href="https://wa.link/3qn25y">https://wa.link/3qn25y</a></span></p>
                </div>
              </div>
  
              {/* Skills Section */}
              <div>
                <h5 className="font-semibold uppercase mb-2">Skills</h5>
                
                {/* Skill Progress Bars */}
                <div className="space-y-2 text-yellow-500">
                  {/* HTML Skill */}
                      <span className="text-xs ml-5 ">HTML 100%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}>
                    </div>
                  </div>
  
                  {/* CSS Skill */}
                      <span className="text-xs ml-5">CSS 90%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}>
                    </div>
                  </div>
  
                  {/* JavaScript Skill */}
                      <span className="text-xs ml-5">JavaScript 75%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}>
                    </div>
                  </div>
  
                  {/* Photoshop Skill */}
                      <span className="text-xs ml-5">React 80%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}>
                    </div>
                  </div>

                      <span className="text-xs ml-5">nodejs 75%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* About Me Section */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">About me</h4>
             <span>
             Hello! I'm Olaitan, a passionate Full-Stack Web Developer with a strong foundation in both front-end and back-end technologies. I thrive on turning complex problems into simple, user-friendly solutions and am committed to delivering high-quality, maintainable code.

With expertise in frameworks like React for building dynamic user interfaces and Node.js for server-side logic, I enjoy creating seamless experiences that enhance user engagement. I have experience with databases such as MySQL and MongoDB, allowing me to design efficient data models that support robust applications.

I believe in continuous learning and staying up-to-date with the latest industry trends and best practices. I am skilled in collaborating with cross-functional teams and thrive in environments that challenge my creativity and technical abilities.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or writing technical articles to share my knowledge with the developer community.

Let’s connect and build something amazing together!
             </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  
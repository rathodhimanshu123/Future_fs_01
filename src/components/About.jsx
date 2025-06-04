import { useEffect, useRef } from 'react';
import me2 from '../assets/me2.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          headingRef.current.classList.remove('opacity-0', 'translate-y-5');
          setTimeout(() => {
            contentRef.current.classList.remove('opacity-0');
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 transition-colors duration-700"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-tight"
        >
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
            Me
          </span>
        </h2>
        <div
          ref={contentRef}
          className="bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-2xl p-10 transition-opacity duration-1000 opacity-0 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 h-56 w-56 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-indigo-400 dark:border-indigo-700 overflow-hidden">
                <img
                  src={me2}
                  alt="Developer"
                  className="object-cover w-full h-full rounded-full border-4 border-white dark:border-gray-900"
                />
              </div>
              <h3 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-1 tracking-tight">Rathod Himanshu</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">FullStack Developer</p>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-700 dark:text-gray-200 mb-6 text-lg leading-relaxed">
                I'm a passionate Frontend Developer with a strong foundation in React, JavaScript, and modern CSS frameworks. I specialize in building responsive, accessible, and high-performance web applications that provide intuitive user experiences. Writing clean, maintainable code is a top priority, and I take pride in translating complex requirements into seamless, user-friendly interfaces.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-base">
                Driven by curiosity and a growth mindset, I'm constantly exploring new technologies, tools, and development methodologies to stay ahead in the ever-evolving web landscape. Whether it's improving performance, enhancing accessibility, or adopting the latest design trends, I strive to deliver solutions that are both efficient and scalable.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    B Tech - Information Technology.<br />
                    Charotar University of Science and Technology, 2023 - 2027
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/Portfolio/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <span>View Resume</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

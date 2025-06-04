// components/Hero.jsx
import { useEffect, useRef } from 'react';
import me1 from '../assets/me1.jpg';

const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      titleRef.current.classList.remove('opacity-0', 'translate-y-5');
      setTimeout(() => {
        descriptionRef.current.classList.remove('opacity-0', 'translate-y-5');
        setTimeout(() => {
          ctaRef.current.classList.remove('opacity-0', 'translate-y-5');
          imageRef.current.classList.remove('opacity-0', 'translate-x-5');
        }, 200);
      }, 200);
    }, 100);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 transition-all duration-700 transform opacity-0 translate-y-5 tracking-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Rathod Himanshu</span>
          </h1>
          <p 
            ref={descriptionRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-all duration-700 delay-100 transform opacity-0 translate-y-5"
          >
            A dedicated Fullstack Developer specializing in building dynamic, user-friendly, and responsive web applications.
          </p>
          <div 
            ref={ctaRef}
            className="flex flex-wrap gap-4 transition-all duration-700 delay-200 transform opacity-0 translate-y-5"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-xl shadow hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 font-bold"
            >
              View Projects
            </a>
          </div>
        </div>
        <div 
          ref={imageRef}
          className="relative transition-all duration-700 delay-300 transform opacity-0 translate-x-5"
        >
          <div className="relative w-full max-w-xs md:max-w-sm h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-200 dark:border-indigo-700 flex items-center justify-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg before:absolute before:inset-0 before:rounded-3xl before:border-4 before:border-gradient-to-r before:from-indigo-400 before:via-pink-400 before:to-purple-400 before:animate-gradient-x">
            <img
              src={me1}
              alt="Developer"
              className="object-cover object-center w-full h-full relative z-10"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white/90 dark:bg-gray-800/90 py-3 px-8 rounded-full shadow-xl backdrop-blur-lg border border-gray-200 dark:border-gray-700">
            <a href="https://github.com/rathodhimanshu123" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-125 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rathod-himanshu-377014343" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-125 duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
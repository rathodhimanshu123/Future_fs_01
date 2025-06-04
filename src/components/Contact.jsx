// components/Contact.jsx
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a successful submission after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white"
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">Touch</span>
        </h2>
        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Information */}
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">23it108@charusat.edu.in</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 8200426512</p>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Anand, Gujarat</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/rathodhimanshu123" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rathod-himanshu-377014343" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex justify-center items-center font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

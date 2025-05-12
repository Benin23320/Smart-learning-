
// src/components/HeroSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { Briefcase, Lightbulb, TrendingUp, Globe } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-primary relative flex items-center justify-center overflow-x-hidden">
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-30">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl md:text-5xl font-bold text-accent">
              Welcome to <span style={{ color: '#0466c8' }}>Smart Learning</span> AI
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              - Your Learning Companion!
            </h2>
            <motion.p variants={textVariants} className="text-lg md:text-xl mb-8 font-sans text-accent">
              {/* Personalized learning paths powered by AI to accelerate your career. */}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openModal}
              className="bg-[#0466c8] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>

        {/* Background Images */}
        <div className="absolute max-w-lg inset-y-0 right-0 z-0">
          <motion.img
            src="/images/sketch.png"
            alt="Background"
            className="w-full scale-110 h-auto opacity-80"
          />
        </div>

        <div className="absolute max-w-lg inset-x-0 z-0">
          <motion.img
            src="/images/bubbles.png"
            alt="Background"
            className="w-full scale-125 -mt-60 h-auto opacity-50"
          />
        </div>

        {/* Person Image */}
        <div className="relative w-full max-w-lg z-10">
          <motion.img
            src="/images/lapto.png"
            alt="Person with Laptop"
            className="w-full mb-7 scale-110 h-auto opacity-100"
          />
          {/* Subtle Bottom Fade Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent opacity-100 z-20"></div>
        </div>
      </section>

      {/* Additional Content Below Hero Section */}
      <section className="py-20 bg-primary text-accent">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-10 text-accent">Find your right path. Learn with purpose. Build real skills through industry-level projects</h2>
          </div>

          {/* Statistics Section */}
          <div className="statistics-section grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-28">
            {[
              { value: "1,000+", label: "Active learners." },
              { value: "300", label: "Expert mentors guiding success." },
              { value: "50+", label: "Real-world skill courses." },
              { value: "20+", label: "Prestigious awards earned." },
            ].map((stat, index) => (
              <div key={index} className="stat-item flex items-center justify-center">
                <span className="stat-value text-5xl font-bold text-mathew mr-4">{stat.value}</span>
                <span className="stat-label text-lg text-gray-600 text-left">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* What Makes Us Different Section */}
          <div className="text-center mb-28">
            <h2 className="text-4xl font-bold mb-16 text-accent">What Makes Us Different?</h2>
            <div className="flex overflow-x-auto gap-8 hide-scrollbar">
              {[
                { imgSrc: "/images/cord.png", title: "AI-Powered", description: "Our assessment system determines your technical strength and behavioral patterns." },
                { imgSrc: "/images/cord.png", title: "Role-Specific Roadmaps", description: "Receive a tailored roadmap to build skills through modular, self-paced content." },
                { imgSrc: "/images/cord.png", title: "Courses That Adapt To You", description: "Content adapts in real-time based on your learning preferences and pace." },
                { imgSrc: "/images/cord.png", title: "Hands-on Mockup Projects", description: "Work on industry-level projects and build your resume while learning." },
                { imgSrc: "/images/cord.png", title: "AI-Driven Career Support", description: "Get mock interviews, project showcases, and resume builder tools." },
                { imgSrc: "/images/cord.png", title: "Assessment While Learning", description: "As you develop skills — like Python — you'll practice with sample assessments." },
                { imgSrc: "/images/cord.png", title: "Integrated Interview Training", description: "We train you on interviews — Aptitude rounds, Technical rounds, Communication trainings." },
                { imgSrc: "/images/cord.png", title: "AI Chatbot + Life Mentorship", description: "Have a doubt? Get instant assistance from our integrated AI chatbot or mentors." },
              ].map((item, index) => (
                <div key={index} className="relative w-[400px] h-auto flex-none">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-auto object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white p-16 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="flex items-start justify-between mb-28 max-w-7xl mx-auto relative">
            <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold mb-16 text-accent px-4">
              How It Works
            </h2>

            {/* Left Content - Text and Points */}
            <div className="w-2/3 pt-20">
              <div className="mx-auto max-w-3xl ml-28 space-y-10 text-left">
                {[
                  { icon: <Briefcase className="w-6 h-6" />, title: "Role-Based Personalization", description: "Tell us your desired job role — our AI builds a dynamic skill tree tailored for success." },
                  { icon: <Lightbulb className="w-6 h-6" />, title: "Intelligent Recommendation System", description: "Learn through curated videos, articles, certifications, and hands-on projects." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Smart Progress Tracking", description: "The AI updates your path as you grow, highlighting strengths and areas to improve." },
                  { icon: <Globe className="w-6 h-6" />, title: "Real-World Readiness", description: "Each path is aligned with current industry standards, job listings, and hiring trends." },
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-[1.02] transition-transform duration-300">
                    <div className="bg-mathew/80 text-white p-3 rounded-full">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font -semibold text-lg text-gray-800 group-hover:text-accent">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-1/3 flex justify-end pt-20 relative">
              <img
                src="/images/rocket.png"
                alt="How it works illustration"
                className="h-auto object-contain -mr-16 w-full absolute right-0"
              />
            </div>
          </div>

          {/* Choose Your Role Section */}
          <div className="max-w-7xl mx-auto mb-28 text-center">
            <h2 className="text-4xl font-bold mb-6 text-accent">Choose Your Role 🎯</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              You’re one decision away from transforming your future.
              Pick the career path that excites you most, and let our AI craft a personalized learning journey — 
              with the skills, tools, and real-world projects that match your dream job.
            </p>

            {/* Roles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Full-Stack Developer",
                "Cloud Engineer",
                "Data Analyst",
                "DevOps Engineer",
                "Blockchain Developer",
                "Machine Learning Engineer",
              ].map((role) => (
                <div
                  key={role}
                  className="bg-mathew/10 hover:bg-mathew/20 transition-colors rounded-xl p-6 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-accent">What Our Learners Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-lightPink p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">
                  "I landed my dream job in Data Science, thanks to Smart Learning AI's personalized course recommendations!"
                </p>
                <p className="text-secondary font-bold mt-4">– Priya S., Data Scientist</p>
              </div>
              <div className="bg-lightBlue p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">
                  "I wanted to switch from marketing to tech, and this platform made it easy!"
                </p>
                <p className="text-secondary font-bold mt-4">– Rahul M., Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSection;
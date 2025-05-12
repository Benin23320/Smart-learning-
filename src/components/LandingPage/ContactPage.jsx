import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-accent text-center mb-6">CONTACT US</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          🤖 <span className="font-semibold">Need Help? Let’s Connect!</span>
        </p>

        {/* Intro Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-accent mb-4">💡 At Smart Learning AI</h2>
          <p className="text-gray-700 mb-4">
            We believe support should be as intelligent as your learning journey! Whether you need assistance, have business inquiries, or just want to chat about the future of AI-driven education, we’ve got you covered.
          </p>
          <p className="text-gray-700">
            🎯 <span className="font-semibold">Talk to Our AI Assistant!</span> Before filling out a form, try chatting with our AI Support Assistant—it’s available 24/7 to answer FAQs instantly!
          </p>
        </div>

        {/* Origins Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-accent mb-4">Our Origins</h2>
          <p className="text-gray-700 mb-4">
            Growing up in a small Turkish village, Udemy founder Eren Bali had few educational opportunities — until he got a computer. Fueled by his dream to compete in mathematics, he used the internet to learn his way to a silver medal in the International Math Olympiad.
          </p>
          <p className="text-gray-700 mb-4">
            After learning online changed his life, Eren partnered with co-founders Oktay Caglar and Gagan Biyani to achieve a common goal: to make quality education accessible to all.
          </p>
        </div>

        {/* Global Hubs Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-accent mb-6">📍 Our Global Smart Hubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-lightPink p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-4">🌎 Innovation Headquarters</h3>
              <p className="text-gray-700">📌 Bangalore, India</p>
              <p className="text-gray-700">🏢 123 AI Drive, Knowledge Park</p>
              <p className="text-gray-700">✉️ support@smartlearningai.com</p>
              <p className="text-gray-700">📞 +91 98765 43210</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white mb-4">🌎 AI Learning Lab</h3>
              <p className="text-gray-700">📌 San Francisco, USA</p>
              <p className="text-gray-700">🏢 567 Learning Way, Silicon Valley</p>
              <p className="text-gray-700">✉️ us-support@smartlearningai.com</p>
              <p className="text-gray-700">📞 +1 415-123-4567</p>
            </div>
            <div className="bg-lightGreen p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-accent mb-4">🌎 European AI Academy</h3>
              <p className="text-gray-700">📌 London, UK</p>
              <p className="text-gray-700">🏢 89 Tech Hub, EdTech Zone</p>
              <p className="text-gray-700">✉️ eu-support@smartlearningai.com</p>
              <p className="text-gray-700">📞 +44 20 7946 0123</p>
            </div>
          </div>
        </div>

        {/* Contact Options Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-accent mb-6">📨 Let’s Talk!</h2>
          <ul className="text-gray-700 space-y-4">
            <li>🔹 <span className="font-semibold">Live Chat:</span> Our AI Assistant is available 24/7 for instant support.</li>
            <li>🔹 <span className="font-semibold">Email Us:</span> Get a response within 24 hours!</li>
            <li>🔹 <span className="font-semibold">Social Media DM:</span> Slide into our DMs for quick support!</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold text-accent mb-6">📌 Connect with us:</h2>
          <ul className="text-gray-700 space-y-4">
            <li>📘 Facebook: <a href="https://facebook.com/SmartLearningAI" target="_blank" rel="noopener noreferrer" className="text-accent underline">@SmartLearningAI</a></li>
            <li>🐦 Twitter/X: <a href="https://twitter.com/SmartLearnAI" target="_blank" rel="noopener noreferrer" className="text-accent underline">@SmartLearnAI</a></li>
            <li>📸 Instagram: <a href="https://instagram.com/SmartLearningAI" target="_blank" rel="noopener noreferrer" className="text-accent underline">@SmartLearningAI</a></li>
            <li>🔗 LinkedIn: <a href="https://linkedin.com/company/SmartLearningAI" target="_blank" rel="noopener noreferrer" className="text-accent underline">Smart Learning AI</a></li>
          </ul>
        </div>

        {/* Book a Call Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-accent mb-4">💬 Need a Human? Book a Call!</h2>
          <p className="text-gray-700 mb-4">
            🎙 Prefer a real conversation? Schedule a free 15-minute call with our support team!
          </p>
          <button className="bg-accent text-white px-6 py-2 rounded hover:bg-accent/80 transition-colors duration-300">
            📅 Book a Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
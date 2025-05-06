import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      {/* About Section */}
      <div className="container mx-auto px-4 text-center">
        {/* Quote Section */}
        <blockquote className="text-lg italic mb-6 text-accent">
          "Live as if you were to die tomorrow. Learn as if you were to live forever." 
          <br />
          <span className="font-bold">— Mahatma Gandhi</span>
        </blockquote>
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-accent">About InsightHub</h1>

        {/* Mission Section */}
        <h2 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h2>
        <p className="text-xl mb-4 text-secondary">
          Redefining education through AI to deliver smarter learning experiences.
        </p>

        {/* Vision Section */}
        <h2 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h2>
        <p className="text-xl mb-4 text-secondary">
          To empower learners globally with personalized and adaptive career paths.
        </p>

        {/* Partners Section */}
        <h2 className="text-2xl font-bold mb-4 text-secondary">Our Partners</h2>
        <div className="flex justify-center mb-4">
          {/* Logos of partners */}
          <img src="path/to/logo1.png" alt="Partner 1" className="h-16 mx-2" />
          <img src="path/to/logo2.png" alt="Partner 2" className="h-16 mx-2" />
          <img src="path/to/logo3.png" alt="Partner 3" className="h-16 mx-2" />
          <img src="path/to/logo4.png" alt="Partner 4" className="h-16 mx-2" />
        </div>

        {/* Story Section */}
        <h2 className="text-2xl font-bold mb-4 text-secondary">Our Story</h2>
        <p className="text-lg text-secondary mb-8">
          At InsightHub, we believe that education should be accessible to everyone. Our platform was created to provide flexible, tailored learning paths that can adapt to the unique needs of each learner.
        </p>

        {/* Call to Action */}
        <h2 className="text-2xl font-bold mb-4 text-secondary">Empower Yourself Today!</h2>
        <p className="text-xl mb-8 text-secondary">
          Join our community of learners and unlock your full potential with InsightHub.
        </p>

        {/* Frequently Asked Questions Section */}
        <h2 className="text-2xl font-bold mb-4 text-secondary">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-lg text-secondary">
          <li>What is InsightHub?</li>
          <li>How can I enroll?</li>
          <li>What courses are available?</li>
          <li>Is financial aid available?</li>
          <li>Who can I contact for support?</li>
          <li>What is the return policy?</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
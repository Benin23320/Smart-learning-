import React, { useState } from 'react';
import { FaPhone, FaBriefcase, FaUserGraduate, FaBookOpen, FaCode, FaBullseye, FaClock, FaRocket } from 'react-icons/fa';


const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    role: '',
    qualification: '',
    educationLevel: '',
    areaOfInterest: '',
    programmingLanguages: '',
    skillLevelProgramming: '',
    skillLevelCommunication: '',
    careerAspirations: '',
    timeCommitment: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      alert('Profile completed successfully!');
    }
  };

  const inputClass = 'w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition';

  const fieldWrapper = (icon, field) => (
    <div className="space-y-1">
      <label className="flex items-center gap-2 font-medium text-gray-700">
        <span className="text-blue-600 text-lg">{icon}</span>
        {field.label}
      </label>
      <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={formData[field.name]}
        onChange={handleChange}
        className={inputClass}
      />
      {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-6xl p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Complete Your Profile</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fieldWrapper(<FaPhone />, {
            name: 'phoneNumber',
            label: 'Phone Number',
            placeholder: 'Enter your phone number',
            type: 'tel',
          })}

          <div className="space-y-1">
            <label className="flex items-center gap-2 font-medium text-gray-700">
              <FaBriefcase className="text-blue-600 text-lg" />
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="intern">Intern</option>
              <option value="professional">Working Professional</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          </div>

          {fieldWrapper(<FaUserGraduate />, {
            name: 'qualification',
            label: 'Qualification',
            placeholder: 'Enter your qualification',
            type: 'text',
          })}

          {fieldWrapper(<FaBookOpen />, {
            name: 'educationLevel',
            label: 'Education Level',
            placeholder: 'e.g., B.Tech, M.Sc',
            type: 'text',
          })}

          {fieldWrapper(<FaBullseye />, {
            name: 'areaOfInterest',
            label: 'Area of Interest',
            placeholder: 'e.g., Web Development, AI',
            type: 'text',
          })}

          {fieldWrapper(<FaCode />, {
            name: 'programmingLanguages',
            label: 'Programming Languages',
            placeholder: 'e.g., Java, Python, JS',
            type: 'text',
          })}

          {fieldWrapper(<FaCode />, {
            name: 'skillLevelProgramming',
            label: 'Skill Level (Programming)',
            placeholder: 'Beginner, Intermediate, Advanced',
            type: 'text',
          })}

          {fieldWrapper(<FaRocket />, {
            name: 'skillLevelCommunication',
            label: 'Communication Skills',
            placeholder: 'Good, Average, Excellent',
            type: 'text',
          })}

          {fieldWrapper(<FaBullseye />, {
            name: 'careerAspirations',
            label: 'Career Aspirations',
            placeholder: 'e.g., Software Engineer, UX Designer',
            type: 'text',
          })}

          {fieldWrapper(<FaClock />, {
            name: 'timeCommitment',
            label: 'Time Commitment (daily/weekly)',
            placeholder: 'e.g., 2 hours/day, weekends only',
            type: 'text',
          })}
        </form>

        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-700 transition"
          >
            Complete Profile
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CompleteProfile;

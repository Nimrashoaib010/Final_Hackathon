import React from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye
import { ArrowRight } from 'lucide-react'; // Cool arrow icon (optional, install if not done)
import welcome from '../assets/welcome-image.png';
import { motion } from 'framer-motion';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Signup'); // Jab button dabao, to signup page pe jaaye
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 p-6">
      
      <motion.h1 
        className="text-5xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to the Task Tracker System!
      </motion.h1>

      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={welcome} 
          alt="Welcome" 
          className="rounded-lg shadow-2xl w-full"
        />
      </motion.div>

      <motion.p 
        className="text-lg text-gray-600 mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Glad to have you here! 🚀
      </motion.p>

      {/* Next Button */}
      <motion.button
        onClick={handleNext}
        className="flex items-center gap-2 bg-blue-600 hover:bg-green-600 text-white px-6 py-3 rounded-full mt-8 shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Get Started
        <ArrowRight size={20} />
      </motion.button>

    </div>
  );
};

export default Welcome;

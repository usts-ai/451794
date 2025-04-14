import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PromotionBannerProps {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ 
  title, 
  description, 
  backgroundColor, 
  textColor 
}) => {
  return (
    <motion.div 
      className={`${backgroundColor} ${textColor} rounded-lg p-4 shadow-sm`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <Link to="/boutique">
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium bg-white text-green-700 hover:bg-green-50`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En profiter
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PromotionBanner;

'use client';

import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}

const Loading = ({ size = 'md', color = 'text-orange-500', text }: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerSizes = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizes[size]}`}>
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} border-2 border-gray-300 border-t-transparent rounded-full ${color}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            borderTopColor: 'currentColor'
          }}
        />
      </div>
      {text && (
        <motion.p
          className={`${color} text-sm font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loading;
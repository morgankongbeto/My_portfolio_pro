import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillCardProps {
  name: string;
  level?: number;
  icon: string;
  color: string;
  size?: 'small' | 'medium' | 'large';
  delay?: number;
}

export const SkillCard = ({ name, level, icon, color, size = 'medium', delay = 0 }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-gradient-to-br ${color} rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group`}
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
        initial={{ x: '-100%', y: '-100%' }}
        animate={isHovered ? { x: '100%', y: '100%' } : { x: '-100%', y: '-100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Animated Background Circles */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: isHovered ? 2 : 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Icon */}
      <motion.div 
        className="w-20 h-20 flex items-center justify-center relative z-10"
        animate={isHovered ? { 
          rotate: 360,
          scale: [1, 1.2, 1]
        } : {}}
        transition={{ duration: 0.6 }}
      >
        <i className={`${icon} text-6xl text-white drop-shadow-lg`}></i>
      </motion.div>
      
      {/* Skill Name */}
      <motion.h3 
        className="text-2xl font-bold text-white text-center relative z-10 drop-shadow-md"
        animate={isHovered ? { scale: 1.05 } : {}}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h3>
      
      {/* Progress Bar */}
      {level && (
        <div className="w-full relative z-10">
          <div className="flex justify-between text-sm text-white/90 mb-2 font-medium">
            <span>Niveau</span>
            <motion.span 
              className="font-bold"
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {level}%
            </motion.span>
          </div>
          <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
              className="h-full bg-white rounded-full shadow-lg relative overflow-hidden"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      )}
      
      {/* Sparkle Effect on Hover */}
      <motion.div
        className="absolute top-4 right-4 text-white/60"
        animate={isHovered ? {
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360]
        } : {
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: isHovered ? 1 : 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <i className="ri-sparkling-line text-xl"></i>
      </motion.div>
      
      {/* Additional sparkles on hover */}
      {isHovered && (
        <>
          <motion.div
            className="absolute bottom-4 left-4 text-white/60"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className="ri-star-line text-lg"></i>
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-4 text-white/60"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut"
            }}
          >
            <i className="ri-flashlight-line text-sm"></i>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

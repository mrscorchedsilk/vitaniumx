
import React from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';

interface AnimatedElementProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'bounce' | 'pulse' | 'float';
  className?: string;
  viewportOnce?: boolean;
  viewportMargin?: string;
  viewportAmount?: number;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  bounce: {
    hidden: { opacity: 0, y: 0 },
    visible: (i) => ({
      opacity: 1,
      y: [0, -15, 0, -7, 0],
      transition: {
        delay: i * 0.1,
        duration: 1,
        times: [0, 0.4, 0.6, 0.8, 1],
        ease: "easeOut"
      }
    })
  },
  pulse: {
    hidden: { opacity: 0, scale: 1 },
    visible: (i) => ({
      opacity: 1,
      scale: [1, 1.05, 1],
      transition: {
        delay: i * 0.1,
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    })
  },
  float: {
    hidden: { opacity: 0, y: 0 },
    visible: (i) => ({
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        delay: i * 0.1,
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    })
  }
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  duration,
  animation = 'fadeIn',
  className = '',
  viewportOnce = true,
  viewportMargin = "0px 0px -100px 0px",
  viewportAmount = 0.1,
  ...props
}) => {
  const selectedAnimation = animations[animation] || animations.fadeIn;
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: viewportOnce, 
        margin: viewportMargin, 
        amount: viewportAmount 
      }}
      variants={selectedAnimation}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
}
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  containerClass = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        className={cn(containerClass, 'pt-[40px] pb-[40px]')}
        initial={{
          opacity: 0,
          y: 40
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}>
        
        {children}
      </motion.div>
    </section>);

};
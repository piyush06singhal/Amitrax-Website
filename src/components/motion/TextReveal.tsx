import React from 'react';
import { motion } from 'motion/react';

export type TextRevealVariant = 'fade-up' | 'mask-reveal' | 'word-reveal' | 'line-reveal';

interface TextRevealProps {
  text: string;
  variant?: TextRevealVariant;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  delay?: number;
  duration?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  variant = 'fade-up',
  className = '',
  as: Component = 'div',
  delay = 0,
  duration = 0.6,
}) => {
  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  // Variant 1: Mask Reveal (Text emerges smoothly from clipped overflow-hidden box)
  if (variant === 'mask-reveal') {
    return (
      <div className="overflow-hidden inline-block leading-tight">
        <motion.div
          initial={{ y: '105%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: duration * 1.1,
            delay,
            ease: [0.16, 1, 0.3, 1], // Smooth physical cubic bezier
          }}
          className={className}
        >
          {text}
        </motion.div>
      </div>
    );
  }

  // Variant 2: Word Reveal (Words appear sequentially)
  if (variant === 'word-reveal') {
    const words = text.split(' ');
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.045,
          delayChildren: delay,
        },
      },
    };

    const wordAnim = {
      hidden: { opacity: 0, y: 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };

    return (
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className={`inline-block ${className}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordAnim}
            className="inline-block mr-[0.28em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Variant 3: Line Reveal (Lines split by '\n')
  if (variant === 'line-reveal') {
    const lines = text.split('\n');
    return (
      <div className={`space-y-1 ${className}`}>
        {lines.map((line, idx) => (
          <div key={idx} className="overflow-hidden">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: duration,
                delay: delay + idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.div>
          </div>
        ))}
      </div>
    );
  }

  // Default Variant: Fade Up
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

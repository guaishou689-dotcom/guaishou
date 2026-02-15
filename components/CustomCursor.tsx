import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TreePine } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Mouse position state
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation for the cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12); // Center the 24px icon (offset by 12px)
      mouseY.set(e.clientY - 12);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial check
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Only render on devices with fine pointers (mouse) to avoid issues on mobile
  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, textarea, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] text-accent hidden md:block mix-blend-darken"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative">
            {/* Main Tree Cursor */}
            <TreePine size={24} fill="currentColor" className="drop-shadow-sm" />
            
            {/* Optional: Subtle glow or decorative dot */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full opacity-50"></div>
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
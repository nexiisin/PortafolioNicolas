import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClickSpark() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const spark = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setSparks((prev) => [...prev, spark]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== spark.id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      <AnimatePresence>
        {sparks.map((spark) => (
          <div
            key={spark.id}
            style={{
              position: 'absolute',
              left: spark.x,
              top: spark.y,
              pointerEvents: 'none',
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 50,
                  y: Math.sin((i * Math.PI * 2) / 8) * 50,
                  opacity: 0,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #646cff 0%, #535bf2 100%)',
                  boxShadow: '0 0 8px rgba(100, 108, 255, 0.8)',
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

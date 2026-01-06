import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashCursor() {
  const [splashes, setSplashes] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // Calcular velocidad del movimiento
      const distance = Math.sqrt(
        Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2)
      );

      if (distance > 5) {
        setIsMoving(true);
        setMousePos({ x: currentX, y: currentY });

        // Crear splash cada cierta distancia
        if (distance > 15) {
          const splash = {
            id: Date.now() + Math.random(),
            x: currentX,
            y: currentY,
          };

          setSplashes((prev) => [...prev, splash]);

          setTimeout(() => {
            setSplashes((prev) => prev.filter((s) => s.id !== splash.id));
          }, 800);
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsMoving(false);
        }, 100);
      }

      lastX = currentX;
      lastY = currentY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }}>
      {/* Cursor principal */}
      <motion.div
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
        }}
        style={{
          position: 'fixed',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '2px solid rgba(100, 108, 255, 0.6)',
          pointerEvents: 'none',
        }}
      />

      {/* Splashes */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: splash.x,
              top: splash.y,
              width: '40px',
              height: '40px',
              marginLeft: '-20px',
              marginTop: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(100, 108, 255, 0.4) 0%, rgba(100, 108, 255, 0) 70%)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

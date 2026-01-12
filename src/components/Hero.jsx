
import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop';

export default function Hero() {
  return (
    <section className="hero-section" id="inicio" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
        <motion.img
          src="/Foto nico.png"
          alt="Nicolás Rodríguez"
          className="profile-photo"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: '0.5rem' }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, color: '#232323', letterSpacing: '-0.5px' }}
        >
          Desarrollador Full Stack y Automatización
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ fontSize: '1.08rem', color: '#555', margin: 0, maxWidth: 480, fontWeight: 400, lineHeight: 1.6 }}
        >
          Desarrollo aplicaciones web y soluciones digitales que conectan usuarios con sistemas de forma clara y segura.
        </motion.p>
        <div style={{ width: '100%', marginTop: '2.5rem' }}>
          <LogoLoop speed={40} />
        </div>
      </div>
    </section>
  );
}

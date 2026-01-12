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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: '0.5rem' }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}
        >
          Desarrollo soluciones web y automatizaciones reales
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ fontSize: '1.1rem', color: '#555', margin: 0, maxWidth: 480 }}
        >
          Webs, apps y bots que optimizan procesos y ahorran tiempo.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#produccion" className="btn btn-primary" style={{ padding: '0.7em 1.5em', borderRadius: 6, background: '#646cff', color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', border: 'none', transition: 'background 0.2s' }}>
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-outline" style={{ padding: '0.7em 1.5em', borderRadius: 6, background: 'transparent', color: '#646cff', border: '2px solid #646cff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', transition: 'background 0.2s, color 0.2s' }}>
            Contactarme
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ width: '100%', marginTop: '2.5rem' }}
        >
          <LogoLoop speed={40} />
        </motion.div>
      </div>
    </section>
  );
}

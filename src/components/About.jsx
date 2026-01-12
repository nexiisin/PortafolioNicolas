import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about-section" id="sobre-mi" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}
        >
          Sobre mí
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '1.2rem' }}>
            Soy desarrollador enfocado en crear soluciones digitales prácticas para empresas y personas, como aplicaciones web, automatizaciones y bots que resuelven necesidades reales.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#444' }}>
            Trabajo principalmente con React, JavaScript y backend moderno. Priorizo la claridad, la funcionalidad y una comunicación directa para que cada proyecto aporte valor real y resultados concretos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

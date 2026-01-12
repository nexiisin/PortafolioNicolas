
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about-section" id="sobre-mi" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 650, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.3rem', color: '#232323' }}
        >
          Sobre mí
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: '1.1rem', lineHeight: 1.7, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Soy desarrollador Full Stack con más de 1 año y medio de experiencia creando aplicaciones web para clientes reales. He trabajado en proyectos en producción para conjuntos residenciales, empresas del sector salud visual y personas naturales.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#444', lineHeight: 1.7, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Me enfoco en desarrollar soluciones claras, seguras y funcionales, optimizando procesos repetitivos y mejorando la gestión de la información. Trabajo de forma cercana con el cliente, entendiendo la necesidad real antes de escribir código.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

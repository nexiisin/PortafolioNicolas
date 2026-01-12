
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section className="process-section" id="process" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}
        >
          Cómo trabajo
        </motion.h2>
        <motion.ol
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ textAlign: 'left', margin: '0 auto', maxWidth: 500, padding: 0, fontSize: '1.1rem', color: '#444', listStyle: 'decimal inside', lineHeight: 1.7 }}
        >
          <li>Entender el problema y el objetivo</li>
          <li>Proponer una solución clara</li>
          <li>Desarrollo por etapas</li>
          <li>Revisión y ajustes</li>
          <li>Entrega final funcional</li>
        </motion.ol>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Globe, Bot, Layers, Link2 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Aplicaciones Web',
    desc: 'Desarrollo aplicaciones web funcionales y seguras, desde sistemas internos hasta plataformas completas con roles, autenticación y manejo de datos.'
  },
  {
    icon: Bot,
    title: 'Automatización y Bots',
    desc: 'Automatizo procesos repetitivos y desarrollo bots que reducen carga operativa y mejoran la eficiencia.'
  },
  {
    icon: Layers,
    title: 'Sistemas de Gestión',
    desc: 'Creo sistemas de gestión para administración de usuarios, pagos, citas, información confidencial y reportes.'
  },
  {
    icon: Link2,
    title: 'Integración y APIs',
    desc: 'Integro APIs y servicios externos para conectar plataformas y automatizar flujos de información.'
  }
];

export default function Services() {
  return (
    <section className="services-section" id="servicios" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.2rem', textAlign: 'center', color: '#232323' }}
        >
          Qué hago
        </motion.h2>
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '2rem 1.2rem 1.5rem 1.2rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.1rem',
                minHeight: 220,
              }}
            >
              <service.icon size={38} color="#646cff" style={{ marginBottom: 8 }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>{service.title}</h3>
              <p style={{ color: '#444', fontSize: '1rem', margin: 0, lineHeight: 1.6 }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

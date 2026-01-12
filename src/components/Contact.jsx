

import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:nicolasoved2@gmail.com',
    color: '#646cff',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicolas-rodriguez-b18141310',
    color: '#0A66C2',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/nexiisin',
    color: '#222',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/573227256784?text=Hola,%20me%20gustaría%20revisar%20una%20idea%20de%20desarrollo',
    color: '#25D366',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.2rem' }}
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2.2rem', lineHeight: 1.6 }}
        >
          ¿Tienes un proyecto o necesitas apoyo en desarrollo?<br />
          Escríbeme y revisamos tu idea.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                background: c.color,
                borderRadius: 8,
                padding: '0.9em 2em',
                fontWeight: 600,
                fontSize: '1.08rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                marginBottom: 8,
                transition: 'background 0.18s',
                minWidth: 140,
              }}
            >
              <c.icon size={24} style={{ marginRight: 4 }} /> {c.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

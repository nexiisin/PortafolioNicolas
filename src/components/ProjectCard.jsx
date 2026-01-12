
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.025, boxShadow: '0 6px 32px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '2.2rem 2rem 2rem 2rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        minWidth: 280,
        maxWidth: 520,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '0 auto',
      }}
    >
      <div style={{ flex: 1, width: '100%' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: '#232323', marginBottom: 10 }}>{project.title}</h3>
        <p style={{ color: '#444', fontSize: '1.08rem', margin: '0 0 1.1rem 0', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{project.description}</p>
        <div style={{ display: 'flex', gap: '1.2rem', marginBottom: 10, flexWrap: 'wrap' }}>
          <span style={{ background: '#f4f4f8', color: '#646cff', borderRadius: 5, padding: '0.18em 0.8em', fontSize: '0.98em', fontWeight: 500 }}>{project.status}</span>
          <span style={{ background: '#f4f4f8', color: '#232323', borderRadius: 5, padding: '0.18em 0.8em', fontSize: '0.98em', fontWeight: 500 }}>{project.visibility}</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginTop: 'auto', width: '100%' }}>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver demo"
            style={{
              color: '#fff',
              background: '#646cff',
              borderRadius: 6,
              padding: '0.7em 1.5em',
              fontWeight: 500,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'background 0.18s',
              boxShadow: '0 1px 4px rgba(100,108,255,0.08)'
            }}
          >
            <ExternalLink size={20} style={{ marginRight: 4 }} /> Ver demo
          </a>
        )}
        <a
          href="#contact"
          style={{
            color: '#646cff',
            background: 'transparent',
            border: '2px solid #646cff',
            borderRadius: 6,
            padding: '0.7em 1.5em',
            fontWeight: 500,
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'background 0.18s, color 0.18s',
          }}
        >
          Contacto
        </a>
      </div>
    </motion.div>
  );
}

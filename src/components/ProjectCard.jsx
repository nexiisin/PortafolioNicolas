import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        background: '#fff',
        borderRadius: 12,
        padding: '1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minWidth: 260,
        maxWidth: 350,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{project.title}</h3>
        <p style={{ color: '#444', fontSize: '1rem', margin: '0.5rem 0 1rem 0' }}>{project.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {project.tech && project.tech.map((tech) => (
            <span key={tech} style={{ background: '#f4f4f8', color: '#646cff', borderRadius: 5, padding: '0.2em 0.7em', fontSize: '0.95em', fontWeight: 500 }}>{tech}</span>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: 'auto' }}>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Ver demo" style={{ color: '#646cff', display: 'flex', alignItems: 'center' }}>
            <ExternalLink size={22} />
          </a>
        )}
        {project.code && project.code !== '' && (
          <a href={project.code} target="_blank" rel="noopener noreferrer" title="Ver código" style={{ color: '#222', display: 'flex', alignItems: 'center' }}>
            <Github size={22} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

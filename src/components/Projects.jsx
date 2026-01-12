
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="projects-section" id="produccion" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.2rem', textAlign: 'center', color: '#232323' }}
        >
          Proyectos principales
        </motion.h2>
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            justifyContent: 'center',
            alignItems: 'stretch',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

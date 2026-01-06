import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Guali',
    url: 'https://guali1.up.railway.app',
    description: 'Este proyecto esta en produccion para el conjunto recidencial del guali, el cual funciona para sus operaciones internas y permisos, tener al usuario concetado con la administracion',
  },
  {
    id: 2,
    name: 'JBS Optics',
    url: 'https://jbsopticss.netlify.app/',
    description: 'Este es un proyecto dirigido a ópticas para gestionar las citas examenes etc.',
  },
];

// Función para generar URL de screenshot
const getScreenshotUrl = (url) => {
  return `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;
};

export default function ProjectCard({ project }) {
  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      <div className="project-image-container">
        <img 
          src={getScreenshotUrl(project.url)} 
          alt={project.name} 
          className="project-image"
          loading="lazy"
        />
        <div className="project-overlay">
          <ExternalLink size={32} color="#fff" />
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">
          {project.description || 'Descripción del proyecto...'}
        </p>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
          onClick={(e) => e.stopPropagation()}
        >
          Ver proyecto
        </a>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Aplicaciones en Producción</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

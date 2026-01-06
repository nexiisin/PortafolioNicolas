import { motion } from 'framer-motion';
import { Instagram, Linkedin, Briefcase, Building2, Mail, MessageCircle } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const socialLinks = [
  {
    name: 'Instagram Personal',
    url: 'https://www.instagram.com/millos_daviid/',
    icon: Instagram,
    color: '#E4405F',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nicolas-rodriguez-b18141310',
    icon: Linkedin,
    color: '#0A66C2',
  },
  {
    name: 'Freelancer',
    url: 'https://www.freelancer.com/u/Niicolaii',
    icon: Briefcase,
    color: '#29B2FE',
  },
  {
    name: 'Nexis Web',
    url: 'https://www.instagram.com/nexis_web/',
    icon: Building2,
    color: '#646cff',
  },
  {
    name: 'Correo',
    url: 'mailto:nicolasoved2@gmail.com?subject=Software o Automatización a la Medida&body=Hola, ¿cómo estás? Me comunico porque quiero más información de tus servicios.',
    icon: Mail,
    color: '#EA4335',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/573227256784?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20tus%20servicios',
    icon: MessageCircle,
    color: '#25D366',
  },
];

export default function AboutSection() {
  return (
    <div className="about-section">
      <ScrollFloat delay={0.2}>
        <h2 className="about-title">Sobre Mí</h2>
      </ScrollFloat>

      <div className="about-container">
        <ScrollFloat delay={0.3}>
          <div className="about-content">
            <p className="about-text">
              Soy un desarrollador Full Stack apasionado por crear soluciones digitales 
              innovadoras que transforman ideas en experiencias reales. Con experiencia 
              en múltiples tecnologías y frameworks modernos, me especializo en construir 
              aplicaciones web escalables y eficientes.
            </p>
            <p className="about-text">
              Como CEO de Nexis Web, lidero proyectos que combinan diseño elegante con 
              arquitecturas robustas, siempre enfocado en entregar valor real a los usuarios 
              y clientes. Mi objetivo es seguir aprendiendo, innovando y contribuyendo al 
              ecosistema tecnológico con soluciones de calidad.
            </p>
            <p className="about-text">
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, 
              colaborando en proyectos open source, y compartiendo conocimiento con la 
              comunidad de desarrolladores.
            </p>
          </div>
        </ScrollFloat>

        <ScrollFloat delay={0.4}>
          <div className="social-links">
            <h3 className="social-title">Conecta Conmigo</h3>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  style={{ '--hover-color': link.color }}
                >
                  <link.icon size={24} />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollFloat>
      </div>
    </div>
  );
}

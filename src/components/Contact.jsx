
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact-section" id="contact" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.2rem' }}>¿Tienes un proyecto?</h2>
        <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2rem' }}>
          Escríbeme y conversemos sobre cómo puedo ayudarte a llevar tu idea a la realidad.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a
            href="mailto:nicolasoved2@gmail.com"
            style={{ color: '#646cff', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.1rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={22} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-rodriguez-b18141310"
            style={{ color: '#0A66C2', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.1rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} /> LinkedIn
          </a>
          <a
            href="https://github.com/nexiisin"
            style={{ color: '#222', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.1rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={22} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

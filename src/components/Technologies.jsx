import { Code, Database, Monitor, GitBranch } from 'lucide-react';

const techGroups = [
  {
    icon: Monitor,
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: Code,
    title: 'Backend',
    items: ['Node.js', 'PHP (Laravel)', 'Python', 'Java'],
  },
  {
    icon: Database,
    title: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL'],
  },
  {
    icon: GitBranch,
    title: 'Herramientas',
    items: ['Git', 'GitHub'],
  },
];

export default function Technologies() {
  return (
    <section className="technologies-section" id="tecnologias" style={{ padding: '3rem 0 2rem 0' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.2rem', textAlign: 'center', color: '#232323' }}>
          Tecnologías
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          {techGroups.map((group) => (
            <div key={group.title} style={{
              background: '#fff',
              borderRadius: 12,
              padding: '1.5rem 1.2rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.1rem',
              minHeight: 140,
            }}>
              <group.icon size={32} color="#646cff" style={{ marginBottom: 6 }} />
              <h3 style={{ fontSize: '1.08rem', fontWeight: 600, margin: 0 }}>{group.title}</h3>
              <div style={{ color: '#444', fontSize: '1rem', margin: 0, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

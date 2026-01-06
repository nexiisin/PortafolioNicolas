import { motion } from 'framer-motion';

const navItems = [
  { name: 'Yo', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Producción', href: '#produccion' },
];

export default function Navbar() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="nav-link"
            onClick={(e) => scrollToSection(e, item.href)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Nicolás Rodríguez - Nexis Web. Todos los derechos reservados.
        </p>
        <p className="footer-subtext">
          Desarrollado con React & Framer Motion
        </p>
      </div>
    </footer>
  );
}

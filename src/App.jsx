import './App.css'
import ClickSpark from './components/ClickSpark'
import ScrollFloat from './components/ScrollFloat'
import LogoLoop from './components/LogoLoop'
import SplashCursor from './components/SplashCursor'
import { ProjectsSection } from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SplashCursor />
      <ClickSpark />
      <div className="portfolio">
        <div className="container">
          <ScrollFloat delay={0}>
            <img src="/Foto nico.png" alt="Nicolás Rodríguez" className="profile-photo" />
          </ScrollFloat>
          
          <ScrollFloat delay={0.1}>
            <p className="role">Desarrollador Full Stack</p>
          </ScrollFloat>
          
          <ScrollFloat delay={0.2}>
            <p className="subtitle">CEO — Nexis Web</p>
          </ScrollFloat>
          
          <ScrollFloat delay={0.3}>
            <h1 className="name">Nicolás Rodríguez</h1>
          </ScrollFloat>
          
          <ScrollFloat delay={0.4}>
            <p className="description">
              Creo experiencias digitales modernas y funcionales,<br />
              combinando diseño elegante con soluciones tecnológicas eficientes.
            </p>
          </ScrollFloat>
        </div>
      </div>
      
      <ScrollFloat delay={0.5}>
        <LogoLoop speed={40} />
      </ScrollFloat>
      
      <AboutSection />
      
      <ProjectsSection />
      
      <Footer />
    </>
  )
}

export default App

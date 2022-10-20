import { useEffect, useRef } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import SideNavbar from './components/Navbar';
import Projects from './components/Projects';
import ShootingStars from './components/ShootingStars';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      useClassNames: true,
      duration: 2000,
    });
  }, []);

  const homeRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <SideNavbar
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <ShootingStars />
      <Hero ref={homeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <AboutMe ref={contactRef} />
    </>
  );
}

export default App;

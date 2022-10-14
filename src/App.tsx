import { useEffect } from 'react';
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
    });
  }, []);
  return (
    <>
      <SideNavbar />
      <ShootingStars />
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
    </>
  );
}

export default App;

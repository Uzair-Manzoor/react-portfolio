import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import NavBar from './components/navBar';
import particlesOptions from './particles.json';
import SocialFooter from './components/footer';
import './App.scss';

function App() {
  const location = useLocation();

  const renderParticles = location.pathname === '/';

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  return (
    <div className="App">
      {renderParticles && init && <Particles options={particlesOptions} />}
      <NavBar />
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <SocialFooter />
    </div>
  );
}

export default App;

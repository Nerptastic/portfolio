import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Misc from './components/Misc';
import Projects from './components/Projects';
import Resume from './components/Resume';

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/misc" element={<Misc />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default MainContent;
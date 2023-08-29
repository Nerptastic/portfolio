import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Fun from './components/Fun';
import Projects from './components/Projects';
import Resume from './components/Resume';

function MainContent() {
  return (
    <div className="MainContent mx-auto max-w-7xl p-6 lg:px-8 flex-1 flex flex-col justify-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fun" element={<Fun />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </div>
  );
}

export default MainContent;
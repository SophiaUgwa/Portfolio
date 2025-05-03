import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CodeProjects from './pages/CodeProjects';
import WordProjects from './pages/WordProjects';
import CVs from './pages/CVs.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/code" element={<CodeProjects />} />
        <Route path="/projects/word" element={<WordProjects />} />
        <Route path="/cvs" element={<CVs />} />
      </Routes>
    </Router>
  );
}

export default App;

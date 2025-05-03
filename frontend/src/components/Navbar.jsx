import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3e50', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <span style={{ margin: '0 1rem' }}>|</span>
      <Link to="/about" style={linkStyle}>About Me</Link>
      <span style={{ margin: '0 1rem' }}>|</span>
      <Link to="/projects/code" style={linkStyle}>Code Projects</Link>
      <span style={{ margin: '0 1rem' }}>|</span>
      <Link to="/projects/word" style={linkStyle}>Word Projects</Link>
      <span style={{ margin: '0 1rem' }}>|</span>
      <Link to="/cvs" style={linkStyle}>CV</Link>
    </nav>
  );
}

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  transition: 'color 0.3s ease, background-color 0.3s ease',
};


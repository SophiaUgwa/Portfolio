export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Welcome to Sophia Ugwa's Portfolio</h1>

      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Hi, I'm <span style={{ color: '#2c3e50' }}>Sophia Favour Ugwa</span>
      </p>

      <p style={{ fontSize: '1.1rem', textAlign: 'center', color: '#34495e' }}>
        Aspiring Software Engineer | Full-Stack Developer | Problem Solver
      </p>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        I'm a second-year Computer Science student passionate about building scalable web apps, automating solutions, and creating user-friendly digital experiences.
        My work blends creativity with technical skill—whether it's crafting full-stack applications, exploring embedded systems, or working on real-world projects using
        <strong style={{ color: '#2980b9' }}> React, Node.js, MySQL, and Express.</strong>
      </p>

      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        I'm also a proud recipient of the <strong style={{ color: '#e74c3c' }}>J&J WiSTEM2D Award</strong>, a 
        <strong style={{ color: '#27ae60' }}> Dell STEM Aspire mentee</strong>, and a returning student inspired by real-world impact and lifelong learning.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3498db' }}>🚀Explore my projects</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3498db' }}>📄View my CV</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3498db' }}>📬Get in touch</p>
      </div>

      <hr style={{ margin: '2rem 0', border: '1px solid #bdc3c7' }} />

      <h3 style={{ textAlign: 'center', color: '#34495e' }}>Connect with me</h3>
      <p style={{ textAlign: 'center' }}>
        <a href="https://github.com/SophiaUgwa" target="_blank" rel="noopener noreferrer" style={{ color: '#2ecc71', textDecoration: 'none', fontSize: '1.1rem' }}>🌐 GitHub</a> |{' '}
        <a href="https://www.linkedin.com/in/sophia-u-75625b237/" target="_blank" rel="noopener noreferrer" style={{ color: '#2980b9', textDecoration: 'none', fontSize: '1.1rem' }}>💼 LinkedIn</a>
      </p>
    </div>
  );
}

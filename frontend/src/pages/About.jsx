export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#2c3e50' }}>About Me</h2>
      
      <p style={{ fontSize: '1.1rem', color: '#34495e', marginBottom: '2rem' }}>
        I'm a passionate and driven software engineering student with a strong interest in full-stack development, cloud technologies, and automation.
        My experience includes building real-world applications using React, Node.js, MySQL, and Express, as well as developing backend tools and scripts to streamline processes. 
        I thrive in collaborative environments and enjoy solving complex problems through code.
      </p>

      <p style={{ fontSize: '1.1rem', color: '#34495e', marginBottom: '2rem' }}>
        As a recipient of the <strong style={{ color: '#e74c3c' }}>J&J WiSTEM2D Award</strong> and a <strong style={{ color: '#27ae60' }}>Dell STEM Aspire mentee</strong>, 
        I'm committed to continuous learning and using technology to create impactful solutions.
      </p>

      <div style={{ textAlign: 'center' }}>
        <a
          href="/docs/cv-sophia.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3498db',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderBottom: '2px solid #3498db',
          }}
        >
          📄 Cover Letter - Sophia Ugwa
        </a>
      </div>
    </div>
  );
}

export default function CVs() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#2c3e50' }}>📄 My CV</h2>
      
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#34495e', marginBottom: '1.5rem' }}>
        You can download my CV below:
      </p>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2rem', textAlign: 'center' }}>
        <li>
          <a
            href="/docs/Sophia_Ugwa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3498db',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderBottom: '2px solid #3498db',
            }}
          >
            Download My CV (PDF)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function CodeProjects() {
  const projects = [
    {
      name: 'Treasure Map',
      description: 'UI/UX design for a study app that students can use to work on projects remotely and efficiently.',
      pdf: '/docs/Sophia_Ugwa_ Improved Wireframe -2.pdf',
    },
    {
      name: 'Travel Blog',
      description: 'A React blog for storing travel logs and plans for future trips.',
      github: 'https://github.com/SophiaUgwa/Travel-Blog',
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#2c3e50' }}>Code Projects</h2>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {projects.map((proj, idx) => (
          <li key={idx} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#34495e' }}>{proj.name}</h3>
            <p style={{ fontSize: '1.1rem', color: '#34495e' }}>{proj.description}</p>

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#3498db',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #3498db',
                    marginRight: '1rem',
                  }}
                >
                  View on GitHub
                </a>
              )}

              {proj.pdf && (
                <a
                  href={proj.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#e74c3c',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #e74c3c',
                  }}
                >
                  View PDF
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

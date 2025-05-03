export default function WordProjects() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#2c3e50' }}>📄 Word Projects</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#34495e' }}>Here are some of my written academic and professional works:</p>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <a
            href="/docs/Data_assignment.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3498db',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderBottom: '2px solid #3498db',
            }}
          >
            Data Assignment
          </a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <a
            href="/docs/Ethics_In_Ai_Esaay.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3498db',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderBottom: '2px solid #3498db',
            }}
          >
            Ethics in AI Essay
          </a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <a
            href="/docs/Group_Project_CS335_Word.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3498db',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderBottom: '2px solid #3498db',
            }}
          >
            Group Project - CS335
          </a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <a
            href="/docs/Leading_Cause_Of_Mental_Health_Issues.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3498db',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderBottom: '2px solid #3498db',
            }}
          >
            Leading Cause of Mental Health Issues
          </a>
        </li>
      </ul>
    </div>
  );
}

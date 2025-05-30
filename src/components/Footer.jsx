export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem 0',
      marginTop: '3rem',
      borderTop: '1px solid #eaeaea'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#666',
          marginBottom: '1rem',
          fontSize: '0.9rem'
        }}>
          © {new Date().getFullYear()} SNK Portfolio. All rights reserved.
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem'
        }}>
        
        </div>
      </div>
    </footer>
  );
}
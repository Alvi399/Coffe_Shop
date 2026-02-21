
const Newsletter = () => {
  return (
    <section className="newsletter" style={{ padding: '80px 0 120px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          display: 'inline-block'
        }}>☕</div>
        <h2 className="section-title">Locally Roasted in Your Neighborhood</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
          Join our community of coffee lovers and get notified about new seasonal blends and exclusive tasting events.
        </p>
        
        <form style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '10px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <input 
            type="email" 
            placeholder="Your email address" 
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              fontFamily: 'var(--font-family)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button className="btn btn-primary" type="submit">Join the Club</button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          By joining, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

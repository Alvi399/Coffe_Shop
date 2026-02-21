
const Footer = () => {
  return (
    <footer style={{
      background: '#0a0a0a',
      padding: '80px 0 40px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '60px',
          marginBottom: '80px'
        }}>
          <div className="footer-brand">
            <div style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '25px' }}>
              <span style={{ color: 'var(--primary)' }}>The</span>DailyBrew
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '30px', maxWidth: '300px' }}>
              Crafting exquisite coffee experiences since 2012. We believe every cup tells a story of the soil it was grown in.
            </p>
            <div style={{ display: 'flex', gap: '20px', fontSize: '1.2rem' }}>
              <a href="#" style={{ opacity: 0.6 }}>𝕏</a>
              <a href="#" style={{ opacity: 0.6 }}>📸</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 style={{ fontSize: '1rem', marginBottom: '25px', fontWeight: '700' }}>Explore</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li><a href="#">Our Works</a></li>
              <li><a href="#">Subscribed Menu</a></li>
              <li><a href="#">Wholesale</a></li>
              <li><a href="#">Brewing Guides</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 style={{ fontSize: '1rem', marginBottom: '25px', fontWeight: '700' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Locations</a></li>
            </ul>
          </div>
          
          <div className="footer-hours">
            <h4 style={{ fontSize: '1rem', marginBottom: '25px', fontWeight: '700' }}>Hours</h4>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Mon - Fri</span>
                <span>6am - 8pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sat - Sun</span>
                <span>8am - 9pm</span>
              </div>
              <div style={{ marginTop: '10px' }}>
                <div style={{ color: 'var(--white)', fontWeight: '600', marginBottom: '5px' }}>Find a Blend near You</div>
                <a href="#" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>SEE BRANCH LOCATIONS ↗</a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>© 2024 The Daily Brew Coffee Co. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '25px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

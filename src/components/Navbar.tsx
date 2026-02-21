
const Navbar = () => {
  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '20px 0',
      transition: 'var(--transition)',
      backgroundColor: 'rgba(18, 18, 18, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ color: 'var(--primary)' }}>The</span>DailyBrew
        </div>
        
        <ul className="nav-links" style={{
          display: 'flex',
          gap: '40px',
          fontWeight: '500',
          fontSize: '0.95rem'
        }}>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#locations" className="nav-link">Locations</a></li>
          <li><a href="#story" className="nav-link">Our Story</a></li>
        </ul>
        
        <div className="nav-actions" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div className="cart-icon" style={{ cursor: 'pointer', fontSize: '1.2rem' }}>
            🛒
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

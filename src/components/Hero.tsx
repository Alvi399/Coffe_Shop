
const Hero = () => {
  return (
    <section className="hero" style={{
      padding: '160px 0 80px',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div className="hero-content">
          <span style={{
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '20px',
            display: 'block'
          }}>Freshly Roasted Daily</span>
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '30px'
          }}>
            Crafting Your <br />
            <span style={{ color: 'var(--primary)' }}>Perfect Morning</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '40px',
            maxWidth: '500px'
          }}>
            From farm to cup, experience the rich flavors of our ethically sourced, small-batch roasted beans.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '20px' }}>
            <button className="btn btn-primary">Order Now →</button>
            <button className="btn btn-outline">Find a Cafe</button>
          </div>
        </div>
        
        <div className="hero-image" style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            height: '500px',
            background: 'url("https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000") center/cover',
            borderRadius: '24px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
          }}></div>
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '100px',
            height: '100px',
            background: 'var(--primary)',
            borderRadius: '20px',
            zIndex: -1,
            opacity: 0.5
          }}></div>
        </div>
      </div>
      
      {/* Community Status Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.02)',
        padding: '20px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          <div>☕ Proudly serving 5,000+ neighbors every day</div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span>FairTrade</span>
            <span>Organic</span>
            <span>EcoRoast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

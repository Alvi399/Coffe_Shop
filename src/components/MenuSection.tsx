
const products = [
  {
    id: 1,
    name: 'Espresso',
    price: '$3.50',
    description: 'Rich, bold, and intense with a velvety crema. The foundation of everything we do.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    tag: 'BASTSELLER'
  },
  {
    id: 2,
    name: 'Matcha Latte',
    price: '$5.25',
    description: 'Ceremonial grade matcha whisked with creamy steamed milk. Earthy and smooth.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 3,
    name: 'Cold Brew',
    price: '$4.75',
    description: 'Slow-steeped for 18 hours for a smooth, low-acid finish. Served over crystal ice.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    tag: 'LOCAL FAVORITE'
  }
];

const MenuSection = () => {
  return (
    <section id="menu" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
          <div>
            <h2 className="section-title">Our Favorites</h2>
            <p className="section-subtitle">Our community's most-loved signature blends and hand-crafted beverages.</p>
          </div>
          <a href="#full-menu" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '3.5rem' }}>View full menu ↗</a>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {products.map(product => (
            <div key={product.id} className="card">
              <div style={{ position: 'relative', height: '300px' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {product.tag && (
                  <span style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: product.tag === 'BASTSELLER' ? 'var(--primary)' : 'var(--accent-green)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    letterSpacing: '1px'
                  }}>{product.tag}</span>
                )}
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>{product.name}</h3>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem' }}>{product.price}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px' }}>{product.description}</p>
                <button className="btn btn-outline" style={{ width: '100%', padding: '10px' }}>Add to Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

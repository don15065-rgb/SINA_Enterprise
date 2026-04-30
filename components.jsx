// components.jsx — shared chrome (TopNav, Footer, ctas, cards)

const LOGOS = {
  a: 'assets/logo-mark-a.svg',
  b: 'assets/logo-mark-b.svg',
  c: 'assets/logo-mark-c.svg',
};

function TopNav({ active, onNavigate, logoVariant = 'b' }) {
  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" onClick={() => onNavigate('home')}>
            <img src={LOGOS[logoVariant]} alt="SINA Enterprise" style={{ height: 44 }} />
          </a>
          <div className="nav-menu">
            <a className={active === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</a>
            <a className={active === 'services' ? 'active' : ''} onClick={() => onNavigate('services')}>Services</a>
            <a className={active === 'process' ? 'active' : ''} onClick={() => onNavigate('process')}>Process</a>
            <a className={active === 'markets' ? 'active' : ''} onClick={() => onNavigate('markets')}>Markets</a>
            <a className={active === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</a>
          </div>
          <div className="nav-cta">
            <button className="btn-accent" onClick={() => onNavigate('contact')}>Request Quote</button>
          </div>
        </div>
      </nav>
      <hr className="sina-stripe"/>
    </React.Fragment>
  );
}

function Footer({ onNavigate }) {
  return (
    <React.Fragment>
      <hr className="sina-stripe"/>
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-col">
              <h6 style={{ marginBottom: 16, color: '#fff' }}>SINA ENTERPRISE</h6>
              <p style={{ fontSize: 14, color: '#b8bdc4', lineHeight: 1.6, maxWidth: 320 }}>
                Healthcare procurement engineered for precision, speed, and trust. Sourcing medical equipment, consumables, and operational essentials for hospitals, clinics, and supply networks.
              </p>
            </div>
            <div className="foot-col">
              <h6>Navigate</h6>
              <a onClick={() => onNavigate('home')}>Home</a>
              <a onClick={() => onNavigate('services')}>Services</a>
              <a onClick={() => onNavigate('process')}>Process</a>
              <a onClick={() => onNavigate('markets')}>Markets</a>
            </div>
            <div className="foot-col">
              <h6>Capabilities</h6>
              <a onClick={() => onNavigate('services')}>Equipment Sourcing</a>
              <a onClick={() => onNavigate('services')}>Consumable Supply</a>
              <a onClick={() => onNavigate('services')}>Logistics &amp; Delivery</a>
              <a onClick={() => onNavigate('services')}>Compliance &amp; Docs</a>
            </div>
            <div className="foot-col">
              <h6>Reach Us</h6>
              <a>Karachi, Pakistan</a>
              <a href="https://wa.me/923039716823">+92 303 9716823</a>
              <a>contact@sina-enterprise.com</a>
              <a onClick={() => onNavigate('contact')}>Request Quote</a>
            </div>
          </div>
          <div className="foot-bottom">
            <div>SINA Enterprise © 2026. All rights reserved.</div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a style={{ color: '#777d85' }}>Privacy</a>
              <a style={{ color: '#777d85' }}>Terms</a>
              <a style={{ color: '#777d85' }}>Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

function HeroPhotoBand({ eyebrow, headline, sub, photo, primary, secondary, onPrimary, onSecondary }) {
  return (
    <section className="hero">
      <div className="hero-photo" style={{ backgroundImage: `url(${photo})` }} />
      <div className="hero-scrim" />
      <div className="hero-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{headline}</h1>
        {sub && <p className="lead">{sub}</p>}
        <div className="hero-actions">
          {primary && <button className="btn-accent" onClick={onPrimary}>{primary}</button>}
          {secondary && <button className="btn-outline" onClick={onSecondary}>{secondary}</button>}
        </div>
      </div>
    </section>
  );
}

function SpecStrip({ items }) {
  return (
    <div className="spec-strip">
      {items.map((it, i) => (
        <div key={i} className="spec-cell-strip">
          <div className="num">{it.num}{it.unit && <small>{it.unit}</small>}</div>
          <div className="lbl">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

function CTABand({ photo, eyebrow, headline, sub, cta, onCta }) {
  return (
    <section className="cta-band">
      <div className="cta-band-photo" style={{ backgroundImage: `url(${photo})` }} />
      <div className="cta-band-scrim" />
      <div className="cta-band-inner">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{headline}</h2>
          {sub && <p style={{ marginTop: 16, color: '#e6e8eb', maxWidth: 560 }}>{sub}</p>}
        </div>
        {cta && <button className="btn-accent" onClick={onCta} style={{ height: 56, padding: '0 32px' }}>{cta}</button>}
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a className="whatsapp" href="https://wa.me/923039716823" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg>
      WhatsApp
    </a>
  );
}

Object.assign(window, { TopNav, Footer, HeroPhotoBand, SpecStrip, CTABand, WhatsAppButton, LOGOS });

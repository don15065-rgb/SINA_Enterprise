// pages.jsx — page bodies for Home, Services, Process, Markets, Contact

const SERVICES = [
  { num: '01', title: 'Equipment Sourcing.', desc: 'Diagnostic imaging, surgical instruments, and capital equipment from vetted global manufacturers.', items: ['MRI / CT / Ultrasound', 'Surgical instrumentation', 'Patient monitoring', 'Sterilization systems'] },
  { num: '02', title: 'Consumable Supply.', desc: 'High-volume consumables, PPE, and disposables on reliable resupply schedules.', items: ['Surgical disposables', 'PPE & isolation', 'Wound care', 'Syringes & catheters'] },
  { num: '03', title: 'Pharmaceutical Coordination.', desc: 'Cold-chain capable pharmaceutical procurement with full documentation lineage.', items: ['Cold-chain handling', 'Lot traceability', 'Regulatory documentation', 'Direct-from-manufacturer'] },
  { num: '04', title: 'Logistics & Delivery.', desc: 'Customs clearance, last-mile delivery, and installation coordination across Pakistan and the region.', items: ['Air & sea freight', 'Customs clearance', 'Last-mile delivery', 'On-site installation'] },
  { num: '05', title: 'Compliance & Documentation.', desc: 'DRAP, FDA, CE, and ISO documentation handled end-to-end. No gaps, no surprises.', items: ['DRAP registration', 'FDA / CE certificates', 'ISO 13485 chain', 'Country-of-origin'] },
  { num: '06', title: 'Sourcing Advisory.', desc: 'Specification consulting, alternative-product evaluation, and procurement strategy for new facilities.', items: ['Specification review', 'Vendor evaluation', 'Cost optimization', 'New-facility setup'] },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Inquiry.', desc: 'You send a requirement — product, volume, urgency, target spec. We respond within 24 hours with feasibility and timeline.' },
  { num: '02', title: 'Sourcing.', desc: 'We work our verified supplier network across Pakistan, the Gulf, and East Asia. Multiple options. Side-by-side pricing.' },
  { num: '03', title: 'Verification.', desc: 'Documentation, regulatory, country-of-origin. Each shipment goes through a checklist before it leaves the supplier.' },
  { num: '04', title: 'Delivery.', desc: 'Air, sea, road. Customs cleared. Delivered to your facility. Installed where required. Closed out with documentation.' },
];

const MARKETS = [
  { tag: 'Hospitals', title: 'Tertiary care hospitals.', desc: 'Capital equipment programs, OR build-outs, ICU expansion, ongoing consumables.', photo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=80' },
  { tag: 'Clinics', title: 'Primary care & specialty clinics.', desc: 'Equipment fit-outs for new clinics, recurring consumables, refresh cycles.', photo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80' },
  { tag: 'Pharma', title: 'Pharmaceutical distribution.', desc: 'Cold-chain pharmaceuticals, lot-traceable supply, regulatory-clean documentation.', photo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80' },
  { tag: 'NGO', title: 'NGO &amp; humanitarian.', desc: 'Field hospital kits, mobile clinics, rapid-response medical supply for crisis deployments.', photo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80' },
  { tag: 'Government', title: 'Public-sector tenders.', desc: 'Tender-compliant bids, federal &amp; provincial procurement, full audit trail.', photo: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80' },
  { tag: 'Diagnostic', title: 'Diagnostic laboratories.', desc: 'Reagents, lab equipment, calibration consumables on continuous resupply.', photo: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80' },
];

// ─────────────────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────────────────
function HomePage({ navigate }) {
  return (
    <React.Fragment>
      <HeroPhotoBand
        eyebrow="Empowering healthcare."
        headline="More precision. More reliability. More SINA."
        sub="Healthcare procurement engineered for the urgency of clinical operations. Sourcing medical equipment, consumables, and pharmaceutical supply across Pakistan and the region."
        photo="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2400&q=85"
        primary="Request Quote"
        secondary="Explore Services"
        onPrimary={() => navigate('contact')}
        onSecondary={() => navigate('services')}
      />
      <SpecStrip items={[
        { num: '24', unit: 'h', label: 'Response Window' },
        { num: '500', unit: '+', label: 'SKU Catalog' },
        { num: '50', unit: '+', label: 'Verified Suppliers' },
        { num: '12', unit: 'yr', label: 'Procurement Practice' },
      ]}/>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">About SINA</span>
              <h2 style={{ maxWidth: 880 }}>A sharper way to source healthcare essentials.</h2>
            </div>
            <p className="lead">
              We bring discipline to medical procurement. Specification, sourcing, documentation, and delivery — coordinated as one workflow, accountable to one timeline.
            </p>
          </div>
          <div className="grid-3">
            <div className="cell">
              <div className="step-num">PRINCIPLE 01</div>
              <h4>Requirement clarity.</h4>
              <p>We pin down spec, volume, urgency, and acceptable alternatives before we open a single supplier conversation. No drift mid-procurement.</p>
            </div>
            <div className="cell">
              <div className="step-num">PRINCIPLE 02</div>
              <h4>Supplier discipline.</h4>
              <p>A vetted network. Verified manufacturers. Side-by-side bids, every time. The customer sees what we see.</p>
            </div>
            <div className="cell">
              <div className="step-num">PRINCIPLE 03</div>
              <h4>Operational accountability.</h4>
              <p>One owner per inquiry. Transparent follow-up. Documentation closed out before invoice. No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2>What we source.</h2>
            </div>
            <a className="text-link" onClick={() => navigate('services')}>All Services</a>
          </div>
          <div className="grid-3">
            {SERVICES.slice(0, 3).map(s => (
              <div className="cell" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <a className="text-link" onClick={() => navigate('services')}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">The procurement workflow</span>
              <h2>Inquiry to delivery, in four steps.</h2>
            </div>
            <a className="text-link" onClick={() => navigate('process')}>Full Process</a>
          </div>
          <div className="grid-4">
            {PROCESS_STEPS.map(s => (
              <div className="cell" key={s.num} style={{ minHeight: 280 }}>
                <div className="step-num">STEP {s.num}</div>
                <h4 style={{ fontSize: 28 }}>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets preview */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Who we serve</span>
              <h2>Built for the urgency of healthcare.</h2>
            </div>
            <a className="text-link" onClick={() => navigate('markets')}>All Markets</a>
          </div>
          <div className="grid-3">
            {MARKETS.slice(0, 3).map(m => (
              <div className="cell-photo" key={m.tag}>
                <div className="photo-bg" style={{ backgroundImage: `url(${m.photo})` }}/>
                <span className="t-label label">{m.tag}</span>
                <h4 style={{ fontSize: 28, color: '#fff' }} dangerouslySetInnerHTML={{ __html: m.title }}/>
                <p style={{ color: '#e6e8eb', marginTop: 8 }} dangerouslySetInnerHTML={{ __html: m.desc }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        photo="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=85"
        eyebrow="Start the conversation"
        headline="Send a requirement. Get a real answer in 24 hours."
        sub="No forms-without-replies. Every inquiry gets a named owner and a written response within one business day."
        cta="Request Quote"
        onCta={() => navigate('contact')}
      />
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────
function ServicesPage({ navigate }) {
  return (
    <React.Fragment>
      <HeroPhotoBand
        eyebrow="Capabilities"
        headline="Six disciplines. One procurement."
        sub="From specification through to installation. Every category in healthcare procurement, handled by one team with one timeline."
        photo="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2400&q=85"
        primary="Request Quote"
        secondary="See Process"
        onPrimary={() => navigate('contact')}
        onSecondary={() => navigate('process')}
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map(s => (
              <div className="cell" key={s.num} style={{ minHeight: 380 }}>
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 8 }}>
                  {s.items.map(i => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', font: '300 14px/1.5 var(--font-body)', color: '#b8bdc4' }}>
                      <span style={{ width: 6, height: 6, background: 'var(--accent)' }}/>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        photo="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=85"
        eyebrow="Engaging is simple"
        headline="One inquiry. One owner. One timeline."
        cta="Request Quote"
        onCta={() => navigate('contact')}
      />
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────────────────────────────────
function ProcessPage({ navigate }) {
  return (
    <React.Fragment>
      <HeroPhotoBand
        eyebrow="The procurement workflow"
        headline="Engineered. Auditable. Fast."
        sub="Four stages. One owner. Documented at every handoff. The discipline that healthcare buyers ask for and rarely get."
        photo="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2400&q=85"
        primary="Start an Inquiry"
        secondary="See Capabilities"
        onPrimary={() => navigate('contact')}
        onSecondary={() => navigate('services')}
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {PROCESS_STEPS.map((s, i) => (
              <div className="cell" key={s.num} style={{ minHeight: 360, padding: 'var(--space-xxl)' }}>
                <div className="step-num" style={{ fontSize: 64, color: 'var(--accent)', letterSpacing: -2, marginBottom: 24 }}>{s.num}</div>
                <h3 style={{ fontSize: 36 }}>{s.title}</h3>
                <p style={{ marginTop: 16, fontSize: 16, maxWidth: 460 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spec stats */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">By the numbers</span>
              <h2>The discipline, quantified.</h2>
            </div>
          </div>
          <SpecStrip items={[
            { num: '24', unit: 'h', label: 'First Response' },
            { num: '72', unit: 'h', label: 'Bid Window' },
            { num: '100', unit: '%', label: 'Documentation' },
            { num: '0', label: 'Surprises' },
          ]}/>
        </div>
      </section>

      <CTABand
        photo="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2400&q=85"
        eyebrow="Start an inquiry"
        headline="Tell us what you need. Hear back within 24 hours."
        cta="Request Quote"
        onCta={() => navigate('contact')}
      />
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// MARKETS
// ─────────────────────────────────────────────────────────────────────────
function MarketsPage({ navigate }) {
  return (
    <React.Fragment>
      <HeroPhotoBand
        eyebrow="Who we serve"
        headline="Six markets. One standard."
        sub="Hospitals, clinics, pharma distribution, NGO supply, public-sector tenders, diagnostic labs. Same discipline. Same accountability. Same response window."
        photo="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=2400&q=85"
        primary="Request Quote"
        secondary="See Process"
        onPrimary={() => navigate('contact')}
        onSecondary={() => navigate('process')}
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {MARKETS.map(m => (
              <div className="cell-photo" key={m.tag} style={{ minHeight: 440 }}>
                <div className="photo-bg" style={{ backgroundImage: `url(${m.photo})` }}/>
                <span className="t-label label">{m.tag}</span>
                <h4 style={{ fontSize: 32, color: '#fff' }} dangerouslySetInnerHTML={{ __html: m.title }}/>
                <p style={{ color: '#e6e8eb', marginTop: 12 }} dangerouslySetInnerHTML={{ __html: m.desc }}/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        photo="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=85"
        eyebrow="Coverage"
        headline="Pakistan-based. Regionally networked."
        sub="Karachi headquartered, with verified supply lanes through the Gulf, East Asia, and Europe. Cleared customs, verified documentation, delivered facility-side."
        cta="Request Quote"
        onCta={() => navigate('contact')}
      />
    </React.Fragment>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────
function ContactPage({ navigate }) {
  const [sent, setSent] = React.useState(false);
  return (
    <React.Fragment>
      <HeroPhotoBand
        eyebrow="Request a quote"
        headline="Send a requirement. Get a real answer."
        sub="Describe what you need — product, volume, urgency. We respond within 24 hours with feasibility, options, and timeline."
        photo="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=85"
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64 }}>
            {/* Contact details */}
            <div>
              <span className="eyebrow">Reach us directly</span>
              <h3 style={{ fontSize: 40 }}>Karachi. Always on.</h3>
              <p style={{ marginTop: 24, fontSize: 16, maxWidth: 420 }}>
                The fastest path to an answer is a direct message on WhatsApp. For tenders, formal RFPs, and document-heavy inquiries, use the form.
              </p>
              <div style={{ marginTop: 48, display: 'grid', gap: 1, background: 'var(--hairline)', border: '1px solid var(--hairline)' }}>
                <div style={{ background: 'var(--canvas)', padding: 24 }}>
                  <div className="t-label" style={{ color: 'var(--muted)', marginBottom: 8 }}>WhatsApp</div>
                  <a href="https://wa.me/923039716823" style={{ font: '700 22px/1.3 var(--font-display)', color: 'var(--accent)' }}>+92 303 9716823</a>
                </div>
                <div style={{ background: 'var(--canvas)', padding: 24 }}>
                  <div className="t-label" style={{ color: 'var(--muted)', marginBottom: 8 }}>Email</div>
                  <a style={{ font: '700 22px/1.3 var(--font-display)', color: '#fff' }}>contact@sina-enterprise.com</a>
                </div>
                <div style={{ background: 'var(--canvas)', padding: 24 }}>
                  <div className="t-label" style={{ color: 'var(--muted)', marginBottom: 8 }}>Office</div>
                  <div style={{ font: '300 16px/1.5 var(--font-body)', color: 'var(--body-strong)' }}>Karachi, Sindh<br/>Pakistan</div>
                </div>
                <div style={{ background: 'var(--canvas)', padding: 24 }}>
                  <div className="t-label" style={{ color: 'var(--muted)', marginBottom: 8 }}>Hours</div>
                  <div style={{ font: '300 16px/1.5 var(--font-body)', color: 'var(--body-strong)' }}>Monday — Saturday<br/>09:00 — 19:00 PKT</div>
                </div>
              </div>
            </div>
            {/* Form */}
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ background: 'var(--surface-soft)', padding: 48 }}>
              {sent ? (
                <div style={{ display: 'grid', gap: 16, minHeight: 540, alignContent: 'center' }}>
                  <div className="step-num" style={{ color: 'var(--accent)' }}>RECEIVED</div>
                  <h3 style={{ fontSize: 40 }}>Inquiry received.</h3>
                  <p style={{ fontSize: 16, maxWidth: 420 }}>A SINA Enterprise procurement owner will respond within 24 hours with feasibility, options, and timeline.</p>
                  <button type="button" className="btn-outline" style={{ marginTop: 24, width: 'fit-content' }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <div style={{ display: 'grid', gap: 24 }}>
                  <span className="eyebrow" style={{ marginBottom: 0 }}>Inquiry form</span>
                  <h4>Tell us what you need.</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="field"><label>Name</label><input className="input" placeholder="Full name" required/></div>
                    <div className="field"><label>Organization</label><input className="input" placeholder="Hospital / clinic / company" required/></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="field"><label>Email</label><input type="email" className="input" placeholder="you@org.com" required/></div>
                    <div className="field"><label>Phone</label><input className="input" placeholder="+92 ..."/></div>
                  </div>
                  <div className="field">
                    <label>Category</label>
                    <select className="input" defaultValue="">
                      <option value="" disabled>Select a category</option>
                      <option>Capital equipment</option>
                      <option>Surgical / consumables</option>
                      <option>Pharmaceutical</option>
                      <option>PPE / disposables</option>
                      <option>Diagnostic / lab</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Requirement</label>
                    <textarea className="textarea" placeholder="Describe what you need — product, volume, urgency, target spec." required/>
                  </div>
                  <button className="btn-accent" type="submit" style={{ height: 56, marginTop: 8 }}>Submit Inquiry</button>
                  <p className="t-caption" style={{ color: 'var(--muted)' }}>By submitting, you agree to be contacted by SINA Enterprise about this request. We do not share inquiries with third parties.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, ServicesPage, ProcessPage, MarketsPage, ContactPage, SERVICES, PROCESS_STEPS, MARKETS });

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    { url: '/images/photo1.jpg', title: 'Building Facade' },
    { url: '/images/photo2.jpg', title: 'Interior Space' },
    { url: '/images/photo3.jpg', title: 'Commercial Floor' },
  ];

  const brand = {
    bg:         '#0B0E14',
    surface:    '#111520',
    surface2:   '#161B27',
    border:     'rgba(255,255,255,0.07)',
    borderGold: 'rgba(180,144,60,0.35)',
    gold:       '#B4903C',
    goldLight:  '#CBA84E',
    white:      '#F0EDE8',
    dim:        '#7E8597',
    muted:      '#4A4F62',
  };

  return (
    <div className="app" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: brand.bg, color: brand.white, minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'nav-scroll' : ''}`} style={{ padding: '20px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ lineHeight: 1 }}>
          <div className="sans gold-text" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.18em' }}>R.J. GRERO</div>
          <div className="sans muted-text" style={{ fontSize: '9px', letterSpacing: '0.22em', marginTop: '3px', textTransform: 'uppercase' }}>Property Advisory</div>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn-ghost sans" onClick={() => setShowGallery(true)} style={{ padding: '9px 20px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Gallery</button>
          <button className="btn-gold sans" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} style={{ padding: '10px 22px', border: 'none', cursor: 'pointer', fontSize: '10px', letterSpacing: '0.18em', fontWeight: 600, textTransform: 'uppercase' }}>Enquire</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div className="hero-overlay-1" style={{ background: `linear-gradient(135deg, ${brand.bg} 0%, rgba(11,14,20,0.55) 60%, rgba(11,14,20,0.2) 100%)` }} />
        <div className="hero-overlay-2" />
        <img src={images[0].url} alt="Rosmead Place" className="hero-img" />
        <div style={{ position: 'absolute', top: '120px', left: '56px', width: '1px', height: '60px', background: brand.gold, opacity: 0.6 }} />

        <div className="fade-up" style={{ position: 'relative', zIndex: 10, padding: '0 80px 88px', maxWidth: '900px' }}>
          <div className="sans gold-text label-row" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '22px' }}>
            <span className="label-line" style={{ background: brand.gold }} />
            Income Asset · Rosmead Place, Colombo 7
          </div>
          <h1 style={{ fontSize: 'clamp(46px, 6.5vw, 82px)', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.02em', marginBottom: '36px' }}>
            Prime Commercial<br />
            <em style={{ fontStyle: 'italic', color: brand.goldLight }}>Income Generator</em>
          </h1>
          <div className="hero-meta" style={{ marginBottom: '52px' }}>
            <div>
              <div className="sans dim-text meta-label">Asking Price</div>
              <div style={{ fontSize: 'clamp(26px, 3.8vw, 46px)', fontWeight: 300, letterSpacing: '-0.02em' }}>
                LKR 300 M
                <span className="sans muted-text" style={{ fontSize: '13px', marginLeft: '10px', letterSpacing: '0.12em' }}>ONO</span>
              </div>
            </div>
            <div className="meta-divider" style={{ background: brand.border }} />
            <div>
              <div className="sans dim-text meta-label">Gross Yield</div>
              <div style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 300 }}>
                12.5%<span className="sans muted-text" style={{ fontSize: '13px', marginLeft: '8px', letterSpacing: '0.1em' }}>p.a.</span>
              </div>
            </div>
            <div className="meta-divider" style={{ background: brand.border }} />
            <div>
              <div className="sans dim-text meta-label">Monthly Income</div>
              <div style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 300 }}>LKR 2 M</div>
            </div>
          </div>
          <div className="fade-up-d1 hero-cta">
            <button className="btn-gold sans" onClick={() => setShowGallery(true)} style={{ padding: '15px 36px', border: 'none', cursor: 'pointer', fontSize: '10px', letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase' }}>
              View Gallery
            </button>
            <button className="btn-ghost sans" onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })} style={{ padding: '15px 36px', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Asset Details
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: brand.surface, borderTop: `1px solid ${brand.border}`, borderBottom: `1px solid ${brand.border}` }}>
        <div className="stats-grid" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          {[
            { val: '8,000', unit: 'sqft', label: 'Commercial Floor Area' },
            { val: '12.5', unit: '%', label: 'Gross Annual Yield' },
            { val: '2M', unit: 'LKR', label: 'Monthly Income' },
            { val: 'Col 7', unit: '', label: 'Colombo Prime Address' },
          ].map((s, i) => (
            <div key={i} className="stat-card" style={{
              padding: '44px 36px',
              borderRight: i < 3 ? `1px solid ${brand.border}` : 'none',
              borderLeft: i === 0 ? `2px solid ${brand.gold}` : 'none'
            }}>
              <div style={{ fontSize: '40px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1 }}>
                {s.val}<span className="gold-text sans" style={{ fontSize: '18px', fontWeight: 500 }}>{s.unit}</span>
              </div>
              <div className="sans dim-text" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: '10px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROPERTY DETAILS ── */}
      <section id="details" className="details-grid" style={{ maxWidth: '1160px', margin: '0 auto', padding: '112px 56px' }}>
        <div>
          <div className="sans gold-text label-row" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span className="label-line" style={{ background: brand.gold }} />
            About the Asset
          </div>
          <h2 style={{ fontSize: '44px', fontWeight: 300, lineHeight: 1.12, marginBottom: '32px', letterSpacing: '-0.015em' }}>
            A Fully Tenanted<br /><em>Colombo 7 Commercial Asset</em>
          </h2>
          <p className="sans dim-text" style={{ fontSize: '13px', lineHeight: 1.95, fontWeight: 300, marginBottom: '20px' }}>
            Positioned on Rosmead Place in Colombo's most prestigious commercial and residential corridor, this 8,000 sq.ft commercial building delivers immediate, verified income at 12.5% gross yield — one of the highest risk-adjusted returns available in Colombo prime today.
          </p>
          <p className="sans dim-text" style={{ fontSize: '13px', lineHeight: 1.95, fontWeight: 300, marginBottom: '40px' }}>
            LKR 2,000,000 in confirmed monthly income. Fully operational asset with structured tenancy. Immediate yield from day one. No stabilisation period required.
          </p>
          <div style={{ padding: '24px 28px', background: brand.surface2, borderLeft: `2px solid ${brand.gold}`, borderRadius: '2px' }}>
            <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '10px' }}>Advisory Note</div>
            <p className="sans dim-text" style={{ fontSize: '12px', lineHeight: 1.75, fontWeight: 300 }}>
              This listing is managed on a buyer-first mandate. All enquiries handled directly — no third-party agent flow. Financials and tenancy documentation available to qualified parties under NDA.
            </p>
          </div>
        </div>

        <div>
          <div className="sans gold-text label-row" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span className="label-line" style={{ background: brand.gold }} />
            Asset Specifications
          </div>
          <div style={{ fontSize: '14px' }}>
            {[
              ['Property Type',    'Commercial Building'],
              ['Floor Area',       '8,000 sq.ft'],
              ['Location',         'Rosmead Place, Colombo 7'],
              ['Tenure',           'Freehold'],
              ['Asking Price',     'LKR 300,000,000 (ONO)'],
              ['Monthly Income',   'LKR 2,000,000'],
              ['Gross Yield',      '12.5% per annum'],
              ['Income Status',    'Fully Tenanted · Income Verified'],
            ].map(([k, v], i) => (
              <div key={i} className="spec-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 8px' }}>
                <span className="sans muted-text" style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontSize: '14px', fontWeight: 400, textAlign: 'right', color: brand.white }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ padding: '0 56px 112px', maxWidth: '1160px', margin: '0 auto' }}>
        <div className="gallery-header" style={{ marginBottom: '36px' }}>
          <div>
            <div className="sans gold-text label-row" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '12px' }}>
              <span className="label-line" style={{ background: brand.gold }} />
              Photo Gallery
            </div>
            <h3 style={{ fontSize: '38px', fontWeight: 300, letterSpacing: '-0.01em' }}>Property Perspectives</h3>
          </div>
          <button className="btn-ghost sans" onClick={() => setShowGallery(true)} style={{ padding: '11px 22px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Full Gallery
          </button>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className={`thumb-wrap ${i === 0 ? 'thumb-wide' : ''}`} onClick={() => { setCurrentImgIndex(i); setShowGallery(true); }}
              style={{ background: brand.surface2, position: 'relative' }}>
              <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="thumb-label" style={{ position: 'absolute', bottom: '14px', left: '14px', background: 'rgba(11,14,20,0.82)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderLeft: `2px solid ${brand.gold}` }}>
                <span className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INVESTMENT RATIONALE ── */}
      <section style={{ background: brand.surface, borderTop: `1px solid ${brand.border}`, padding: '112px 56px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '16px' }}>Investment Rationale</div>
            <h2 style={{ fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em' }}>Why This Asset <em>Performs</em></h2>
          </div>
          <div className="inv-grid">
            {[
              {
                n: '01',
                title: 'Immediate Yield',
                body: 'At 12.5% gross yield, this asset delivers one of the highest verified income returns in Colombo prime commercial real estate. No lease-up risk. Income active from settlement.'
              },
              {
                n: '02',
                title: 'Colombo 7 Premium',
                body: 'Rosmead Place sits at the apex of Colombo\'s most coveted address — diplomatic belt, institutional demand, and structurally constrained supply. Capital values here are defended by geography.'
              },
              {
                n: '03',
                title: 'Capital Appreciation',
                body: 'Colombo 7 commercial assets have demonstrated sustained appreciation across economic cycles. The combination of yield plus land value growth creates a dual-engine return profile.'
              },
            ].map((item, i) => (
              <div key={i} className="inv-card" style={{ padding: '48px 40px', background: brand.surface2 }}>
                <div className="sans gold-text" style={{ fontSize: '11px', letterSpacing: '0.3em', marginBottom: '22px' }}>{item.n}</div>
                <h4 style={{ fontSize: '24px', fontWeight: 300, marginBottom: '18px', lineHeight: 1.2 }}>{item.title}</h4>
                <p className="sans dim-text" style={{ fontSize: '12px', lineHeight: 1.85, fontWeight: 300 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCOME STRIP ── */}
      <section style={{ background: brand.surface2, borderTop: `1px solid ${brand.borderGold}`, borderBottom: `1px solid ${brand.borderGold}`, padding: '40px 56px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '8px' }}>Verified Income Position</div>
            <p className="sans dim-text" style={{ fontSize: '12px', fontWeight: 300 }}>LKR 2,000,000 monthly · 12.5% gross yield · Tenancy documentation available under NDA</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="sans gold-text" style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '-0.01em' }}>LKR 24M</div>
            <div className="sans muted-text" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: '4px' }}>Annual Income</div>
          </div>
        </div>
      </section>

      {/* ── RISK CONTROL STRIP ── */}
      <section style={{ background: brand.bg, borderBottom: `1px solid ${brand.border}`, padding: '36px 56px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '8px' }}>Risk Control Protocol</div>
            <p className="sans dim-text" style={{ fontSize: '12px', fontWeight: 300 }}>Full due diligence · Title verification · Income verification · Independent valuation · Legal coordination</p>
          </div>
          <a href="https://www.rjgrero.com/risk-control" target="_blank" rel="noreferrer" className="btn-ghost sans"
            style={{ padding: '11px 24px', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
            View Protocol →
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '120px 56px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '20px' }}>Private Enquiry</div>
        <div style={{ width: '40px', height: '1px', background: '#B4903C', margin: '0 auto 44px' }} />
        <h2 style={{ fontSize: 'clamp(38px, 5vw, 58px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
          Request the<br /><em>Investment Memorandum</em>
        </h2>
        <p className="sans dim-text" style={{ fontSize: '13px', lineHeight: 1.9, maxWidth: '480px', margin: '0 auto 60px', fontWeight: 300 }}>
          Full financials, tenancy structure, and due diligence pack available to qualified buyers. All enquiries handled directly by the advisory.
        </p>
        <div className="contact-row" style={{ marginBottom: '72px' }}>
          <a href="tel:+94777987150" className="contact-link">
            <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '10px' }}>Telephone</div>
            <div style={{ fontSize: '24px', fontWeight: 300 }}>+94 77 7987 150</div>
          </a>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.07)' }} />
          <a href="mailto:rehan@rjgrero.com" className="contact-link">
            <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '10px' }}>Direct Email</div>
            <div style={{ fontSize: '24px', fontWeight: 300 }}>rehan@rjgrero.com</div>
          </a>
        </div>
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />
        <div className="sans muted-text" style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: '28px' }}>
          R.J. Grero Property Advisory · Conflict-Free Buyer Representation · Colombo, Sri Lanka
        </div>
      </section>

      {/* ── GALLERY MODAL ── */}
      {showGallery && (
        <div className="modal-in modal-overlay">
          <button onClick={() => setShowGallery(false)} className="btn-ghost sans modal-close" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
            Close
          </button>
          <div className="modal-inner">
            <button className="modal-arrow sans" onClick={() => setCurrentImgIndex((p) => (p - 1 + images.length) % images.length)}>‹</button>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <img src={images[currentImgIndex].url} className="modal-img" alt="" />
              <div style={{ marginTop: '30px' }}>
                <div className="sans gold-text" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  {currentImgIndex + 1} / {images.length}
                </div>
                <div style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.01em' }}>{images[currentImgIndex].title}</div>
              </div>
            </div>
            <button className="modal-arrow sans" onClick={() => setCurrentImgIndex((p) => (p + 1) % images.length)}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

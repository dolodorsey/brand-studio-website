'use client';
import { useEffect, useState } from 'react';

const S = 'https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics';

const SERVICES = [
  { num: '01', title: 'Brand Architecture', desc: 'Naming, positioning, identity systems, and multi-brand portfolio strategy from single concept to empire.' },
  { num: '02', title: 'Creative Direction', desc: 'Visual identity, photography direction, video production, and cohesive brand aesthetics across all touchpoints.' },
  { num: '03', title: 'Marketing Strategy', desc: 'Go-to-market plans, audience segmentation, campaign calendars, and performance marketing frameworks.' },
  { num: '04', title: 'Digital Presence', desc: 'Award-level websites, social media engines, email marketing systems, and content production pipelines.' },
  { num: '05', title: 'Campaign Execution', desc: 'End-to-end campaign management — from concept to creative to media buying to performance reporting.' },
  { num: '06', title: 'AI & Automation', desc: '198-agent infrastructure, automated content systems, CRM pipelines, and fully autonomous marketing operations.' },
];

const CLIENTS = [
  'HugLife Events', 'Casper Group', 'Forever Futbol', 'Good Times', 'Mind Studio',
  'NOIR', 'Taste of Art', 'REMIX', 'Infinity Water', 'Pronto Energy',
  'MAGA', 'Stush', 'Bodega', 'Angel Wings', 'WRST BHVR',
];

export default function Home() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => { setTimeout(() => setPreloaderVisible(false), 2200); }, []);
  useEffect(() => {
    const h = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => {
    const o = new IntersectionObserver((e) => e.forEach((el) => { if (el.isIntersecting) el.target.classList.add('visible'); }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);

  const navLinks = [
    { label: 'services', href: '#services' },
    { label: 'work', href: '#work' },
    { label: 'approach', href: '#approach' },
    { label: 'connect', href: '#connect' },
  ];

  const css = (s) => s;

  return (
    <>
      <div className={`
      .grain-overlay::after { content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9998; opacity: 0.04; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

      @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.08); } }
      @keyframes pulse { 0%,100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
preloader ${!preloaderVisible ? 'hidden' : ''}`}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 300, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--light)', marginBottom: 12 }}>Brand Studio</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', opacity: 0.6 }}>The Kollective Hospitality Group</div>
      </div>

      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setMobileNavOpen(false)}>{l.label}</a>)}
      </div>

      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Brand Studio</a>
        <ul className="nav-links">
          {navLinks.map((l) => <li key={l.label}><a href={l.href} className="nav-link">{l.label}</a></li>)}
        </ul>
        <button className="mob-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)}><span /><span /><span /></button>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/website/rooftop-lounge.jpg" alt="" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.2,animation:"slowZoom 20s ease-in-out infinite alternate",zIndex:0}} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src={`${S}/dr_dorsey/website/hero-bg.jpg`} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, background: 'linear-gradient(180deg, rgba(10,10,15,0.4) 0%, rgba(10,10,15,0.05) 35%, rgba(10,10,15,0.05) 55%, rgba(10,10,15,0.8) 85%, #0A0A0F 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 650, padding: '0 clamp(20px, 4vw, 80px)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20, animation: 'fadeUp 0.8s var(--ease-out) 1.8s both' }}>Brand Development & Marketing</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', animation: 'fadeUp 1s var(--ease-out) 2s both' }}>
            We don't build brands.<br />We build <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>movements.</em>
          </h1>
          <a href="#services" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '14px 40px', marginTop: 40, animation: 'fadeUp 0.8s var(--ease-out) 2.4s both', transition: 'all 0.3s' }}>See Our Work</a>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', zIndex: 3, opacity: 0.4 }} />
      </section>

      {/* THESIS */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--accent)' }}>The Agency</div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 32 }}>Strategy. Creative. <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Execution.</em></h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s', maxWidth: 700 }}>
            <p style={{ fontSize: 'clamp(15px, 1.4vw, 19px)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 48 }}>
              The Brand Studio is the creative and strategic engine behind The Kollective Hospitality Group's 57+ brands. We don't just design logos — we architect brand ecosystems that scale across markets, mediums, and moments. From AI-powered content engines to award-level websites, we build the infrastructure that turns ideas into empires.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div style={{ display: 'flex', gap: 56, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              {[{ n: '57+', l: 'Brands Built' }, { n: '198', l: 'AI Agents' }, { n: '48K+', l: 'Contacts Managed' }, { n: '34', l: 'Departments' }].map((s) => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: 'clamp(40px, 5vw, 80px) clamp(20px, 4vw, 80px)' }} id="services">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4.5vw, 56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 48 }}>What we <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>build.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
            {SERVICES.map((s, i) => (
              <div key={s.num} className="reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div style={{ background: 'rgba(245,240,232,0.02)', border: '1px solid var(--border-subtle)', padding: 'clamp(28px, 3vw, 44px)', transition: 'all 0.4s', cursor: 'pointer', position: 'relative', overflow: 'hidden', height: '100%' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(232,89,60,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 6vw, 80px)', fontWeight: 300, color: 'rgba(232,89,60,0.08)', position: 'absolute', top: -8, right: 12, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, marginBottom: 12, position: 'relative' }}>{s.title}</div>
                  <div style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'var(--text-secondary)', lineHeight: 1.75, position: 'relative' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC BREAK */}
      <div style={{ position: 'relative', height: 'clamp(250px, 35vw, 400px)', overflow: 'hidden' }}>
        <img src={`${S}/dr_dorsey/website/luxury-venue.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, #0A0A0F 0%, transparent 25%, transparent 75%, #0A0A0F 100%)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 clamp(40px, 6vw, 120px)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3.5vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)', maxWidth: 550, lineHeight: 1.3 }}>
            "We built the system that builds the brands."
          </div>
        </div>
      </div>

      {/* BRAND LOGOS — WORK */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)', background: 'var(--light)', color: '#0A0A0F' }} id="work">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4.5vw, 56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 12, color: '#0A0A0F' }}>Brands we've <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>built.</em></h2>
            <p style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', color: 'rgba(10,10,15,0.45)', lineHeight: 1.7, marginBottom: 48, maxWidth: 500 }}>Every brand below was architected, designed, and launched by The Brand Studio.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CLIENTS.map((c) => (
                <span key={c} style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(9px, 0.8vw, 11px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(10,10,15,0.55)', border: '1px solid rgba(10,10,15,0.1)', padding: '8px 16px', transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(10,10,15,0.1)'; e.currentTarget.style.color = 'rgba(10,10,15,0.55)'; }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)' }} id="connect">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal">
            <div style={{ width: 40, height: 1, background: 'var(--accent)', margin: '0 auto 16px' }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>Let's build your <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>empire.</em></h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <p style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 48px' }}>
              Brand architecture, marketing systems, AI automation, creative direction — everything your brand needs to scale, under one studio.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:thekollectivehospitality@gmail.com?subject=Brand Studio Inquiry" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#0A0A0F', background: 'var(--accent)', padding: '14px 36px', transition: 'all 0.3s' }}>Start a Project</a>
              <a href="https://instagram.com/dolodorsey" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)', padding: '14px 36px', border: '1px solid rgba(245,240,232,0.2)' }}>@dolodorsey</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px clamp(20px, 4vw, 80px)', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>© 2026 The Brand Studio — The Kollective Hospitality Group</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="https://instagram.com/dolodorsey" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.1em', color: 'var(--text-muted)', transition: 'color 0.3s' }}>Instagram</a>
          <a href="https://doctordorsey.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.1em', color: 'var(--text-muted)', transition: 'color 0.3s' }}>Dr. Dorsey</a>
        </div>
      </footer>

      <style jsx global>{`
        @media (max-width: 1024px) {
          section [style*="grid-template-columns: repeat(3"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          section [style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          section [style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
          footer { flex-direction: column; text-align: center; }
        }
      `}</style>
    </>
  );
}

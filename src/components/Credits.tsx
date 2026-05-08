export default function Credits() {
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px,8vw,96px) clamp(20px,5vw,48px)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 65%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 18, 48, 0.82)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6b42cc', marginBottom: '16px' }}>
            Want to collaborate?
          </p>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 6vw, 72px)', textTransform: 'uppercase', color: 'white', lineHeight: 0.95, marginBottom: '24px' }}>
            Let's make this real.
          </h2>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: '440px', margin: '0 auto 36px' }}>
            My Nebraska is an 11-song concept album looking for the right collaborators — producers, composers, artists, or anyone who hears something here.
          </p>
          <a href="mailto:gmarkant@gmail.com?subject=My Nebraska Collaboration" style={{ display: 'inline-block', border: '1px solid rgba(107,66,204,0.7)', padding: '14px 40px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '14px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'white', textDecoration: 'none' }}>
            Get in touch
          </a>
        </div>
      </section>
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 65%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 15, 5, 0.52)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'right', padding: '48px', maxWidth: '320px' }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '22px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(240,220,190,0.9)', marginBottom: '6px' }}>
            Lyrics by
          </p>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '32px', textTransform: 'uppercase', color: 'rgba(240,220,190,1)', marginBottom: '16px' }}>
            <span style={{fontFamily: "'Teko', sans-serif", fontWeight: 300, fontSize: '38px', letterSpacing: '0.06em'}}>MARKANT</span>
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(240,220,190,0.6)', marginBottom: '4px' }}>
            gmarkant@gmail.com
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(240,220,190,0.6)', marginBottom: '32px' }}>
            +1 (585) 301-8769
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.15em', color: 'rgba(240,220,190,0.35)' }}>
            © 2026 Greg Markant · All rights reserved
          </p>
        </div>
      </section>
    </>
  )
}

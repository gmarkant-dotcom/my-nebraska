export default function Cover() {
  return (
    <section id="cover" style={{ position: 'relative', height: '100vh', minHeight: '500px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 18, 48, 0.15)' }} />
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', padding: '8vh clamp(16px,4vw,48px) 0 clamp(16px,4vw,48px)' }}>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(60px, 11.5vw, 999px)', lineHeight: 0.88, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#6b42cc', textShadow: '2px 2px 0 rgba(0,0,0,0.35)', width: '100%', whiteSpace: 'nowrap', textAlign: 'center' }}>
          MY NEBRASKA
        </h1>
        <p style={{ fontFamily: "'DM Mono', monospace", fontWeight: 900, fontSize: '13px', letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#6b42cc', textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)', textAlign: 'right', width: '100%', marginTop: '8px', paddingRight: '22vw' }}>
          A concept album &nbsp;·&nbsp; Lyrics by MARKANT
        </p>
      </div>
    </section>
  )
}

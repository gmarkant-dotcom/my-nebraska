import type { Song as SongType } from '../data/songs'

interface SongProps { song: SongType }

export default function Song({ song }: SongProps) {
  return (
    <section id={song.id} style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(107,66,204,0.10)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 55%' }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(10,18,48,0.88) 0%, ${song.overlayColor} 25%, ${song.overlayColor} 100%)` }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto', padding: 'clamp(40px,8vw,80px) clamp(20px,5vw,48px) clamp(48px,10vw,96px)', textAlign: 'center' }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6b42cc', opacity: 0.7, marginBottom: '10px' }}>
          Track {song.number}
        </p>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.9, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'white', marginBottom: '52px', textAlign: 'center', textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
          {song.title}
        </h2>
        <div>
          {song.lyrics.map((stanza, i) => (
            <div key={i} style={{ marginBottom: stanza.type === 'outro' ? '0' : '28px' }}>
              {stanza.lines.map((line, j) => (
                <p key={j} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: stanza.type === 'bridge' || stanza.type === 'outro' ? '15px' : '17px', lineHeight: 1.9, color: 'rgba(255,255,255,0.92)', letterSpacing: '0.01em', textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

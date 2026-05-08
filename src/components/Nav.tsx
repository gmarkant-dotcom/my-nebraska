import { useState, useEffect } from 'react'
import { SONGS } from '../data/songs'

export default function Nav() {
  const [visible, setVisible] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SONGS.forEach((song) => {
      const el = document.getElementById(song.id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(song.id) },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10, 18, 48, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(107,66,204,0.25)', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(16px,3vw,48px)', transform: visible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease' }}>
      <a href="#cover" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b42cc', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, marginRight: '24px' }}>
        My Nebraska
      </a>
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          {SONGS.map((song) => (
            <a key={song.id} href={'#' + song.id} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', padding: '0 10px', whiteSpace: 'nowrap', color: activeId === song.id ? 'white' : 'rgba(255,255,255,0.40)', transition: 'color 0.2s' }}>
              {song.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

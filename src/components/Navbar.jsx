import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/',          label: '홈' },
  { to: '/about',     label: '회사소개' },
  { to: '/services',  label: '사업분야' },
  { to: '/projects',  label: '시공실적' },
  { to: '/contact',   label: '문의' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location  = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-h)',
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--transition)',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-fire) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-fire)', flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff', fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>local_fire_department</span>
          </div>
          <div style={{ lineHeight: 1.3 }}>
            <div style={{ color: 'var(--text-1)', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '-0.01em' }}>플레임가드 엔지니어링</div>
            <div style={{ color: 'var(--text-3)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Flameguard Engineering</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="hidden md:flex">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                padding: '7px 15px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all var(--transition)',
                color: isActive(link.to) ? '#fff' : 'var(--text-2)',
                background: isActive(link.to) ? 'var(--brand-blue)' : 'transparent',
              }}
              onMouseEnter={e => { if (!isActive(link.to)) { e.target.style.color = 'var(--text-1)'; e.target.style.background = 'var(--bg-card)' } }}
              onMouseLeave={e => { if (!isActive(link.to)) { e.target.style.color = 'var(--text-2)'; e.target.style.background = 'transparent' } }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={isDark ? '라이트 모드' : '다크 모드'}
            style={{
              width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-2)',
              cursor: 'pointer',
              transition: 'all var(--transition)',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--brand-fire)'; e.currentTarget.style.borderColor = 'var(--border-active)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 17 }}>
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* CTA */}
          <Link to="/contact" className="btn-fire hidden md:inline-flex" style={{ padding: '9px 20px', fontSize: '0.84rem' }}>
            견적 문의
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(p => !p)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: 8,
              color: 'var(--text-1)',
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 5,
            }}
            aria-label="메뉴"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 20, height: 2,
                background: 'var(--text-1)', borderRadius: 2,
                transition: 'all var(--transition)',
                transform: isOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: i === 1 && isOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, top: 'var(--nav-h)',
            background: 'var(--bg-1)',
            zIndex: 999,
            display: 'flex', flexDirection: 'column',
            padding: 24, gap: 8,
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setIsOpen(false)}
        >
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block', padding: '14px 18px',
                borderRadius: 'var(--radius)',
                fontSize: '1.05rem', fontWeight: 500,
                textDecoration: 'none',
                color: isActive(link.to) ? 'var(--brand-fire)' : 'var(--text-2)',
                background: isActive(link.to) ? 'var(--bg-card)' : 'transparent',
                border: '1px solid',
                borderColor: isActive(link.to) ? 'var(--border-active)' : 'transparent',
                transition: 'all var(--transition)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
            <button
              onClick={(e) => { e.stopPropagation(); toggleTheme() }}
              style={{
                flex: 1, padding: '12px', borderRadius: 'var(--radius)',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                color: 'var(--text-2)', cursor: 'pointer', fontSize: '0.9rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                fontFamily: 'inherit',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 17 }}>
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              {isDark ? '라이트 모드' : '다크 모드'}
            </button>
            <Link
              to="/contact"
              className="btn-fire"
              style={{ flex: 1, justifyContent: 'center', borderRadius: 'var(--radius)' }}
              onClick={e => e.stopPropagation()}
            >
              견적 문의
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'

const projects = [
  // 실적 데이터 추가 예정
]

export default function Projects() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Hero */}
      <section style={{ background: 'var(--gradient-hero)', padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="sec-label" style={{ justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>apartment</span>
            시공실적
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            플레임가드 엔지니어링의<br />
            <span style={{ background: 'var(--gradient-fire)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>주요 설계 실적</span>
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>신뢰할 수 있는 소방설비 설계 및 감리 사례</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          {projects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 24px' }}>
              <div style={{
                width: 88, height: 88, borderRadius: '50%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--text-3)', fontVariationSettings: "'FILL' 0, 'wght' 200" }}>apartment</span>
              </div>
              <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-1)', marginBottom: 10 }}>실적 준비 중</h2>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 28, maxWidth: 360, margin: '0 auto 28px' }}>
                2026년 5월 개업 이후 축적되는 시공 실적을<br />이곳에서 확인하실 수 있습니다.
              </p>
              <Link to="/contact" className="btn-fire">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                설계 문의하기
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {projects.map((project, i) => (
                <div key={i} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ height: 160, background: 'var(--bg-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 56, color: 'var(--text-3)', fontVariationSettings: "'FILL' 0, 'wght' 100" }}>apartment</span>
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <h3 style={{ fontWeight: 700, color: 'var(--text-1)', marginBottom: 6, fontSize: '0.95rem' }}>{project.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-3)', fontSize: '0.8rem', marginBottom: 10 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13 }}>location_on</span>
                      <span>{project.location}</span>
                    </div>
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(153,27,27,0.1)', color: 'var(--brand-fire)',
                      border: '1px solid rgba(153,27,27,0.2)',
                      fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: 'var(--radius-full)',
                    }}>{project.type}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

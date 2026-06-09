import { Link } from 'react-router-dom'

const values = [
  { icon: 'workspace_premium', title: '전문성', desc: '소방설비기사 자격 보유 전문가가 직접 설계 및 감리를 수행합니다.', accent: '#2452c4' },
  { icon: 'gps_fixed',         title: '정확성', desc: '소방 관련 법령과 기준을 철저히 준수한 설계로 인허가를 지원합니다.', accent: '#059669' },
  { icon: 'verified_user',     title: '신뢰성', desc: '고객과의 약속을 지키는 책임감 있는 서비스를 제공합니다.', accent: '#991b1b' },
]

const history = [
  { year: '2026.05', event: '플레임가드 엔지니어링 개업' },
  { year: '2026.06', event: '사무소 홈페이지 오픈' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Hero */}
      <section style={{ background: 'var(--gradient-hero)', padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="sec-label" style={{ justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>apartment</span>
            회사소개
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            소방설비 설계의 처음부터<br />
            <span style={{ background: 'var(--gradient-fire)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>끝까지 함께합니다</span>
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', maxWidth: 480, margin: '0 auto' }}>믿을 수 있는 소방설비 설계 전문 파트너</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <span className="sec-label">ABOUT US</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 16 }}>
                안전을 설계하는<br />소방설비 전문 사무소
              </h2>
              <div className="divider-fire" />
              <p style={{ color: 'var(--text-2)', lineHeight: 1.9, marginBottom: 14, fontSize: '0.95rem' }}>
                플레임가드 엔지니어링는 2026년 5월 개업한 소방설비 설계 전문 회사입니다.
                소방설비 설계, 도면 작성, 소방감리까지 소방 분야 전반에 걸친 전문 서비스를 제공합니다.
              </p>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                건축물의 안전을 최우선으로 생각하며, 관련 법령과 기준을 철저히 준수하여
                고객이 안심할 수 있는 소방 환경을 구축합니다.
              </p>
              <Link to="/contact" className="btn-fire" style={{ marginTop: 28, display: 'inline-flex' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                문의하기
              </Link>
            </div>

            {/* Info card */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 32,
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-fire) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff', fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)' }}>사무소 정보</div>
              </div>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { dt: '상호명', dd: '플레임가드 엔지니어링', icon: 'business' },
                  { dt: '대표자', dd: '구자성', icon: 'person' },
                  { dt: '개업일', dd: '2026년 5월 23일', icon: 'today' },
                  { dt: '업종',   dd: '소방설비 설계 · 도면 · 감리', icon: 'category' },
                  { dt: '이메일', dd: 'wkjd05@gmail.com', icon: 'mail' },
                ].map(({ dt, dd, icon }) => (
                  <div key={dt} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--brand-fire)', flexShrink: 0 }}>{icon}</span>
                    <dt style={{ color: 'var(--text-3)', fontSize: '0.82rem', width: 56, flexShrink: 0 }}>{dt}</dt>
                    <dd style={{ color: 'var(--text-1)', fontSize: '0.88rem', fontWeight: 500 }}>{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label" style={{ justifyContent: 'center' }}>핵심 가치</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>우리가 추구하는 가치</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: `${v.accent}15`,
                  border: `1px solid ${v.accent}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: v.accent }}>{v.icon}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-1)', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label" style={{ justifyContent: 'center' }}>연혁</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>사무소 연혁</h2>
          </div>
          <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {history.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: 0, position: 'relative' }}>
                {/* Line */}
                {i < history.length - 1 && (
                  <div style={{ position: 'absolute', left: 103, top: 24, bottom: -16, width: 2, background: 'var(--border)' }} />
                )}
                <div style={{ width: 96, paddingTop: 3, flexShrink: 0, textAlign: 'right', paddingRight: 16 }}>
                  <span style={{ color: 'var(--brand-fire)', fontWeight: 700, fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>{h.year}</span>
                </div>
                <div style={{
                  width: 14, height: 14, borderRadius: '50%', flexShrink: 0, marginTop: 4,
                  background: 'var(--brand-fire)',
                  border: '3px solid var(--bg-1)',
                  boxShadow: `0 0 0 2px var(--brand-fire)`,
                }} />
                <div style={{ paddingLeft: 18, paddingBottom: 32 }}>
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '12px 18px' }}>
                    <span style={{ color: 'var(--text-1)', fontSize: '0.92rem', fontWeight: 500 }}>{h.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

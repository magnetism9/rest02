import { Link } from 'react-router-dom'

const services = [
  {
    icon: 'shield',
    title: '소방설비 설계',
    desc: '스프링클러, 옥내소화전, 자동화재탐지설비 등 각종 소방설비 설계',
    accent: '#2452c4',
    bg: 'rgba(27,79,216,0.1)',
  },
  {
    icon: 'draft',
    title: '도면 설계',
    desc: '소방 관련 법령 기준에 적합한 정밀 소방도면 작성 및 인허가 대행',
    accent: '#059669',
    bg: 'rgba(5,150,105,0.1)',
  },
  {
    icon: 'visibility',
    title: '소방감리',
    desc: '신축·증개축 현장의 소방공사 적정 시공 여부 감리 및 준공 지원',
    accent: '#991b1b',
    bg: 'rgba(153,27,27,0.1)',
  },
]

const stats = [
  { icon: 'workspace_premium', value: '전문 자격', label: '소방설비기사 보유' },
  { icon: 'today',             value: '2026.05',   label: '사무소 개업' },
  { icon: 'handshake',         value: '맞춤 설계',  label: '고객 중심 서비스' },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
        paddingTop: 'var(--nav-h)',
      }}>
        {/* Orbs */}
        <div className="hero-orb" style={{ width: 560, height: 560, background: 'var(--brand-blue)', top: -120, right: -80, opacity: 0.1 }} />
        <div className="hero-orb" style={{ width: 340, height: 340, background: 'var(--brand-fire)', bottom: -60, left: -60, opacity: 0.1, animationDelay: '3s' }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
          <div style={{ maxWidth: 700 }}>
            {/* Badge */}
            <div className="badge-fire anim-up" style={{ marginBottom: 28 }}>
              <span className="dot-pulse" />
              소방설비 설계 전문 사무소
            </div>

            {/* Headline */}
            <h1 className="anim-up delay-1" style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              color: 'var(--text-1)',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: 24,
            }}>
              안전한 공간을 만드는<br />
              <span style={{
                background: 'var(--gradient-fire)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>소방설비 설계</span> 전문가
            </h1>

            {/* Sub */}
            <p className="anim-up delay-2" style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-2)',
              lineHeight: 1.85,
              marginBottom: 40,
              maxWidth: 480,
            }}>
              소방설비 설계·도면·감리까지 원스톱 서비스로<br />
              법령 기준에 맞는 최적의 소방 솔루션을 제공합니다.
            </p>

            {/* CTAs */}
            <div className="anim-up delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}>
              <Link to="/contact" className="btn-fire">
                <span className="material-symbols-outlined" style={{ fontSize: 17 }}>chat</span>
                무료 상담 문의
              </Link>
              <Link to="/services" className="btn-outline">
                사업분야 보기
              </Link>
            </div>

            {/* Stats */}
            <div className="anim-up delay-4" style={{
              display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap',
              paddingTop: 32, borderTop: '1px solid var(--border)',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--brand-fire)' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)', letterSpacing: '-0.01em', fontFamily: 'Inter, sans-serif' }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="sec-label">사업분야</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              소방설비의 설계부터<br />감리까지 책임집니다
            </h2>
            <div className="divider-fire" />
            <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.7 }}>전 과정을 원스톱으로 제공하는 전문 서비스</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {services.map((svc, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{
                  width: 52, height: 52,
                  background: svc.bg,
                  borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  border: `1px solid ${svc.accent}25`,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 26, color: svc.accent, fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>{svc.icon}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 10, letterSpacing: '-0.01em' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.75 }}>{svc.desc}</p>
                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  color: svc.accent, fontSize: '0.82rem', fontWeight: 600, marginTop: 18,
                  transition: 'gap var(--transition)',
                }}>
                  자세히 보기
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="sec-label">왜 플레임가드 엔지니어링인가</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 20 }}>
                안전을 가장 먼저<br />생각하는 전문가
              </h2>
              <div className="divider-fire" />
              <p style={{ color: 'var(--text-2)', lineHeight: 1.9, marginBottom: 16, fontSize: '0.95rem' }}>
                소방설비기사 자격 보유 전문가가 직접 설계·감리를 수행합니다.
                소방 관련 법령과 기준을 철저히 준수하여 인허가를 지원하고,
                고객과의 신뢰를 최우선으로 합니다.
              </p>
              <Link to="/about" className="btn-outline" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
                회사 소개 보기
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: 'workspace_premium', title: '전문 자격', desc: '소방설비기사 자격 보유 전문가가 직접 설계 및 감리를 수행합니다.' },
                { icon: 'gps_fixed',         title: '정밀 설계', desc: '소방 법령 기준을 철저히 준수한 정확한 설계로 인허가를 지원합니다.' },
                { icon: 'verified_user',     title: '신뢰 서비스', desc: '고객과의 약속을 지키는 책임감 있는 서비스를 제공합니다.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: 20, borderRadius: 'var(--radius)',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  transition: 'all var(--transition)',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(153,27,27,0.1)',
                    border: '1px solid rgba(153,27,27,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--brand-fire)' }}>{item.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-1)', marginBottom: 5, fontSize: '0.95rem' }}>{item.title}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: '0.84rem', lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '72px 0', background: 'var(--brand-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(27,79,216,0.15) 0%, rgba(153,27,27,0.1) 100%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 44, color: 'var(--brand-fire)', marginBottom: 16, display: 'block', fontVariationSettings: "'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}>local_fire_department</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>소방 설계 문의</h2>
          <p style={{ color: '#94A3B8', marginBottom: 32, fontSize: '1rem' }}>소방설비 관련 궁금한 사항은 언제든지 문의해 주세요</p>
          <Link to="/contact" className="btn-fire">
            <span className="material-symbols-outlined" style={{ fontSize: 17 }}>chat</span>
            문의하기
          </Link>
        </div>
      </section>
    </div>
  )
}

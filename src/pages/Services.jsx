import { Link } from 'react-router-dom'

const services = [
  {
    icon: 'shield',
    title: '소방설비 설계',
    subtitle: 'Fire Equipment Design',
    accent: '#2452c4',
    bg: 'rgba(27,79,216,0.08)',
    border: 'rgba(27,79,216,0.2)',
    desc: '각종 소방설비에 대한 전문적인 설계 서비스를 제공합니다. 건축물의 용도와 규모에 맞는 최적의 소방설비 시스템을 설계합니다.',
    items: ['스프링클러 설비 설계', '옥내·옥외 소화전 설계', '자동화재탐지설비 설계', '비상방송·유도등 설계', '소화활동설비 설계', '제연설비 설계'],
  },
  {
    icon: 'draft',
    title: '도면 설계',
    subtitle: 'Drawing Design',
    accent: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
    desc: '소방 관련 법령 기준에 적합한 정밀한 소방도면을 작성합니다. 인허가 절차 대행 및 관련 서류 작성을 지원합니다.',
    items: ['소방시설 설계도면 작성', '소방시설 공사 신고 대행', '소방시설 완공검사 지원', '각종 인허가 서류 작성', '소방시설 변경 도면', '현황도면 작성'],
  },
  {
    icon: 'visibility',
    title: '소방감리',
    subtitle: 'Fire Supervision',
    accent: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.2)',
    desc: '신축·증개축 건축물의 소방공사가 설계도면과 법령 기준에 따라 적정하게 시공되는지 감리합니다.',
    items: ['소방공사 감리업무 수행', '시공 단계별 검사 및 확인', '소방시설 완공 전 점검', '준공검사 지원', '하자보수 관리', '관계기관 협의 대행'],
  },
]

const process = [
  { step: '01', icon: 'forum',      title: '상담', desc: '현장 상황 및 요구사항 파악' },
  { step: '02', icon: 'architecture', title: '설계', desc: '법령 기준에 맞는 설계안 작성' },
  { step: '03', icon: 'approval',   title: '인허가', desc: '관계 기관 신고 및 허가 대행' },
  { step: '04', icon: 'fact_check', title: '감리',   desc: '시공 적정성 검사 및 준공 지원' },
]

export default function Services() {
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Hero */}
      <section style={{ background: 'var(--gradient-hero)', padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="sec-label" style={{ justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>category</span>
            사업분야
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            소방설비 설계부터<br />
            <span style={{ background: 'var(--gradient-fire)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>감리까지 원스톱</span>
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>소방설비 전 과정을 책임지는 전문 서비스</p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {services.map((svc, i) => (
            <div key={i} style={{
              borderRadius: 'var(--radius-lg)',
              border: `1px solid ${svc.border}`,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}>
              {/* Header */}
              <div style={{ background: svc.bg, padding: '28px 32px', borderBottom: `1px solid ${svc.border}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{
                    width: 56, height: 56, background: 'var(--bg-1)',
                    borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${svc.border}`, flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 28, color: svc.accent, fontVariationSettings: "'FILL' 0, 'wght' 300" }}>{svc.icon}</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-3)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{svc.subtitle}</div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', marginBottom: 8 }}>{svc.title}</h2>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 560 }}>{svc.desc}</p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div style={{ padding: '24px 32px', background: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>제공 서비스</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
                  {svc.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: svc.accent, fontVariationSettings: "'FILL' 1, 'wght' 400" }}>check_circle</span>
                      <span style={{ color: 'var(--text-1)', fontSize: '0.88rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label" style={{ justifyContent: 'center' }}>업무 프로세스</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em' }}>체계적인 4단계 프로세스</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {process.map((p, i) => (
              <div key={i} className="card" style={{ padding: 28, textAlign: 'center', position: 'relative' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--border)', letterSpacing: '-0.04em', fontFamily: 'Inter, sans-serif', lineHeight: 1, marginBottom: 12 }}>{p.step}</div>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: 'var(--brand-fire)' }}>{p.icon}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-1)', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.84rem', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'var(--bg-1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', marginBottom: 12 }}>지금 바로 문의하세요</h2>
          <p style={{ color: 'var(--text-2)', marginBottom: 28, fontSize: '0.95rem' }}>소방 설계 전문가와 무료 상담을 받아보세요</p>
          <Link to="/contact" className="btn-fire">
            <span className="material-symbols-outlined" style={{ fontSize: 17 }}>chat</span>
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  )
}

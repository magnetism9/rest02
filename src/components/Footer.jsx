import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--brand-dark)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ padding: '56px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-fire) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff', fontVariationSettings: "'FILL' 1, 'wght' 300" }}>local_fire_department</span>
              </div>
              <div>
                <div style={{ color: '#F0F4FF', fontWeight: 700, fontSize: '0.92rem' }}>플레임가드 엔지니어링</div>
                <div style={{ color: '#64748B', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Flameguard Engineering</div>
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.87rem', lineHeight: 1.8, maxWidth: 260 }}>
              소방설비 설계·도면·감리 전문 사무소로<br />
              안전하고 신뢰할 수 있는 소방 환경을 만들어 드립니다.
            </p>
            <div style={{ marginTop: 14, fontSize: '0.78rem', color: '#475569' }}>
              개업일: 2026년 5월 23일
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ color: '#F0F4FF', fontWeight: 700, marginBottom: 18, fontSize: '0.88rem' }}>바로가기</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { to: '/about',    label: '회사소개' },
                { to: '/services', label: '사업분야' },
                { to: '/projects', label: '시공실적' },
                { to: '/contact',  label: '문의하기' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} style={{ color: '#64748B', fontSize: '0.88rem', textDecoration: 'none', transition: 'color var(--transition)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--brand-fire)'}
                    onMouseLeave={e => e.target.style.color = '#64748B'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#F0F4FF', fontWeight: 700, marginBottom: 18, fontSize: '0.88rem' }}>연락처</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: 'call',       value: '010-0000-0000' },
                { icon: 'mail',       value: 'wkjd05@gmail.com' },
                { icon: 'location_on', value: '주소 추가 예정' },
              ].map(({ icon, value }) => (
                <li key={icon} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 15, color: 'var(--brand-fire)', flexShrink: 0 }}>{icon}</span>
                  <span style={{ color: '#64748B', fontSize: '0.87rem' }}>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>© 2026 플레임가드 엔지니어링. All rights reserved.</p>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>소방설비 설계 · 도면 설계 · 소방감리</p>
        </div>
      </div>
    </footer>
  )
}

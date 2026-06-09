import { useState } from 'react'

const contactInfo = [
  { icon: 'call',       label: '전화',   value: '010-0000-0000' },
  { icon: 'mail',       label: '이메일', value: 'wkjd05@gmail.com' },
  { icon: 'location_on', label: '주소',  value: '주소 추가 예정' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Hero */}
      <section style={{ background: 'var(--gradient-hero)', padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="sec-label" style={{ justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>chat</span>
            문의하기
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            소방설비 문의는<br />
            <span style={{ background: 'var(--gradient-fire)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>언제든지 환영합니다</span>
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem' }}>빠른 시일 내에 전문가가 직접 답변드립니다</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 28, alignItems: 'start' }}>

            {/* Left: Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-1)', marginBottom: 8 }}>연락처 정보</h2>
              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 18px', borderRadius: 'var(--radius)',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(153,27,27,0.1)', border: '1px solid rgba(153,27,27,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--brand-fire)' }}>{icon}</span>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-3)', fontSize: '0.74rem', marginBottom: 2 }}>{label}</div>
                    <div style={{ color: 'var(--text-1)', fontWeight: 600, fontSize: '0.88rem' }}>{value}</div>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div style={{
                padding: '18px 20px',
                background: 'rgba(153,27,27,0.06)', border: '1px solid rgba(153,27,27,0.15)',
                borderRadius: 'var(--radius)', marginTop: 4,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--brand-fire)' }}>schedule</span>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-1)' }}>운영 시간</span>
                </div>
                {[
                  { day: '평일', time: '09:00 ~ 18:00', active: true },
                  { day: '토요일', time: '09:00 ~ 13:00', active: true },
                  { day: '일/공휴일', time: '휴무', active: false },
                ].map(({ day, time, active }) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7, fontSize: '0.84rem' }}>
                    <span style={{ color: 'var(--text-2)' }}>{day}</span>
                    <span style={{ color: active ? 'var(--text-1)' : 'var(--text-3)', fontWeight: active ? 500 : 400 }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 36,
              boxShadow: 'var(--shadow-sm)',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(5,150,105,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 36, color: '#059669', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-1)' }}>문의가 접수되었습니다</h3>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>빠른 시일 내에 연락드리겠습니다.<br />감사합니다.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }) }}
                    className="btn-outline"
                    style={{ marginTop: 8, padding: '10px 24px', fontSize: '0.88rem' }}
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-1)', marginBottom: 24 }}>문의 양식</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      {[
                        { label: '성함', name: 'name', type: 'text', placeholder: '홍길동', required: true },
                        { label: '연락처', name: 'phone', type: 'tel', placeholder: '010-0000-0000', required: true },
                      ].map(f => (
                        <div key={f.name}>
                          <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: 7 }}>
                            {f.label} {f.required && <span style={{ color: 'var(--brand-fire)' }}>*</span>}
                          </label>
                          <input
                            type={f.type} required={f.required} placeholder={f.placeholder}
                            value={form[f.name]}
                            onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                            className="t-input"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: 7 }}>이메일</label>
                      <input type="email" placeholder="example@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="t-input" />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: 7 }}>
                        문의 유형 <span style={{ color: 'var(--brand-fire)' }}>*</span>
                      </label>
                      <select
                        required value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                        className="t-input" style={{ cursor: 'pointer' }}
                      >
                        <option value="">선택해주세요</option>
                        <option value="design">소방설비 설계</option>
                        <option value="drawing">도면 설계</option>
                        <option value="supervision">소방감리</option>
                        <option value="other">기타 문의</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-2)', marginBottom: 7 }}>
                        문의 내용 <span style={{ color: 'var(--brand-fire)' }}>*</span>
                      </label>
                      <textarea
                        required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="문의하실 내용을 자세히 적어주세요. (건물 용도, 규모, 위치 등 알려주시면 더 정확한 안내가 가능합니다)"
                        className="t-input" style={{ resize: 'vertical', minHeight: 120 }}
                      />
                    </div>

                    <button type="submit" className="btn-fire" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                      문의 보내기
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

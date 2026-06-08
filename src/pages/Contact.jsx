import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: '전화', value: '010-0000-0000' },
  { icon: Mail, label: '이메일', value: 'wkjd05@gmail.com' },
  { icon: MapPin, label: '주소', value: '주소 추가 예정' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 실제 이메일 전송 연동
    setSubmitted(true)
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">문의하기</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            소방설비 관련 문의는 언제든지 연락 주세요
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">연락처 정보</h2>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-[#e2e8f0]">
                  <div className="w-10 h-10 bg-[#1a3a8f]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#2452c4]" />
                  </div>
                  <div>
                    <div className="text-[#94a3b8] text-xs mb-0.5">{label}</div>
                    <div className="text-[#1e293b] font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}

              <div className="bg-[#1a3a8f]/10 border border-[#1a3a8f]/20 rounded-xl p-4 mt-6">
                <h3 className="text-[#0D1B2A] font-semibold text-sm mb-2">운영 시간</h3>
                <div className="space-y-1 text-sm text-[#64748b]">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span>09:00 ~ 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span>09:00 ~ 13:00</span>
                  </div>
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>일요일/공휴일</span>
                    <span>휴무</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 bg-[#14532d]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#166534]" />
                  </div>
                  <h3 className="text-[#0D1B2A] font-bold text-xl mb-2">문의가 접수되었습니다</h3>
                  <p className="text-[#64748b] text-sm">
                    빠른 시일 내에 연락드리겠습니다.<br />감사합니다.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', category: '', message: '' }) }}
                    className="mt-6 px-5 py-2 border border-[#e2e8f0] rounded-lg text-sm text-[#64748b] hover:bg-[#f8fafc] transition-colors"
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">문의 양식</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#374151] mb-1.5">
                          성함 <span className="text-[#991b1b]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="홍길동"
                          className="w-full px-3 py-2.5 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-[#2452c4] focus:ring-1 focus:ring-[#2452c4]/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#374151] mb-1.5">
                          연락처 <span className="text-[#991b1b]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="010-0000-0000"
                          className="w-full px-3 py-2.5 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-[#2452c4] focus:ring-1 focus:ring-[#2452c4]/30 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">이메일</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="example@email.com"
                        className="w-full px-3 py-2.5 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-[#2452c4] focus:ring-1 focus:ring-[#2452c4]/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        문의 유형 <span className="text-[#991b1b]">*</span>
                      </label>
                      <select
                        required
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full px-3 py-2.5 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-[#2452c4] focus:ring-1 focus:ring-[#2452c4]/30 transition-colors bg-white"
                      >
                        <option value="">선택해주세요</option>
                        <option value="design">소방설비 설계</option>
                        <option value="drawing">도면 설계</option>
                        <option value="supervision">소방감리</option>
                        <option value="other">기타 문의</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        문의 내용 <span className="text-[#991b1b]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="문의하실 내용을 자세히 적어주세요. (건물 용도, 규모, 위치 등 알려주시면 더 정확한 안내가 가능합니다)"
                        className="w-full px-3 py-2.5 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-[#2452c4] focus:ring-1 focus:ring-[#2452c4]/30 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#1a3a8f] hover:bg-[#2452c4] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
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

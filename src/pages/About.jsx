import { Award, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: '전문성',
    desc: '소방설비기사 자격 보유 전문가가 직접 설계 및 감리를 수행합니다.',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
  },
  {
    icon: Target,
    title: '정확성',
    desc: '소방 관련 법령과 기준을 철저히 준수한 설계로 인허가를 지원합니다.',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
  },
  {
    icon: Heart,
    title: '신뢰성',
    desc: '고객과의 약속을 지키는 책임감 있는 서비스를 제공합니다.',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
  },
]

const history = [
  { year: '2026.05', event: '구자성 소방설계사무소 개업' },
  { year: '2026.06', event: '사무소 홈페이지 오픈' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">회사소개</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            소방설비 설계의 처음부터 끝까지, 믿을 수 있는 파트너
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#1a3a8f]/10 text-[#2452c4] text-sm font-medium px-3 py-1 rounded-full mb-4">
                ABOUT US
              </div>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-5">
                안전을 설계하는<br />소방설비 전문 사무소
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                구자성 소방설계사무소는 2026년 5월 개업한 소방설비 설계 전문 회사입니다.
                소방설비 설계, 도면 작성, 소방감리까지 소방 분야 전반에 걸친 전문 서비스를 제공합니다.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                건축물의 안전을 최우선으로 생각하며, 관련 법령과 기준을 철저히 준수하여
                고객이 안심할 수 있는 소방 환경을 구축합니다.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-[#0D1B2A] font-bold text-lg mb-6">사무소 정보</h3>
              <dl className="space-y-4">
                {[
                  { dt: '상호명', dd: '구자성 소방설계사무소' },
                  { dt: '대표자', dd: '구자성' },
                  { dt: '개업일', dd: '2026년 5월 23일' },
                  { dt: '업종', dd: '소방설비 설계 · 도면 · 감리' },
                  { dt: '이메일', dd: 'wkjd05@gmail.com' },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex gap-4">
                    <dt className="text-[#94a3b8] text-sm w-20 shrink-0">{dt}</dt>
                    <dd className="text-[#1e293b] text-sm font-medium">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0D1B2A] text-center mb-12">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <v.icon size={24} className={v.color} />
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-lg mb-2">{v.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0D1B2A] text-center mb-12">연혁</h2>
          <div className="max-w-lg mx-auto space-y-4">
            {history.map((h, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-[#2452c4] font-bold text-sm w-20 shrink-0 pt-0.5">{h.year}</div>
                <div className="flex-1 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2452c4] mt-1.5 shrink-0" />
                  <p className="text-[#1e293b] text-sm">{h.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

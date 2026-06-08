import { ShieldCheck, FileText, Eye, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: '소방설비 설계',
    subtitle: 'Fire Equipment Design',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
    border: 'border-[#1a3a8f]/20',
    desc: '각종 소방설비에 대한 전문적인 설계 서비스를 제공합니다. 건축물의 용도와 규모에 맞는 최적의 소방설비 시스템을 설계합니다.',
    items: [
      '스프링클러 설비 설계',
      '옥내·옥외 소화전 설계',
      '자동화재탐지설비 설계',
      '비상방송·유도등 설계',
      '소화활동설비 설계',
      '제연설비 설계',
    ],
  },
  {
    icon: FileText,
    title: '도면 설계',
    subtitle: 'Drawing Design',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
    border: 'border-[#14532d]/20',
    desc: '소방 관련 법령 기준에 적합한 정밀한 소방도면을 작성합니다. 인허가 절차 대행 및 관련 서류 작성을 지원합니다.',
    items: [
      '소방시설 설계도면 작성',
      '소방시설 공사 신고 대행',
      '소방시설 완공검사 지원',
      '각종 인허가 서류 작성',
      '소방시설 변경 도면',
      '현황도면 작성',
    ],
  },
  {
    icon: Eye,
    title: '소방감리',
    subtitle: 'Fire Supervision',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
    border: 'border-[#7f1d1d]/20',
    desc: '신축·증개축 건축물의 소방공사가 설계도면과 법령 기준에 따라 적정하게 시공되는지 감리합니다.',
    items: [
      '소방공사 감리업무 수행',
      '시공 단계별 검사 및 확인',
      '소방시설 완공 전 점검',
      '준공검사 지원',
      '하자보수 관리',
      '관계기관 협의 대행',
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">사업분야</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            소방설비 설계부터 감리까지 원스톱 전문 서비스
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`rounded-2xl border ${svc.border} overflow-hidden`}
            >
              <div className={`${svc.bg} p-8`}>
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0`}>
                    <svc.icon size={28} className={svc.color} />
                  </div>
                  <div>
                    <div className="text-[#94a3b8] text-xs font-medium mb-1">{svc.subtitle}</div>
                    <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2">{svc.title}</h2>
                    <p className="text-[#64748b] text-sm leading-relaxed max-w-2xl">{svc.desc}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white">
                <h3 className="text-[#0D1B2A] font-semibold mb-4 text-sm">제공 서비스</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {svc.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className={svc.color} />
                      <span className="text-[#1e293b] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#0D1B2A] text-center mb-12">업무 프로세스</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: '상담', desc: '현장 상황 및 요구사항 파악' },
              { step: '02', title: '설계', desc: '법령 기준에 맞는 설계안 작성' },
              { step: '03', title: '인허가', desc: '관계 기관 신고 및 허가 대행' },
              { step: '04', title: '감리', desc: '시공 적정성 검사 및 준공 지원' },
            ].map((p) => (
              <div key={p.step} className="bg-white rounded-xl p-5 border border-[#e2e8f0] text-center">
                <div className="text-3xl font-bold text-[#1a3a8f]/20 mb-2">{p.step}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-1">{p.title}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

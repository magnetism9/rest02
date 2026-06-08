import { Link } from 'react-router-dom'
import { ShieldCheck, FileText, Eye, ChevronRight, Award, Clock, Users } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: '소방설비 설계',
    desc: '스프링클러, 옥내소화전, 자동화재탐지설비 등 각종 소방설비 설계',
    color: 'text-[#2452c4]',
    bg: 'bg-[#1a3a8f]/10',
  },
  {
    icon: FileText,
    title: '도면 설계',
    desc: '소방 관련 법령 기준에 적합한 정밀 소방도면 작성 및 인허가 대행',
    color: 'text-[#166534]',
    bg: 'bg-[#14532d]/10',
  },
  {
    icon: Eye,
    title: '소방감리',
    desc: '신축·증개축 현장의 소방공사 적정 시공 여부 감리 및 준공 지원',
    color: 'text-[#991b1b]',
    bg: 'bg-[#7f1d1d]/10',
  },
]

const stats = [
  { icon: Award, value: '전문 자격', label: '소방설비기사 보유' },
  { icon: Clock, value: '2026.05', label: '사무소 개업' },
  { icon: Users, value: '맞춤 설계', label: '고객 중심 서비스' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0D1B2A] via-[#1a2b4a] to-[#0D1B2A] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #2452c4 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, #1a3a8f 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1a3a8f]/30 border border-[#2452c4]/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[#94a3b8] text-sm">소방설비 설계 전문 사무소</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              안전한 공간을 만드는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2452c4] to-[#60a5fa]">
                소방설비 설계
              </span>{' '}
              전문가
            </h1>

            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-xl">
              소방설비 설계·도면·감리까지 원스톱 서비스로<br />
              법령 기준에 맞는 최적의 소방 솔루션을 제공합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#1a3a8f] hover:bg-[#2452c4] text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                무료 상담 문의 <ChevronRight size={18} />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
              >
                사업분야 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1a2b4a] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={24} className="text-[#2452c4] mx-auto mb-2" />
                <div className="text-white font-bold text-lg">{stat.value}</div>
                <div className="text-[#94a3b8] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">사업분야</h2>
            <p className="text-[#64748b]">소방설비의 설계부터 감리까지 전 과정을 책임집니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="p-6 rounded-xl border border-[#e2e8f0] hover:border-[#2452c4]/30 hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svc.icon size={24} className={svc.color} />
                </div>
                <h3 className="text-[#0D1B2A] font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{svc.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[#2452c4] text-sm font-medium mt-4 hover:gap-2 transition-all"
                >
                  자세히 보기 <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D1B2A] to-[#1a2b4a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">소방 설계 문의</h2>
          <p className="text-[#94a3b8] mb-8">소방설비 관련 궁금한 사항은 언제든지 문의해주세요</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a3a8f] hover:bg-[#2452c4] text-white font-semibold rounded-lg transition-colors"
          >
            문의하기 <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

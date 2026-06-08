import { Building2, MapPin } from 'lucide-react'

const projects = [
  // 실적 데이터 추가 예정
]

export default function Projects() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1a2b4a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">시공실적</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            구자성 소방설계사무소의 주요 시공 및 설계 실적
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#f1f5f9] rounded-full flex items-center justify-center mx-auto mb-5">
                <Building2 size={36} className="text-[#94a3b8]" />
              </div>
              <h2 className="text-[#1e293b] font-bold text-xl mb-2">실적 준비 중</h2>
              <p className="text-[#94a3b8] text-sm">
                2026년 5월 개업 이후 축적되는 실적을 이곳에서 확인하실 수 있습니다.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div key={i} className="rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-[#f1f5f9] flex items-center justify-center">
                    <Building2 size={48} className="text-[#cbd5e1]" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0D1B2A] mb-1">{project.title}</h3>
                    <div className="flex items-center gap-1 text-[#94a3b8] text-xs mb-2">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </div>
                    <span className="inline-block bg-[#1a3a8f]/10 text-[#2452c4] text-xs px-2 py-0.5 rounded">
                      {project.type}
                    </span>
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

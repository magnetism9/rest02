import { Flame, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-[#94a3b8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#1a3a8f] rounded-lg flex items-center justify-center">
                <Flame size={20} className="text-orange-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">구자성 소방설계사무소</div>
                <div className="text-[#475569] text-[10px]">FIRE SAFETY DESIGN</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              소방설비 설계·시공·감리 전문 업체로<br />
              안전하고 신뢰할 수 있는 소방 환경을<br />
              만들어 드립니다.
            </p>
            <div className="mt-4 text-xs text-[#475569]">
              개업일: 2026년 5월 23일
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">바로가기</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/about', label: '회사소개' },
                { to: '/services', label: '사업분야' },
                { to: '/projects', label: '시공실적' },
                { to: '/contact', label: '문의하기' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">연락처</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#2452c4] shrink-0" />
                <span>010-0000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#2452c4] shrink-0" />
                <span>wkjd05@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#2452c4] shrink-0 mt-0.5" />
                <span>주소 추가 예정</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#475569]">
          <p>© 2026 구자성 소방설계사무소. All rights reserved.</p>
          <p>소방설비 설계 · 도면 설계 · 소방감리</p>
        </div>
      </div>
    </footer>
  )
}

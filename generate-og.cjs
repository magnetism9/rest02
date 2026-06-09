/**
 * generate-og.js — OG 이미지 생성 스크립트
 * 출력: public/og-image.png + public/og-image-{id}.png (1200×630)
 */

const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

const W = 1200;
const H = 630;
const OUT = path.join(__dirname, 'public');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

/* ── 5가지 컬러 팔레트 (다크블루 기본 + 포인트 컬러) ── */
const palettes = [
  {
    id: 'default',
    name: '다크레드',
    bg1: '#0A1628', bg2: '#0D1F3F', bg3: '#1B4FD8',
    accent: '#991b1b', accent2: '#b91c1c',
    label: '다크블루 + 다크레드',
  },
  {
    id: 'royal',
    name: '로열블루',
    bg1: '#0A1628', bg2: '#0D1F3F', bg3: '#1e3a8a',
    accent: '#2563EB', accent2: '#3B82F6',
    label: '다크블루 + 로열블루',
  },
  {
    id: 'crimson',
    name: '크림슨',
    bg1: '#0A1020', bg2: '#12082A', bg3: '#4C0519',
    accent: '#BE123C', accent2: '#E11D48',
    label: '다크네이비 + 크림슨',
  },
  {
    id: 'steel',
    name: '스틸블루',
    bg1: '#0A1628', bg2: '#0F2744', bg3: '#0C4A6E',
    accent: '#0369A1', accent2: '#0EA5E9',
    label: '다크블루 + 스틸블루',
  },
  {
    id: 'maroon',
    name: '마룬',
    bg1: '#0A1218', bg2: '#0F1A20', bg3: '#450A0A',
    accent: '#7f1d1d', accent2: '#991b1b',
    label: '딥다크 + 마룬',
  },
];

/* ── 도트 그리드 ── */
function dotGrid(color) {
  const dots = [];
  for (let x = 48; x < W; x += 56) {
    for (let y = 48; y < H; y += 56) {
      dots.push(`<circle cx="${x}" cy="${y}" r="1.4" fill="${color}"/>`);
    }
  }
  return dots.join('');
}

/* ── 방패/불꽃 로고 SVG ── */
function logoIcon(accent) {
  return `
    <rect width="52" height="52" rx="14" fill="url(#logoG)"/>
    <path d="M26 12 C20 18 16 24 18 30 C20 36 24 38 26 38 C28 38 32 36 34 30 C36 24 32 18 26 12Z"
          fill="${accent}" opacity="0.9"/>
    <path d="M26 20 C23 24 22 27 23 30 C24 33 25 34 26 34 C27 34 28 33 29 30 C30 27 29 24 26 20Z"
          fill="white" opacity="0.85"/>
  `;
}

/* ── SVG 빌드 ── */
function buildSVG(p) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
     xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="${p.bg1}"/>
      <stop offset="55%"  stop-color="${p.bg2}"/>
      <stop offset="100%" stop-color="${p.bg3}"/>
    </linearGradient>
    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#1B4FD8"/>
      <stop offset="100%" stop-color="${p.accent}"/>
    </linearGradient>
    <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#1B4FD8"/>
      <stop offset="100%" stop-color="${p.accent}"/>
    </linearGradient>
    <filter id="blur1"><feGaussianBlur stdDeviation="70"/></filter>
    <filter id="blur2"><feGaussianBlur stdDeviation="45"/></filter>
  </defs>

  <!-- 배경 -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- 배경 orb -->
  <circle cx="${W + 100}" cy="-60" r="380" fill="${p.accent}" opacity="0.1" filter="url(#blur1)"/>
  <circle cx="-60" cy="${H + 60}" r="260" fill="#1B4FD8" opacity="0.12" filter="url(#blur1)"/>
  <circle cx="820" cy="440" r="160" fill="${p.accent2}" opacity="0.07" filter="url(#blur2)"/>

  <!-- 도트 그리드 -->
  ${dotGrid('rgba(255,255,255,0.04)')}

  <!-- 좌측 엑센트 바 -->
  <rect x="64" y="104" width="4" height="108" rx="2" fill="url(#acc)" opacity="0.85"/>

  <!-- 로고 아이콘 -->
  <g transform="translate(84,100)">
    ${logoIcon(p.accent)}
  </g>

  <!-- 브랜드명 -->
  <text x="152" y="128"
        font-family="Arial, Helvetica, sans-serif"
        font-size="20" font-weight="700" letter-spacing="0.5"
        fill="white" opacity="0.9">플레임가드 엔지니어링</text>
  <text x="152" y="147"
        font-family="Arial, Helvetica, sans-serif"
        font-size="11" font-weight="400" letter-spacing="2"
        fill="white" opacity="0.4">FLAMEGUARD ENGINEERING</text>

  <!-- 메인 타이틀 -->
  <text x="80" y="256"
        font-family="Arial, Helvetica, sans-serif"
        font-size="62" font-weight="800" letter-spacing="-2"
        fill="white">안전한 공간을 만드는</text>
  <text x="80" y="332"
        font-family="Arial, Helvetica, sans-serif"
        font-size="62" font-weight="800" letter-spacing="-2"
        fill="${p.accent}">소방설비 설계 전문가</text>

  <!-- 서브타이틀 -->
  <text x="82" y="388"
        font-family="Arial, Helvetica, sans-serif"
        font-size="22" font-weight="400"
        fill="white" opacity="0.6">소방설비 설계 · 도면 · 감리 원스톱 서비스</text>

  <!-- 구분선 -->
  <line x1="80" y1="420" x2="320" y2="420"
        stroke="${p.accent}" stroke-width="1.5" opacity="0.35"/>

  <!-- 서비스 3종 -->
  <g transform="translate(80, 450)">
    <!-- shield icon 대체 텍스트 뱃지 -->
    <rect width="124" height="30" rx="15" fill="${p.accent}" opacity="0.15"
          stroke="${p.accent}" stroke-width="1" stroke-opacity="0.3"/>
    <text x="62" y="20" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif"
          font-size="13" font-weight="600" fill="${p.accent}">소방설비 설계</text>
  </g>
  <g transform="translate(218, 450)">
    <rect width="112" height="30" rx="15" fill="#1B4FD8" opacity="0.15"
          stroke="#1B4FD8" stroke-width="1" stroke-opacity="0.3"/>
    <text x="56" y="20" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif"
          font-size="13" font-weight="600" fill="#60a5fa">도면 설계</text>
  </g>
  <g transform="translate(344, 450)">
    <rect width="112" height="30" rx="15" fill="${p.accent}" opacity="0.15"
          stroke="${p.accent}" stroke-width="1" stroke-opacity="0.3"/>
    <text x="56" y="20" text-anchor="middle"
          font-family="Arial, Helvetica, sans-serif"
          font-size="13" font-weight="600" fill="${p.accent}">소방감리</text>
  </g>

  <!-- 하단 URL -->
  <text x="80" y="598"
        font-family="Arial, Helvetica, sans-serif"
        font-size="14" fill="white" opacity="0.3" letter-spacing="0.5">
    magnetism9.github.io/rest02
  </text>

  <!-- 우측 장식 카드 -->
  <rect x="760" y="100" width="360" height="390" rx="20"
        fill="white" opacity="0.03"
        stroke="white" stroke-width="1" stroke-opacity="0.06"/>

  <!-- 불꽃 심볼 (큰) -->
  <path d="M940 160 C920 190 910 215 915 238 C920 261 930 272 940 272 C950 272 960 261 965 238 C970 215 960 190 940 160Z"
        fill="${p.accent}" opacity="0.6"/>
  <path d="M940 188 C928 208 924 222 927 237 C930 252 936 258 940 258 C944 258 950 252 953 237 C956 222 952 208 940 188Z"
        fill="white" opacity="0.7"/>

  <!-- 카드 내부 텍스트 -->
  <text x="940" y="308" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="18" font-weight="700"
        fill="white" opacity="0.8">소방설비기사 자격 보유</text>
  <text x="940" y="334" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="13" fill="white" opacity="0.4">전문가가 직접 설계 · 감리 수행</text>

  <!-- 팔레트 5색 도트 -->
  ${palettes.map((pl, i) =>
    `<circle cx="${1088 + i * 22}" cy="598" r="8" fill="${pl.accent}" opacity="0.9"/>`
  ).join('')}
</svg>`;
}

/* ── 생성 실행 ── */
(async () => {
  for (const p of palettes) {
    const svg    = buildSVG(p);
    const svgBuf = Buffer.from(svg, 'utf8');
    const suffix = p.id === 'default' ? '' : `-${p.id}`;
    const outPath = path.join(OUT, `og-image${suffix}.png`);

    await sharp(svgBuf)
      .resize(W, H)
      .png({ quality: 95 })
      .toFile(outPath);

    console.log(`✓ og-image${suffix}.png  (${p.label})`);
  }
  console.log('\n✅ OG 이미지 5종 생성 완료 → public/');
})();

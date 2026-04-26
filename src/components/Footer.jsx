import { Phone, Mail, ArrowUpRight } from 'lucide-react';

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function IconYoutube(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const codingNinjasLinks = [
  { label: 'Careers',                href: '#' },
  { label: 'Privacy policy',         href: '#' },
  { label: 'Terms & conditions',     href: '#' },
  { label: 'Pricing & refund policy',href: '#' },
  { label: 'Bug bounty',             href: '#' },
  { label: 'Review',                 href: '#' },
  { label: 'Press release',          href: '#' },
];
const productLinks = [
  { label: 'Job Bootcamp',               href: '#' },
  { label: 'Code 360',                   href: '#' },
  { label: 'Professional Certifications',href: '#' },
  { label: 'Student Certifications',     href: '#' },
];
const communityLinks = [
  { label: '10X Club',       href: '#' },
  { label: 'Student Chapters',href: '#' },
  { label: 'Hire from us',   href: '#' },
];
const socials = [
  { Icon: IconInstagram, label: 'Instagram', color: '#E1306C' },
  { Icon: IconFacebook,  label: 'Facebook',  color: '#1877F2' },
  { Icon: IconLinkedin,  label: 'LinkedIn',  color: '#0A66C2' },
  { Icon: IconTwitter,   label: 'Twitter',   color: '#1DA1F2' },
  { Icon: IconYoutube,   label: 'YouTube',   color: '#FF0000' },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-1.5 text-[13px] text-gray-500 transition-all duration-200 hover:text-white"
    >
      <span className="w-0 h-[1px] bg-orange-500 transition-all duration-200 group-hover:w-3 rounded-full flex-shrink-0" />
      {children}
    </a>
  );
}

function ColHeader({ children }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-5 flex items-center gap-2">
      <span className="w-4 h-px bg-orange-500/50" />
      {children}
    </p>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#080808', position: 'relative', overflow: 'hidden' }}>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.05] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #f97316 0%, transparent 70%)', filter: 'blur(80px)' }} />
        {/* Noise grain */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }} />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3) 40%, rgba(249,115,22,0.3) 60%, transparent)' }} />

      {/* ── CTA STRIP ── */}
      <div className="relative z-10 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-[1240px] mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg leading-tight">
              Ready to transform your career?
            </p>
            <p className="text-gray-500 text-sm mt-1">Join 1.5 lakh+ students already on their journey.</p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              boxShadow: '0 0 28px -6px rgba(249,115,22,0.5)',
            }}
          >
            Get started free
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ── Col 1: Brand + Contact + Programs ── */}
          <div className="space-y-9">

            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
                  style={{
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    boxShadow: '0 0 20px -4px rgba(249,115,22,0.45)',
                  }}
                >
                  CN
                </div>
                <span className="text-xl font-black tracking-tight text-white lowercase">
                  coding<span style={{ color: '#f97316' }}>ninjas</span>
                </span>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Get the career you deserve, faster.
              </p>
            </div>

            {/* Contact */}
            <div>
              <ColHeader>Get in touch</ColHeader>
              <ul className="space-y-3">
                {[
                  { href: 'tel:1800-123-3598', Icon: Phone, label: '1800-123-3598' },
                  { href: 'mailto:contact@codingninjas.com', Icon: Mail, label: 'contact@codingninjas.com' },
                ].map(({ href, Icon, label }) => (
                  <li key={label}>
                    <a href={href}
                      className="group flex items-center gap-3 text-[13px] text-gray-500 hover:text-white transition-all duration-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110"
                        style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
                        <Icon className="h-3.5 w-3.5 text-orange-500" strokeWidth={2} aria-hidden />
                      </div>
                      <span className="group-hover:text-white">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <ColHeader>Our Programs</ColHeader>
              <div className="space-y-2.5">
                {[
                  {
                    badge: 'CN',
                    badgeBg: 'linear-gradient(135deg,#f97316,#ea580c)',
                    title: 'Job Bootcamp',
                    sub: 'Placement guaranteed',
                  },
                  {
                    badge: '360',
                    badgeBg: 'rgba(255,255,255,0.06)',
                    badgeText: '#f97316',
                    title: 'Code 360',
                    sub: 'Practice platform',
                  },
                ].map((p) => (
                  <a key={p.title} href="#"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(249,115,22,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-black text-white"
                      style={{ background: p.badgeBg, color: p.badgeText || '#fff' }}>
                      {p.badge}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-white leading-tight">{p.title}</p>
                      <p className="text-[11px] text-gray-500">{p.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Col 2: Coding Ninjas ── */}
          <div>
            <ColHeader>Coding Ninjas</ColHeader>
            <nav className="flex flex-col gap-3">
              {codingNinjasLinks.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </nav>
          </div>

          {/* ── Col 3: Products ── */}
          <div>
            <ColHeader>Products</ColHeader>
            <nav className="flex flex-col gap-3">
              {productLinks.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </nav>
          </div>

          {/* ── Col 4: Community ── */}
          <div>
            <ColHeader>Community</ColHeader>
            <nav className="flex flex-col gap-3">
              {communityLinks.map(l => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
            </nav>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-[1240px] mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">

          <div className="text-center sm:text-left">
            <p className="text-[12px] text-gray-600">
              Copyright © Sunrise Mentors Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-700 mt-0.5">
              Made with ❤️ for aspiring developers
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, label, color }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}18`;
                  e.currentTarget.style.borderColor = `${color}40`;
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 20px -4px ${color}50`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

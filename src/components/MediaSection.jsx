import { useRef } from 'react';
import { Zap, TrendingUp, Globe, ArrowUpRight, MoveRight } from 'lucide-react';

const newsItems = [
  {
    outlet: "InfoEdge × Coding Ninjas",
    tag: "Strategic Partnership",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    desc: "InfoEdge acquires majority stake in Coding Ninjas, creating India's largest tech education platform and opening unprecedented career opportunities for students.",
    date: "December 2022",
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    accentColor: "59,130,246",
    glowColor: "rgba(59,130,246,0.12)",
    borderGlow: "rgba(59,130,246,0.35)",
  },
  {
    outlet: "Times of India",
    tag: "Career Transformation",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    desc: "Coding Ninjas graduates achieve an average 2.2x salary hike, moving from 3–5 LPA to 10–15 LPA packages at top tech companies.",
    date: "January 2024",
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    accentColor: "16,185,129",
    glowColor: "rgba(16,185,129,0.10)",
    borderGlow: "rgba(16,185,129,0.35)",
  },
  {
    outlet: "Economic Times",
    tag: "AI Revolution",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    desc: "With GenAI transforming the tech landscape, Coding Ninjas launches advanced AI/ML programs to prepare India's next generation of tech leaders.",
    date: "March 2024",
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    accentColor: "249,115,22",
    glowColor: "rgba(249,115,22,0.10)",
    borderGlow: "rgba(249,115,22,0.35)",
  },
];

const companies = [
  { name: "Google",        color: "#4285F4" },
  { name: "Amazon",        color: "#FF9900" },
  { name: "Microsoft",     color: "#00A4EF" },
  { name: "Meta",          color: "#0081FB" },
  { name: "Apple",         color: "#A2AAAD" },
  { name: "Netflix",       color: "#E50914" },
  { name: "Flipkart",      color: "#F7C600" },
  { name: "Uber",          color: "#888888" },
  { name: "Swiggy",        color: "#FC8019" },
  { name: "Zomato",        color: "#CB202D" },
  { name: "Atlassian",     color: "#0052CC" },
  { name: "Adobe",         color: "#FF0000" },
  { name: "Salesforce",    color: "#00A1E0" },
  { name: "Goldman Sachs", color: "#6699FF" },
  { name: "JP Morgan",     color: "#003D7A" },
  { name: "Stripe",        color: "#635BFF" },
  { name: "LinkedIn",      color: "#0A66C2" },
  { name: "Spotify",       color: "#1DB954" },
  { name: "Paytm",         color: "#002970" },
  { name: "PhonePe",       color: "#5F259F" },
  { name: "IBM",           color: "#006699" },
  { name: "Oracle",        color: "#C74634" },
  { name: "Accenture",     color: "#A100FF" },
  { name: "TCS",           color: "#CC2229" },
  { name: "Infosys",       color: "#006DB7" },
  { name: "Ola",           color: "#1C9E1C" },
  { name: "Tesla",         color: "#E31937" },
  { name: "HCL",           color: "#0076C0" },
];

const row1 = companies.slice(0, 14);
const row2 = companies.slice(14);

function CompanyPill({ name, color }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2 rounded-full flex-shrink-0 cursor-default select-none"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}18`;
        e.currentTarget.style.borderColor = `${color}55`;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 6px 24px -6px ${color}40`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-white font-black text-[10px] flex-shrink-0 shadow-sm"
        style={{ background: color }}
      >
        {name[0]}
      </span>
      <span className="text-[13px] font-semibold text-gray-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-1">
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #080808 0%, transparent 100%)' }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080808 0%, transparent 100%)' }} />
      <div
        className="flex gap-3"
        style={{
          width: 'max-content',
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((c, i) => (
          <CompanyPill key={`${c.name}-${i}`} name={c.name} color={c.color} />
        ))}
      </div>
    </div>
  );
}

function StatPill({ value, label, color }) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-3.5 rounded-2xl"
      style={{
        background: `${color}0D`,
        border: `1px solid ${color}28`,
        boxShadow: `0 0 28px -8px ${color}50`,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}1A`;
        e.currentTarget.style.boxShadow = `0 0 40px -6px ${color}70`;
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}0D`;
        e.currentTarget.style.boxShadow = `0 0 28px -8px ${color}50`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span className="text-2xl font-black tracking-tight" style={{ color }}>{value}</span>
      <span className="text-sm text-gray-400 font-medium leading-tight">{label}</span>
    </div>
  );
}

function NewsCard({ news }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={e => {
        const card = cardRef.current;
        card.style.borderColor = news.borderGlow;
        card.style.boxShadow = `0 0 50px -12px rgba(${news.accentColor},0.3), 0 20px 40px -10px rgba(0,0,0,0.5)`;
        card.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        const card = cardRef.current;
        card.style.borderColor = 'rgba(255,255,255,0.07)';
        card.style.boxShadow = '0 4px 24px -8px rgba(0,0,0,0.4)';
        card.style.transform = 'translateY(0)';
      }}
      className="news-card relative flex flex-col rounded-2xl p-7 cursor-pointer overflow-hidden"
      style={{
        background: 'rgba(14,14,14,0.9)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px -8px rgba(0,0,0,0.4)',
        transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {/* Spotlight gradient on hover */}
      <div className="news-spotlight absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(${news.accentColor},0.07) 0%, transparent 60%)`,
        }}
      />

      {/* Top shimmer line */}
      <div className="absolute top-0 left-[20%] right-[20%] h-[1px] rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${news.accentColor},0.4), transparent)`, opacity: 0.6 }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: `rgba(${news.accentColor},0.1)`,
            border: `1px solid rgba(${news.accentColor},0.2)`,
            boxShadow: `0 0 20px -6px rgba(${news.accentColor},0.3)`,
          }}
        >
          {news.icon}
        </div>
        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${news.tagColor}`}>
          {news.tag}
        </span>
      </div>

      {/* Body */}
      <h4 className="text-[15px] font-bold text-white mb-3 leading-snug relative z-10">
        {news.outlet}
      </h4>
      <p className="text-[13px] text-gray-400 leading-relaxed mb-6 flex-1 relative z-10">
        {news.desc}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs font-medium text-gray-500 pt-4 relative z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="font-semibold text-gray-500">{news.date}</span>
        <span className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors duration-200 group">
          Read more
          <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}

export default function MediaSection() {
  return (
    <section className="relative overflow-hidden py-28 w-full"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(ellipse, #f97316 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-[-100px] w-[700px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)', filter: 'blur(100px)' }} />
        {/* Noise grain overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }} />
      </div>

      {/* ── COMPANIES SHOWCASE ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 mb-20">

        {/* Section label */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase mb-5"
            style={{ color: '#f97316' }}>
            <span className="w-10 h-px bg-orange-500/40" />
            Where Our Alumni Work
            <span className="w-10 h-px bg-orange-500/40" />
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[58px] font-black text-white leading-[1.08] tracking-tight mb-5">
            Your next employer is{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(100deg, #f97316 0%, #fb923c 50%, #fde68a 100%)' }}>
                already here.
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full opacity-50"
                style={{ background: 'linear-gradient(90deg, #f97316, transparent)' }} />
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            1,400+ Coding Ninjas alumni are scaling engineering at{' '}
            <strong className="text-white font-semibold">28+ top companies</strong>{' '}
            globally — from MAANG giants to unicorn startups.
          </p>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-0">
          {[
            { value: '1,400+', label: 'Alumni in MAANG',  color: '#f97316' },
            { value: '103',    label: 'Unicorn Startups',  color: '#a78bfa' },
            { value: '₹1Cr+',  label: 'Highest CTC',       color: '#34d399' },
            { value: '128%',   label: 'Avg Salary Hike',   color: '#60a5fa' },
          ].map(stat => <StatPill key={stat.value} {...stat} />)}
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="relative z-10 flex flex-col gap-4 mb-24">
        <MarqueeRow items={row1} reverse={false} speed={38} />
        <MarqueeRow items={row2} reverse={true}  speed={32} />
      </div>

      {/* ── PRESS SECTION ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-8">

        {/* Press header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: '#f97316' }}>
              <span className="w-10 h-px bg-orange-500/40" />
              Press & Media
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Making waves across{' '}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #e2e8f0, #94a3b8)' }}>
                the tech industry.
              </span>
            </h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-orange-400 transition-colors duration-200 group">
            View all releases
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsItems.map((news, i) => (
            <NewsCard key={i} news={news} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .news-card:hover .news-spotlight {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";

// Grid background
const GridBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#444" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);


// Animated counter hook
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// Single stat block
function StatBlock({ icon, iconBg, stat, label, sublabel }) {
  return (
    <div style={{ textAlign: 'center', padding: '0 20px' }}>
      {/* Icon box */}
      <div style={{
        width: '72px', height: '72px', borderRadius: '18px',
        background: iconBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px', fontSize: '32px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
      }}>
        {icon}
      </div>
      {/* Big stat text */}
      <div style={{
        fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900,
        color: '#fff', lineHeight: 1, marginBottom: '12px',
        letterSpacing: '-0.02em'
      }}>
        {stat}
      </div>
      {/* Sublabel */}
      <div style={{ fontSize: 'clamp(13px,1.5vw,16px)', color: '#9ca3af', lineHeight: 1.4 }}>
        {sublabel}
      </div>
    </div>
  );
}

// Vertical divider between stat columns
function Divider() {
  return (
    <div style={{
      width: '1px',
      alignSelf: 'stretch',
      background: 'linear-gradient(to bottom, transparent, #333, transparent)',
      flexShrink: 0,
    }} />
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: "👔",
      iconBg: "linear-gradient(135deg, #2a2a2a, #3a3a3a)",
      stat: "1,400+ in MAANG",
      sublabel: "working at top tech companies",
    },
    {
      icon: "₹",
      iconBg: "linear-gradient(135deg, #2a2a2a, #3a3a3a)",
      stat: "₹1 Cr+ highest package",
      sublabel: "achieved by our graduates",
    },
    {
      icon: "📈",
      iconBg: "linear-gradient(135deg, #2a2a2a, #3a3a3a)",
      stat: "128% salary growth",
      sublabel: "average for our students",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: '#0d0d0d', position: 'relative',
        overflow: 'hidden', padding: '100px 24px',
      }}
    >
      <GridBg />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>

        {/* 3-column horizontal stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          alignItems: 'center',
          gap: 0,
        }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <StatBlock {...s} />
              {i < stats.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>

        {/* Explore offerings button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          <button style={{
            background: '#e35a2b', color: '#fff',
            fontWeight: 700, fontSize: '16px',
            padding: '14px 32px', borderRadius: '8px',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '10px',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#c94e22'}
          onMouseLeave={e => e.currentTarget.style.background = '#e35a2b'}
          onClick={() => { window.location.href = '/ai-courses'; }}
          >
            Explore offerings
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 13L9 5M5 9L9 5L13 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 13L9 9L13 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

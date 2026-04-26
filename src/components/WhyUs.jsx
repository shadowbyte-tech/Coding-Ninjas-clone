import React from 'react';

const guidanceItems = [
  {
    icon: '🎯',
    title: 'Mock interview',
    desc: 'Nail coding assessments and technical challenges',
    sub: 'Gain insights into problem-solving and algorithmic thinking',
  },
  {
    icon: '📋',
    title: 'Profile review',
    desc: 'Get your profile & resume reviewed by industry leaders',
    sub: 'Focus on different aspects of your job search',
  },
  {
    icon: '🛠️',
    title: 'Project guidance',
    desc: 'Career counselling with industry experts',
    sub: 'Get assistance on how to build real time projects',
  },
];

const bootcampCards = [
  {
    title: 'Job Bootcamp',
    subtitle: 'For professionals',
    desc: 'Placement assistance, live+ & blended learning',
    btnText: 'Explore Job Bootcamp',
    btnStyle: { background: '#1a1a1a', color: '#fff' },
    btnHover: '#004e89',
    accentColor: '#e35a2b',
  },
  {
    title: 'IIT Certifications',
    subtitle: 'Industry Recognized',
    desc: 'Programs in collaboration with IIT',
    btnText: 'Explore IIT Certifications',
    btnStyle: { background: '#f7931e', color: '#fff' },
    btnHover: '#e68900',
    accentColor: '#f7931e',
  },
];

function GuidanceCard({ icon, title, desc, sub }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        padding: '2rem',
        borderRadius: '12px',
        borderLeft: '4px solid #ff6b35',
        textAlign: 'center',
        flex: '1 1 220px',
        minWidth: '200px',
      }}
    >
      <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.1rem', color: '#333', marginBottom: '0.5rem', fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{desc}</p>
      <p style={{ color: '#999', fontSize: '0.85rem', fontStyle: 'italic' }}>{sub}</p>
    </div>
  );
}

function BootcampCard({ title, subtitle, desc, btnText, btnStyle, btnHover, accentColor }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        borderTop: `4px solid ${accentColor}`,
        textAlign: 'center',
        flex: '1 1 260px',
        minWidth: '240px',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
    >
      <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.4rem' }}>{title}</h3>
      <p style={{ color: '#ff6b35', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>
        {subtitle}
      </p>
      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{desc}</p>
      <button
        style={{
          ...btnStyle,
          border: 'none',
          padding: '0.7rem 1.5rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'background 0.2s, transform 0.2s',
          background: hovered ? btnHover : btnStyle.background,
          transform: hovered ? 'translateY(-2px)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {btnText}
      </button>
    </div>
  );
}

export default function WhyUs() {
  return (
    <div style={{ background: '#fff', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* ── Guidance Section ── */}
      <section style={{ padding: '4rem 2rem', background: '#fff', borderTop: '2px solid #e0e0e0', borderBottom: '2px solid #e0e0e0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: '#111', fontWeight: 700 }}>
            Mock interview, Profile review, Project guidance
          </h3>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: '2rem' }}>
            Everything you need to land your dream role — beyond just learning.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {guidanceItems.map((item) => (
              <GuidanceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stuck Banner ── */}
      <section
        style={{
          background: '#1a1a1a',
          color: '#fff',
          padding: '3rem 2rem',
          textAlign: 'center',
          fontSize: '1.4rem',
          fontWeight: 500,
          letterSpacing: '0.01em',
          borderBottom: '2px solid #333',
        }}
      >
        ❤️ Always available when you get stuck
      </section>

      {/* ── Bootcamp Section ── */}
      <section style={{ background: '#f5f5f5', padding: '3.5rem 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {bootcampCards.map((card) => (
              <BootcampCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

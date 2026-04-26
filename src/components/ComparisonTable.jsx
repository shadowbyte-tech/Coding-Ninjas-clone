const rows = [
  { feature: 'Structured + problem solving based', cn: true, free: false, other: true },
  { feature: 'Fastest 1:1 doubt support', cn: true, free: false, other: false },
  { feature: 'Integrated prep platform', cn: true, free: false, other: false },
  { feature: 'Profiles highlighted on Naukri', cn: true, free: false, other: false },
  { feature: 'Live + recorded classes', cn: true, free: false, other: true },
  { feature: 'IIT/Stanford faculty', cn: true, free: false, other: false },
  { feature: 'Placement assistance', cn: true, free: false, other: false },
];

function GreenCheck() {
  return (
    <div
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: '#4b7a2e',
        border: '2px solid #6abf3f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M2.5 7.5L5.5 10.5L11.5 4"
          stroke="#86efac"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function GrayX({ faint = false }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M4 4L14 14M14 4L4 14"
          stroke={faint ? '#3a3a3a' : '#555'}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function LightCheck() {
  return (
    <div style={{ textAlign: 'center' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M3 9.5L7 13.5L15 5"
          stroke="#555"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CNLogo() {
  return (
    <div
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #e35a2b, #f97316)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 900,
          fontSize: '14px',
        }}
      >
        C
      </div>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparison-table" style={{ background: '#0d0d0d', padding: '60px 24px 80px' }}>
      <p
        style={{
          textAlign: 'center',
          color: '#f97316',
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '40px',
          letterSpacing: '0.01em',
        }}
      >
        The Coding Ninjas advantage
      </p>

      <div style={{ maxWidth: '760px', margin: '0 auto', overflowX: 'auto' }}>
      <div
        style={{
          minWidth: 'min(100%, 520px)',
          background: '#141414',
          borderRadius: '20px',
          border: '1px solid #222',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 80px 120px 120px',
            padding: '20px 28px',
            borderBottom: '1px solid #222',
            alignItems: 'center',
          }}
        >
          <div />
          <div style={{ textAlign: 'center' }}>
            <CNLogo />
          </div>
          <div
            style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Free resources
          </div>
          <div
            style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Other courses
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.feature}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 80px 120px 120px',
              padding: '18px 28px',
              borderBottom: i < rows.length - 1 ? '1px solid #1a1a1a' : 'none',
              alignItems: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span style={{ color: '#d1d5db', fontSize: '15px' }}>{row.feature}</span>
            <div>{row.cn ? <GreenCheck /> : <GrayX />}</div>
            <div>{row.free ? <LightCheck /> : <GrayX />}</div>
            <div>{row.other ? <LightCheck /> : <GrayX />}</div>
          </div>
        ))}

        <div
          style={{
            padding: '20px 28px',
            borderTop: '1px solid #222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            background: '#111',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e35a2b, #f97316)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: '13px',
              }}
            >
              C
            </div>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: '15px' }}>
              coding<span style={{ fontWeight: 400 }}>ninjas</span>
            </span>
          </div>
          <p
            style={{
              color: '#f59e0b',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              margin: 0,
            }}
          >
            Your dream role, faster and with confidence! ⚡
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

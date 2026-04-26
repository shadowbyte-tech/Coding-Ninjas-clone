import { useState } from "react";

const students = [
  { name: "Priya S.", bg: "Google",    tag: "CS/IT",              color: "#4285f4", avatar: "#4285f4" },
  { name: "Rohit M.", bg: "AWS",       tag: "Service to product", color: "#ff9900", avatar: "#ff9900" },
  { name: "Anjali K.", bg: "Citibank", tag: "Non-CS/IT",          color: "#1a56db", avatar: "#1a56db" },
  { name: "Sonu T.",  bg: "Uber",      tag: "Tier 2/3 college",   color: "#000",    avatar: "#374151" },
  { name: "Shourya G.", bg: "Microsoft", tag: "CS/IT",            color: "#00a4ef", avatar: "#00a4ef" },
  { name: "Neha R.",  bg: "Flipkart",  tag: "Non-CS/IT",          color: "#f7931e", avatar: "#f7931e" },
  { name: "Anil P.",  bg: "Optum",     tag: "Tier 2/3 college",   color: "#e35a2b", avatar: "#e35a2b" },
];

export default function PlacementSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", marginBottom: "36px", gap: "12px" }}>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(18px,2.5vw,26px)", color: "#111" }}>
            Our Ninjas at top tech companies
          </h2>
          <a href="#" style={{ color: "#e35a2b", fontSize: "14px", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
            Download placement report <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>

        {/* Cards row */}
        <div style={{ display: "flex", justifyContent: "center", overflowX: "auto" }}>
          <div style={{ display: "flex", gap: "16px", paddingBottom: "8px", scrollbarWidth: "none", flexWrap: "wrap", justifyContent: "center" }}>
            {students.map((s, i) => (
              <div
                key={i}
                style={{ position: "relative", flexShrink: 0 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{
                  width: "150px", background: "#f9fafb", border: "1px solid #e5e7eb",
                  borderRadius: "12px", padding: "20px 12px 14px", textAlign: "center",
                  cursor: "pointer", transition: "box-shadow 0.2s",
                  boxShadow: hovered === i ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%",
                    background: s.avatar, margin: "0 auto 10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: "18px",
                  }}>
                    {s.name[0]}
                  </div>
                  {/* Company */}
                  <div style={{
                    fontWeight: 800, fontSize: "14px", color: s.color,
                    marginBottom: "6px", letterSpacing: "-0.01em",
                  }}>
                    {s.bg}
                  </div>
                  {/* Tag */}
                  <div style={{
                    background: "#f3f4f6", borderRadius: "6px",
                    padding: "3px 8px", fontSize: "10px", color: "#6b7280", fontWeight: 500,
                  }}>
                    {s.tag}
                  </div>
                </div>

                {/* Tooltip on hover */}
                {hovered === i && (
                  <div style={{
                    position: "absolute", bottom: "calc(100% + 10px)", left: "50%",
                    transform: "translateX(-50%)",
                    background: "#111", borderRadius: "10px", padding: "14px 16px",
                    width: "190px", zIndex: 10,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                    pointerEvents: "none",
                  }}>
                    <div style={{
                      position: "absolute", bottom: "-6px", left: "50%",
                      transform: "translateX(-50%)",
                      width: "12px", height: "12px", background: "#111",
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    }} />
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "13px", marginBottom: "3px" }}>{s.name}</p>
                    <p style={{ color: "#e35a2b", fontSize: "12px", marginBottom: "8px" }}>Landed First Job! </p>
                    <a href="#" style={{ color: "#60a5fa", fontSize: "12px", textDecoration: "none", fontWeight: 600 }}>
                      LinkedIn profile 
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <button style={{
            background: "#e35a2b", color: "#fff", border: "none",
            borderRadius: "8px", padding: "13px 32px",
            fontWeight: 700, fontSize: "15px", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "8px",
          }}>
            Explore offerings
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 12V4M4 8L8 4L12 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12L8 8L12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

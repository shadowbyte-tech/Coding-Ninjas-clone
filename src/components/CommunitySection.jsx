const leaders = [
  { name: "Amit Agarwal",    role: "Director of Analytics", company: "Spinny"       },
  { name: "Shivram",         role: "Head of Analytics",     company: "Swiggy"       },
  { name: "Dhiraj Naik",     role: "Head of Analytics",     company: "Razorpay"     },
  { name: "Arjun Malhotra",  role: "Co-Founder",            company: "HCL"          },
  { name: "Deepak Chandani", role: "Chief Data & Analytics Officer", company: "Angel One" },
  { name: "Paul Hunkin",     role: "Founder",               company: "Jsonify"      },
  { name: "James Maby",      role: "Performance Analyst",   company: "Warwickshire" },
  { name: "Parikshit Nag",   role: "Group Head of AI/ML",   company: "ABB"          },
];

const colors = ["#f97316","#3b82f6","#10b981","#8b5cf6","#ec4899","#14b8a6","#f59e0b","#6366f1"];

export default function CommunitySection() {
  return (
    <section style={{ background: "#f9fafb", padding: "72px 24px", borderLeft: "4px solid #e35a2b", borderLeftWidth: "0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", gap: "0", marginBottom: "48px", maxWidth: "680px", margin: "0 auto 48px" }}>
          <div style={{ width: "4px", background: "#e35a2b", borderRadius: "2px", marginRight: "20px", flexShrink: 0 }} />
          <div>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(20px,3vw,32px)", color: "#111", marginBottom: "8px" }}>
              Your one stop destination to{" "}
              <span style={{ color: "#e35a2b" }}>code, create &amp; connect</span>
            </h2>
            <p style={{ color: "#6b7280", fontSize: "15px" }}>
              Unlock learning, career opportunities &amp; success from X to 10X
            </p>
          </div>
        </div>

        {/* 3 community cards stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px", margin: "0 auto" }}>

          {/* Card 1 - 10X Club */}
          <div style={{ background: "#fdf6ee", border: "1px solid #fde8cc", borderRadius: "16px", padding: "28px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ fontWeight: 900, fontSize: "22px", color: "#111", letterSpacing: "-0.04em" }}>
                10<span style={{ color: "#e35a2b" }}>X</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: "14px", color: "#111" }}>CLUB</span>
            </div>
            <p style={{ color: "#374151", fontSize: "14px", marginBottom: "16px", lineHeight: 1.5 }}>
              Unlock learning, career opportunities &amp; success from X to 10X
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Industry Expert Session", "CXO Cafe", "Tech Conference"].map(t => (
                <span key={t} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "5px 14px", fontSize: "12px", color: "#374151", fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 - Learn from CXOs */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px", display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "20px", marginBottom: "8px" }}></div>
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#111", marginBottom: "4px" }}>
                Learn from CXOs, founders &amp; more
              </h3>
              <p style={{ color: "#6b7280", fontSize: "13px" }}>
                Exclusive Insights from industry leaders
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {leaders.slice(0, 3).map((l, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: colors[i], display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: "18px", marginBottom: "4px",
                  }}>
                    {l.name[0]}
                  </div>
                  <p style={{ fontSize: "10px", color: "#6b7280", fontWeight: 600, maxWidth: "50px", lineHeight: 1.2 }}>
                    {l.company}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 - Hackathons */}
          <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            border: "1px solid #2a2a2a", borderRadius: "16px", padding: "28px 24px",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0, bottom: 0, left: "50%",
              backgroundImage: "radial-gradient(circle, #3a3a4a 1px, transparent 1px)",
              backgroundSize: "20px 20px", opacity: 0.3,
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#e35a2b", borderRadius: "20px", padding: "5px 14px",
                fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "12px",
              }}>
                 Hackathons
              </div>
              <p style={{ color: "#d1d5db", fontSize: "14px", marginBottom: "8px" }}>
                Hands on workshops
              </p>
              <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                Learn latest tools, make open source contributions and more!
              </p>
              <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "8px" }}>
                Partner events with clubs from IITs, IIMs
              </p>
            </div>
          </div>
        </div>

        {/* Leaders grid */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontWeight: 700, fontSize: "20px", color: "#111", marginBottom: "6px" }}>
            Weekly chats with top industry talent
          </h3>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>
            Exclusive insights from industry leaders
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px,1fr))", gap: "14px" }}>
            {leaders.map((l, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px",
                padding: "18px 14px", textAlign: "center",
                transition: "box-shadow 0.2s", cursor: "pointer",
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: colors[i % colors.length], margin: "0 auto 10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 800, fontSize: "18px",
                }}>
                  {l.name[0]}
                </div>
                <p style={{ fontWeight: 700, fontSize: "12px", color: "#111", marginBottom: "2px" }}>{l.name}</p>
                <p style={{ fontSize: "10px", color: "#6b7280", lineHeight: 1.3 }}>{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

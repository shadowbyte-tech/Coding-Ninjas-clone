import { useState } from "react";

const stages = [
  {
    id: "learn",
    label: "Learn",
    desc: "Experience seamless learning with problem solving modules, leaderboard and awards.",
    preview: (
      <div style={{ background: "#f8faff", borderRadius: "12px", padding: "20px", border: "1px solid #e0e7ff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ fontWeight: 700, fontSize: "13px", color: "#111" }}>Classroom</div>
          <div style={{ background: "#e35a2b", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px" }}>7 min read </div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            {["Introduction to LLMs", "Prompt Engineering", "RAG Systems", "Multi-Agent AI"].map((item, i) => (
              <div key={i} style={{ background: i === 0 ? "#e35a2b" : "#fff", color: i === 0 ? "#fff" : "#374151", padding: "8px 12px", borderRadius: "6px", marginBottom: "6px", fontSize: "12px", fontWeight: i === 0 ? 600 : 400, border: i !== 0 ? "1px solid #e5e7eb" : "none" }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{ width: "120px", background: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb", padding: "10px" }}>
            <div style={{ fontWeight: 700, fontSize: "11px", color: "#111", marginBottom: "8px" }}>Weekly leaderboard</div>
            {["Rohit M.", "Priya S.", "Anjali K."].map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: ["#f59e0b","#9ca3af","#cd7c2f"][i], fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>{i+1}</div>
                <span style={{ fontSize: "11px", color: "#374151" }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "excel",
    label: "Excel",
    desc: "Track your skill level and make meaningful progress for you to grow.",
    preview: (
      <div style={{ background: "#f8faff", borderRadius: "12px", padding: "20px", border: "1px solid #e0e7ff" }}>
        <div style={{ fontWeight: 700, fontSize: "13px", color: "#111", marginBottom: "14px" }}>Rated contest (Weekend)</div>
        <div style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "11px", color: "#6b7280", marginBottom: "4px" }}>Problems opened</p>
            <p style={{ fontWeight: 800, fontSize: "28px", color: "#111" }}>1546</p>
          </div>
          <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb", padding: "10px 14px" }}>
            <p style={{ fontSize: "11px", color: "#6b7280" }}>Better than</p>
            <p style={{ fontWeight: 800, fontSize: "22px", color: "#10b981" }}>95.05%</p>
          </div>
        </div>
        {/* Mini bar chart */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "50px" }}>
          {[20,35,25,45,30,50,38,42,55,48,60,52].map((h, i) => (
            <div key={i} style={{ flex: 1, background: i === 11 ? "#e35a2b" : "#e0e7ff", height: `${h}%`, borderRadius: "2px 2px 0 0" }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
          <span style={{ fontSize: "10px", color: "#9ca3af" }}>Jan</span>
          <span style={{ fontSize: "10px", color: "#9ca3af" }}>Dec</span>
        </div>
      </div>
    ),
  },
  {
    id: "standout",
    label: "Standout",
    desc: "Standout to recruiters, showcase ratings, get feedback and interview insights.",
    preview: (
      <div style={{ background: "#f8faff", borderRadius: "12px", padding: "20px", border: "1px solid #e0e7ff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
          <div style={{ background: "#e35a2b", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>Standout</div>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>Popular interview experiences</span>
        </div>
        {[
          { company: "G", role: "SDE - 1", color: "#4285f4", result: "Selected" },
          { company: "M", role: "SDE - 1", color: "#00a4ef", result: "Selected" },
          { company: "A", role: "SDE - 1", color: "#ff9900", result: "Selected" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "10px 12px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "13px" }}>{item.company}</div>
              <span style={{ fontSize: "12px", color: "#374151", fontWeight: 600 }}>{item.role}</span>
            </div>
            <span style={{ fontSize: "11px", color: "#10b981", fontWeight: 600 }}> {item.result}</span>
          </div>
        ))}
        <div style={{ background: "#f0fdf4", borderRadius: "8px", padding: "8px 12px", textAlign: "center", marginTop: "4px" }}>
          <span style={{ fontSize: "12px", color: "#059669", fontWeight: 600 }}>Personalized company preparation</span>
        </div>
      </div>
    ),
  },
];

export default function LearningModel() {
  const [active, setActive] = useState("learn");
  const current = stages.find(s => s.id === active);

  return (
    <section style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "48px", justifyContent: "center", textAlign: "center" }}>
          <span style={{ fontSize: '24px' }}>🚀</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(18px,2.5vw,28px)", color: "#111" }}>
            A 3-stage learning model to turn you into a{" "}
            <span style={{ color: "#e35a2b" }}>Coding Ninja</span>
          </h2>
        </div>

        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
          {/* Left: stage list */}
          <div style={{ flex: "0 0 240px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {stages.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  style={{
                    textAlign: "left", background: "none", border: "none",
                    cursor: "pointer", padding: "16px 0 16px 20px",
                    borderLeft: `3px solid ${isActive ? "#e35a2b" : "#e5e7eb"}`,
                    transition: "border-color 0.2s",
                  }}
                >
                  <p style={{ fontWeight: 700, fontSize: "17px", color: isActive ? "#111" : "#9ca3af", marginBottom: "6px" }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: "13px", color: isActive ? "#374151" : "#9ca3af", lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: preview */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            {current.preview}
            {/* Floating badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              borderRadius: "20px", padding: "6px 14px", marginTop: "14px",
            }}>
              <span style={{ color: '#10b981', fontSize: '14px' }}>✓</span>
              <span style={{ color: "#059669", fontSize: "12px", fontWeight: 600 }}>
                {active === "learn" && "Seamless learning experience"}
                {active === "excel" && "Showcase your contest ratings"}
                {active === "standout" && "Standout to top recruiters"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

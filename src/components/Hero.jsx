import { useState } from "react";

const experienceOptions = [
  "Working Professional - Technical",
  "Working Professional - Non Technical",
  "College Student - Final Year",
];

const topicOptions = ["Software Development", "Data Analytics", "Gen AI", "Data Science"];

const GreenBadge = () => (
  <div style={{
    width: 36, height: 36, borderRadius: "50%",
    background: "#2d4a1e", border: "2px solid #4a7c2f",
    display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
      stroke="#6abf3f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8.5L6.5 12L13 5" />
    </svg>
  </div>
);

export default function Hero() {
  const [experience, setExperience] = useState("");
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  return (
    <section style={{ background: "#0d0d0d", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "40px 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
      }}
        className="hero-grid"
      >

        {/* ── LEFT COLUMN ── */}
        <div style={{ textAlign: "left" }} className="hero-left">
          <p style={{ color: "#6abf3f", fontWeight: 600, fontSize: 14, marginBottom: 20, letterSpacing: "0.5px" }}>
            Tired of being stuck in your career?
          </p>

          <h1 style={{ fontSize: "clamp(42px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 30 }}>
            <span style={{ color: "#fff", display: "block" }}>Build the tech career</span>
            <span style={{
              display: "block",
              background: "linear-gradient(90deg, #f97316, #fb923c, #fed7aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              you actually want.
            </span>
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { bold: "128% salary increase", gray: "average for our graduates" },
              { bold: "1.5 lakh+ students", gray: "now working at dream companies" },
              { bold: "1,400+ in MAANG", gray: "and 103 unicorn startups" },
            ].map((stat, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, overflow: "hidden",
                transition: "all 0.3s ease", cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{
                  width: 72, height: 72, display: "flex", alignItems: "center",
                  justifyContent: "center", borderRight: "1px solid #2a2a2a", flexShrink: 0,
                }}>
                  <GreenBadge />
                </div>
                <div style={{ padding: "16px 20px", flex: 1 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{stat.bold}</span>
                  <span style={{ color: "#a3a3a3", fontWeight: 400 }}> {stat.gray}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Phone Frame ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", height: 600,
        }}>
          {/* Ambient Glow */}
          <div style={{
            position: "absolute", width: "85%", height: "85%",
            background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
            opacity: 0.15, filter: "blur(80px)", borderRadius: "50%",
            pointerEvents: "none", zIndex: 1,
          }} />

          {/* Phone Wrapper */}
          <div style={{ position: "relative", width: "100%", maxWidth: 360, zIndex: 10 }}>

            {/* Phone Frame — orange glow, no hardware chrome */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 360,
              background: "transparent",
              borderRadius: 40,
              overflow: "hidden",
              boxShadow: "0 0 80px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2), 0 25px 60px rgba(0,0,0,0.8)",
              aspectRatio: "9 / 16",
            }}>

              {/* Phone Screen */}
              <div style={{
                background: "#fff",
                borderRadius: 40,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
              }}>

                {/* Scrollable Form Content */}
                <div style={{
                  padding: "24px 20px",
                  color: "#111",
                  flex: 1,
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ddd #f0f0f0",
                }}>
                  {submitted ? (
                    <div style={{
                      textAlign: "center", padding: "40px 20px",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", height: "100%",
                    }}>
                      <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                      <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>You're all set!</h3>
                      <p style={{ color: "#666", fontSize: 12 }}>Our career advisor will call you within 24 hours.</p>
                    </div>
                  ) : (
                    <>
                      <h2 style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, lineHeight: 1.4 }}>
                        Start your career transformation
                      </h2>

                      {/* Experience */}
                      <div style={{ marginBottom: 14 }}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 8 }}>
                          Experience
                        </label>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {experienceOptions.map((opt) => (
                            <label key={opt} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
                              onClick={() => setExperience(opt)}>
                              <div style={{
                                width: 16, height: 16, border: `2px solid ${experience === opt ? "#f97316" : "#ddd"}`,
                                borderRadius: "50%", display: "flex", alignItems: "center",
                                justifyContent: "center", flexShrink: 0,
                              }}>
                                {experience === opt && (
                                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#f97316" }} />
                                )}
                              </div>
                              <span style={{ fontSize: 12, color: experience === opt ? "#111" : "#555", fontWeight: experience === opt ? 500 : 400 }}>
                                {opt}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Topic */}
                      <div style={{ marginBottom: 14 }}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 8 }}>
                          Select topic of interest
                        </label>
                        <select
                          value={topic}
                          onChange={e => setTopic(e.target.value)}
                          style={{
                            width: "100%", padding: "8px 10px", border: "1px solid #ddd",
                            borderRadius: 8, fontSize: 12, outline: "none", fontFamily: "inherit",
                            color: topic ? "#111" : "#aaa", background: "#fff",
                          }}
                        >
                          <option value="" disabled>Select your options/choices</option>
                          {topicOptions.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>

                      {/* Name */}
                      <div style={{ marginBottom: 14 }}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 8 }}>Name</label>
                        <input
                          type="text" placeholder="Enter name" value={name}
                          onChange={e => setName(e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1px solid #ddd", borderRadius: 8, fontSize: 12, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                        />
                      </div>

                      {/* Phone */}
                      <div style={{ marginBottom: 14 }}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 8 }}>Phone Number</label>
                        <input
                          type="tel" placeholder="Enter phone number" value={phone}
                          onChange={e => setPhone(e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1px solid #ddd", borderRadius: 8, fontSize: 12, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                        />
                      </div>

                      {/* Email */}
                      <div style={{ marginBottom: 14 }}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#444", marginBottom: 8 }}>Email</label>
                        <input
                          type="email" placeholder="Enter email" value={email}
                          onChange={e => setEmail(e.target.value)}
                          style={{ width: "100%", padding: "8px 10px", border: "1px solid #ddd", borderRadius: 8, fontSize: 12, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        onClick={handleSubmit}
                        style={{
                          width: "100%", background: "#f97316", color: "#fff",
                          border: "none", padding: "12px", borderRadius: 8,
                          fontWeight: 700, fontSize: 13, cursor: "pointer",
                          marginTop: 12, transition: "background 0.2s", fontFamily: "inherit",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "#ea580c"}
                        onMouseLeave={e => e.currentTarget.style.background = "#f97316"}
                      >
                        Find your course
                      </button>

                      {/* Disclaimer */}
                      <p style={{ fontSize: 10, color: "#999", marginTop: 12, lineHeight: 1.6 }}>
                        I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
                        <a href="#" style={{ color: "#aaa", textDecoration: "underline" }}>Privacy Policy</a>
                        {" & "}
                        <a href="#" style={{ color: "#aaa", textDecoration: "underline" }}>Terms of use</a>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .hero-left {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}

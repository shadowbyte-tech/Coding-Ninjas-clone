export default function TrustedByLearners() {
  return (
    <section style={{ background: "#0d0d0d", padding: "60px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        {/* Laurel + ratings row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
          {/* Left laurel */}
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 75 C20 65 5 55 8 40 C11 25 25 20 30 10" stroke="#3a3a3a" strokeWidth="2" fill="none"/>
            <ellipse cx="12" cy="45" rx="8" ry="5" transform="rotate(-30 12 45)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="8" cy="35" rx="7" ry="4" transform="rotate(-20 8 35)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="10" cy="55" rx="8" ry="4" transform="rotate(-40 10 55)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="18" cy="63" rx="7" ry="4" transform="rotate(-50 18 63)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="16" cy="28" rx="6" ry="4" transform="rotate(-15 16 28)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
          </svg>

          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(20px,3vw,28px)", marginBottom: "8px" }}>
              Trusted by learners
            </h2>
            <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "28px", lineHeight: 1.6 }}>
              1,00,000+ Coding Ninjas alumni from 1,100+ companies &amp; 4,400+ colleges working in top product companies
            </p>

            {/* Rating badges */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { logo: "f", logoColor: "#1877f2", logoBg: "#e7f3ff", name: "Facebook", rating: "4.9", reviews: "700+ reviews" },
                { logo: "G", logoColor: "#ea4335", logoBg: "#fef2f2", name: "Google", rating: "4.7", reviews: "2300+ reviews" },
                { logo: "C", logoColor: "#fff", logoBg: "#e35a2b", name: "CN", rating: "4.8", reviews: "Course rating" },
              ].map((r) => (
                <div key={r.name} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: r.logoBg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "16px", color: r.logoColor, flexShrink: 0,
                  }}>{r.logo}</div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ color: "#fff", fontWeight: 800, fontSize: "16px" }}>{r.rating}</span>
                      <span style={{ color: "#f59e0b", fontSize: "14px" }}>&#9733;</span>
                    </div>
                    <p style={{ color: "#9ca3af", fontSize: "11px" }}>{r.reviews}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right laurel (mirrored) */}
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
            <path d="M30 75 C20 65 5 55 8 40 C11 25 25 20 30 10" stroke="#3a3a3a" strokeWidth="2" fill="none"/>
            <ellipse cx="12" cy="45" rx="8" ry="5" transform="rotate(-30 12 45)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="8" cy="35" rx="7" ry="4" transform="rotate(-20 8 35)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="10" cy="55" rx="8" ry="4" transform="rotate(-40 10 55)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="18" cy="63" rx="7" ry="4" transform="rotate(-50 18 63)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
            <ellipse cx="16" cy="28" rx="6" ry="4" transform="rotate(-15 16 28)" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

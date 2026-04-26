import { useState, useEffect, useRef } from "react";

/* Global Styles */
const GlobalStyle = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'Manrope', sans-serif; background: #fff; color: #111; }
      :root {
        --orange: #e35a2b;
        --orange-light: #f97316;
        --dark: #0d0d0d;
        --dark2: #141414;
        --dark3: #1a1a1a;
        --border: #2a2a2a;
        --gray: #6b7280;
        --light-gray: #f3f4f6;
        --blue: #3b82f6;
      }
      .scroll-snap { scroll-snap-type: x mandatory; overflow-x: auto; scrollbar-width: none; }
      .scroll-snap::-webkit-scrollbar { display: none; }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-up { animation: fadeUp 0.6s ease forwards; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

/* Reusable Components */
const Chip = ({ children, color = "#fff3ee", text = "#e35a2b" }) => (
  <span style={{ background: color, color: text, padding: "3px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
    {children}
  </span>
);

const GreenCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#d1fae5" />
    <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SectionTag = ({ children }) => (
  <p style={{ color: "#e35a2b", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
    {children}
  </p>
);

/* Navbar */
const Navbar = ({ onCTA }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const sections = ["Curriculum", "IBM Certification", "Career support", "Faculty", "Testimonials", "Plans", "FAQs"];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #e5e7eb",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      transition: "box-shadow 0.3s",
    }}>
      {/* Top bar */}
      <div style={{ background: "#e35a2b", padding: "6px 24px", textAlign: "center" }}>
        <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>
          Advanced Certification in GenAI & Multi-Agent Systems
        </span>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #e35a2b, #f97316)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "13px" }}>C</div>
          <span style={{ fontWeight: 700, fontSize: "16px" }}>coding<span style={{ fontWeight: 400 }}>ninjas</span></span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "20px", overflow: "hidden" }}>
          {sections.slice(0, 5).map(s => (
            <a key={s} href={`#${s.toLowerCase().replace(/ /g, "-")}`} style={{ fontSize: "13px", color: "#374151", textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap" }}
              onMouseEnter={e => e.target.style.color = "#e35a2b"}
              onMouseLeave={e => e.target.style.color = "#374151"}
            >{s}</a>
          ))}
        </nav>

        {/* CTA */}
        <button onClick={onCTA} style={{ background: "#e35a2b", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontWeight: 700, fontSize: "14px", cursor: "pointer", whiteSpace: "nowrap" }}>
          Request callback
        </button>
      </div>
    </header>
  );
};

/* Hero Section */
const HeroSection = ({ onCTA }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const experiences = [
    "Working professional - Technical roles",
    "Working professional - Non technical",
    "College student - Final year",
    "College student - 1st to pre-final year",
    "Others",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.experience) e.experience = "Required";
    return e;
  };

  const submit = () => {
    const e = validate();
    setErrors(e);
    if (!Object.keys(e).length) setSubmitted(true);
  };

  const InputField = ({ field, label, type = "text", placeholder }) => (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>
        {label} <span style={{ color: "red" }}>*</span>
      </label>
      {field === "experience" ? (
        <select value={form.experience} onChange={e => setForm(p => ({ ...p, experience: e.target.value }))}
          style={{ width: "100%", padding: "10px 12px", border: `1px solid ${errors.experience ? "red" : "#d1d5db"}`, borderRadius: "8px", fontSize: "13px", outline: "none", background: "#fff", color: form.experience ? "#111" : "#9ca3af" }}>
          <option value="" disabled>Select experience</option>
          {experiences.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
      ) : (
        <input type={type} value={form[field]} placeholder={placeholder}
          onChange={e => { setForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: "" })); }}
          style={{ width: "100%", padding: "10px 12px", border: `1px solid ${errors[field] ? "red" : "#d1d5db"}`, borderRadius: "8px", fontSize: "13px", outline: "none" }} />
      )}
      {errors[field] && <p style={{ color: "red", fontSize: "11px", marginTop: "2px" }}>{errors[field]}</p>}
    </div>
  );

  return (
    <section style={{ background: "#0d0d0d", position: "relative", overflow: "hidden", padding: "60px 24px" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #2a2a2a 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.3 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

        {/* Left content */}
        <div style={{ flex: "1 1 420px" }}>
          {/* Logos */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#1a56db", color: "#fff", fontWeight: 900, fontSize: "18px", padding: "6px 14px", borderRadius: "6px", letterSpacing: "0.05em" }}>IBM</div>
            <div style={{ width: "1px", height: "30px", background: "#444" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg,#e35a2b,#f97316)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "11px" }}>C</div>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: "15px" }}>Coding Ninjas</span>
            </div>
          </div>

          <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(26px,4vw,42px)", lineHeight: 1.15, marginBottom: "16px" }}>
            Advanced Certification in<br />
            <span style={{ color: "#e35a2b" }}>GenAI & Multi Agent Systems</span><br />
            <span style={{ fontWeight: 400, fontSize: "0.65em", color: "#9ca3af" }}>in collaboration with IBM</span>
          </h1>

          {/* Meta pills */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
            {["6 months", "Online", "Tech Professionals"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "6px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "20px", padding: "6px 14px" }}>
                <span style={{ color: "#d1d5db", fontSize: "13px", fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {[
              { icon: "Industry ready hands-on projects", text: "Get Industry ready hands-on projects with Coding Ninjas & IBM" },
              { icon: "Expert-led classes", text: "Expert-led classes with doubt support by Coding Ninjas & IBM" },
              { icon: "Curriculum co-designed", text: "Curriculum co-designed by Experts of AI startup & IBM" },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "14px 16px" }}>
                <span style={{ fontSize: "22px" }}>{"\ud83d\udee0\ufe0f"}</span>
                <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.5 }}>{f.text}</p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[
              { stat: "70%", label: "faster coding", src: "Github Research" },
              { stat: "2.3M", label: "jobs by 2027", src: "Times of India" },
              { stat: "80%+", label: "enterprises use GenAI", src: "Data Centre Dynamics" },
              { stat: "53%", label: "skill gap", src: "Economic Times" },
            ].map((s, i) => (
              <div key={i} style={{ flex: "1 1 120px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
                <p style={{ color: "#e35a2b", fontWeight: 900, fontSize: "22px", lineHeight: 1 }}>{s.stat}</p>
                <p style={{ color: "#9ca3af", fontSize: "11px", marginTop: "4px" }}>{s.label}</p>
                <p style={{ color: "#4b5563", fontSize: "10px", marginTop: "2px" }}>{s.src}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div style={{ flex: "0 0 360px", background: "#fff", borderRadius: "16px", padding: "28px", boxShadow: "0 0 0 1px #222, 0 40px 80px rgba(0,0,0,0.8)" }}>
          <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "4px", fontWeight: 500 }}>Book a free live webinar to know more</p>
          <h3 style={{ fontWeight: 800, fontSize: "18px", color: "#111", marginBottom: "20px", lineHeight: 1.3 }}>
            Start your GenAI journey
          </h3>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>{"\ud83c\udf89"}</div>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "8px" }}>We'll be in touch!</h3>
              <p style={{ color: "#6b7280", fontSize: "13px" }}>Our counsellor will contact you shortly.</p>
            </div>
          ) : (
            <>
              <InputField field="name" label="Name" placeholder="Enter your name" />
              <InputField field="email" label="Email" type="email" placeholder="Enter your email" />
              <InputField field="phone" label="Phone Number" type="tel" placeholder="Enter phone number" />
              <InputField field="experience" label="Experience" />

              <button onClick={submit} style={{
                width: "100%", background: "#e35a2b", color: "#fff", border: "none",
                borderRadius: "8px", padding: "14px", fontWeight: 700, fontSize: "15px",
                cursor: "pointer", marginBottom: "12px", transition: "background 0.15s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#c94e22"}
                onMouseLeave={e => e.currentTarget.style.background = "#e35a2b"}>
                Register for <s style={{ opacity: 0.7, fontWeight: 400 }}>{"\u20b9"}499</s> FREE {"\u2192"}
              </button>

              <p style={{ fontSize: "10px", color: "#9ca3af", lineHeight: 1.6 }}>
                I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
                <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Privacy Policy</a> &{" "}
                <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Terms of use</a>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

/* Sticky Nav */
const StickyNav = () => {
  const [active, setActive] = useState("curriculum");
  const tabs = [
    { id: "curriculum", label: "Curriculum" },
    { id: "genai-advantage", label: "The Gen AI advantage" },
    { id: "ibm-certification", label: "IBM certification" },
    { id: "career-support", label: "Career support" },
    { id: "faculty", label: "Faculty" },
    { id: "testimonials", label: "Testimonials" },
    { id: "plans", label: "Plans" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", overflowX: "auto", scrollbarWidth: "none", position: "sticky", top: "96px", zIndex: 90 }}>
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {tabs.map(t => (
          <a key={t.id} href={`#${t.id}`} onClick={() => setActive(t.id)}
            style={{
              padding: "14px 18px", fontSize: "13px", fontWeight: active === t.id ? 700 : 500,
              color: active === t.id ? "#e35a2b" : "#6b7280",
              borderBottom: active === t.id ? `2px solid #e35a2b` : "2px solid transparent",
              textDecoration: "none", whiteSpace: "nowrap", transition: "all 0.15s",
            }}>
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
};

/* Future Proof Banner */
const FutureProofBanner = () => (
  <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", padding: "48px 24px" }}>
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(22px,3.5vw,36px)", marginBottom: "24px" }}>
        Future Proof Your career with <span style={{ color: "#e35a2b" }}>GenAI Skills</span>
      </h2>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { icon: "\u26a1", stat: "70% faster coding productivity", src: "Github Research" },
          { icon: "\ud83d\udcbc", stat: "2.3 million jobs by 2027", src: "Times of India" },
          { icon: "\ud83c\udfe2", stat: "80%+ enterprises will use GenAI by 2026", src: "Data Centre Dynamics" },
          { icon: "\ud83d\udcca", stat: "53% skill gap", src: "Economic Times" },
        ].map((item, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "20px", flex: "1 1 180px", maxWidth: "220px", textAlign: "left" }}>
            <span style={{ fontSize: "28px" }}>{item.icon}</span>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px", margin: "10px 0 4px", lineHeight: 1.4 }}>{item.stat}</p>
            <p style={{ color: "#64748b", fontSize: "11px" }}>{item.src}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Curriculum Section */
const CurriculumSection = () => {
  const [open, setOpen] = useState(null);

  const modules = [
    { title: "Prompt Engineering and API Integration", lessons: ["Introduction to GenAI", "Open-source vs. Closed-source models", "Distinguishing AI, ML, and DL", "Prompt engineering techniques", "OpenAI & Gemini API integration"] },
    { title: "LLMs and Foundation Models", lessons: ["Architecture of LLMs", "Fine-tuning techniques", "RLHF and alignment", "GPT-4, Claude, Mistral deep dive", "Model evaluation & benchmarking"] },
    { title: "RAG and Knowledge Systems", lessons: ["Vector databases (Pinecone, Weaviate)", "Embedding models", "Retrieval-Augmented Generation", "Knowledge graphs integration", "Semantic search systems"] },
    { title: "Multi-Agent Systems", lessons: ["Agent architectures", "LangChain & LangGraph", "CrewAI framework", "Tool use & function calling", "Agent orchestration patterns"] },
    { title: "GenAI Product Development", lessons: ["AI product design principles", "Deploying GenAI apps", "Cost optimization", "Safety & guardrails", "Real-world case studies"] },
  ];

  const techLogos = ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "LangGraph", "CrewAI", "HuggingFace", "Docker", "AWS"];

  const projects = [
    { icon: "\ud83d\udd0d", title: "AI-Powered Product Insight Generator" },
    { icon: "\ud83d\udcc4", title: "Resume-to-Job Semantic Search Engine" },
    { icon: "\ud83d\udcac", title: "Smart Customer Support Chatbot System" },
    { icon: "\ud83e\udd16", title: "Custom Multi-Agent AI Ecosystem" },
    { icon: "\u2795", title: "6 more projects by Coding Ninjas" },
    { icon: "\ud83c\udfe2", title: "& 3 more course-wise projects by IBM" },
  ];

  return (
    <section id="curriculum" style={{ padding: "72px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionTag>CURRICULUM</SectionTag>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "8px" }}>Industry ready in <span style={{ color: "#e35a2b" }}>6 months</span></h2>
        <p style={{ color: "#6b7280", marginBottom: "36px", fontSize: "15px" }}>Learn technologies like</p>

        {/* Tech logos row */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px" }}>
          {techLogos.map(t => (
            <div key={t} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "8px 16px", fontSize: "13px", fontWeight: 600, color: "#374151" }}>{t}</div>
          ))}
        </div>

        {/* Projects */}
        <h3 style={{ fontWeight: 800, fontSize: "20px", marginBottom: "20px" }}>Work on Real-World Projects</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "48px" }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: i >= 4 ? "#fff3ee" : "#f9fafb", border: `1px solid ${i >= 4 ? "#fcd9c7" : "#e5e7eb"}`, borderRadius: "12px", padding: "16px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ fontSize: "22px" }}>{p.icon}</span>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#111", lineHeight: 1.4 }}>{p.title}</p>
            </div>
          ))}
        </div>

        {/* Syllabus accordion */}
        <h3 style={{ fontWeight: 800, fontSize: "20px", marginBottom: "20px" }}>Syllabus designed to take you ahead</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {modules.map((m, i) => (
            <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: open === i ? "#fff8f5" : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontWeight: 700, fontSize: "15px", color: "#111" }}>{m.title}</span>
                <span style={{ fontSize: "20px", color: "#e35a2b", transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px", background: "#fff8f5" }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {m.lessons.map((l, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#374151" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#e35a2b", flexShrink: 0 }} />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Gen AI Advantage */
const GenAIAdvantage = () => {
  const cards = [
    { icon: "\ud83d\ude80", title: "A Gen AI first era is coming", desc: "AI is no longer an add-on, it's becoming a core part of how coding happens." },
    { icon: "\ud83d\udcda", title: "Learn for the future", desc: "Get mentored by experts and build your skills with real-world, AI-integrated projects." },
    { icon: "\ud83d\udcbc", title: "Prepare for your next job", desc: "Whether it's a product startup or MNC, recruiters now value AI fluency in tech roles." },
    { icon: "\ud83c\udfc6", title: "Gain a competitive edge", desc: "Get the skills, certification, and confidence to lead in this new tech era." },
  ];

  return (
    <section id="genai-advantage" style={{ background: "#0d0d0d", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <p style={{ color: "#e35a2b", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>THE CODING WORLD IS EVOLVING</p>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
          Stay on top with <span style={{ color: "#e35a2b" }}>Gen AI</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
          {cards.map((c, i) => (
            <div key={i} style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: "16px", padding: "28px 24px", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#e35a2b"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a2a"}>
              <span style={{ fontSize: "36px", display: "block", marginBottom: "16px" }}>{c.icon}</span>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: "10px" }}>{c.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* IBM Section */
const IBMSection = () => (
  <section id="ibm-certification" style={{ background: "#f0f5ff", padding: "72px 24px" }}>
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <p style={{ color: "#1a56db", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>IBM ADVANTAGE</p>
      <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
        Future-Ready with <span style={{ color: "#1a56db" }}>IBM</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {[
          { icon: "\ud83c\udfac", title: "35 hours", subtitle: "Pre-recorded Content" },
          { icon: "\ud83d\udca1", title: "Skill Development", subtitle: "with IBM Insights" },
          { icon: "\ud83d\udd27", title: "Hands-on Projects", subtitle: "by IBM Experts" },
          { icon: "\ud83c\udfc5", title: "3 +1 Certificates", subtitle: "from IBM" },
        ].map((item, i) => (
          <div key={i} style={{ background: "#fff", border: "1px solid #bfdbfe", borderRadius: "16px", padding: "28px 20px", textAlign: "center", boxShadow: "0 2px 12px rgba(26,86,219,0.06)" }}>
            <span style={{ fontSize: "36px", display: "block", marginBottom: "14px" }}>{item.icon}</span>
            <p style={{ fontWeight: 800, fontSize: "18px", color: "#1a56db" }}>{item.title}</p>
            <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "4px" }}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* Career Services */
const CareerServices = () => {
  const services = [
    { icon: "\ud83e\udd1d", title: "Career & Mentorship Community Access", desc: "Get ready for interviews by practising with industry experts" },
    { icon: "\ud83d\udccb", title: "Curated Career Portal Access", desc: "Get access to CN X NSDC job boards and showcase your profile to recruiters" },
    { icon: "\ud83d\udcdd", title: "Resume Enhancement Support", desc: "Get personalised inputs on improving your resume" },
    { icon: "\ud83c\udfa4", title: "Live Sessions with Industry Leaders", desc: "Connect with top talent working to get career and project guidance" },
  ];

  return (
    <section id="career-support" style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionTag>CAREER SERVICES</SectionTag>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
          Helping you become <span style={{ color: "#e35a2b" }}>industry ready</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "28px 20px", transition: "box-shadow 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(227,90,43,0.12)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <span style={{ fontSize: "36px", display: "block", marginBottom: "14px" }}>{s.icon}</span>
              <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#111", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Community Section */
const CommunitySection = () => {
  const leaders = [
    { name: "Paul Hunkin", role: "Founder", company: "Jsonify" },
    { name: "Amit Agarwal", role: "Director of Analytics", company: "Spinny" },
    { name: "Shivram", role: "Head of Analytics", company: "Swiggy" },
    { name: "James Maby", role: "Performance Analyst", company: "Warwickshire" },
    { name: "Dhiraj Naik", role: "Head of Analytics", company: "Razorpay" },
    { name: "Arjun Malhotra", role: "Co-founder", company: "HCL" },
    { name: "Deepak Chandani", role: "Chief Data & Analytics Officer", company: "Angel One" },
    { name: "Parikshit Nag", role: "Group Head of AI/ML", company: "ABB" },
  ];

  const colors = ["#f97316", "#3b82f6", "#10b981", "#8b5cf6", "#ec4899", "#14b8a6", "#f59e0b", "#6366f1"];

  return (
    <section style={{ background: "#f9fafb", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(22px,3vw,34px)", marginBottom: "8px", textAlign: "center" }}>
          Your one stop destination to <span style={{ color: "#e35a2b" }}>code, create & connect</span>
        </h2>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "48px", fontSize: "15px" }}>
          Unlock learning, career opportunities & success from X to 10X
        </p>

        {/* 10X Club chips */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "48px" }}>
          {["Industry Expert Session", "CXO Cafe", "Tech Conference"].map(t => (
            <div key={t} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "20px", padding: "8px 18px", fontSize: "13px", fontWeight: 600 }}>{t}</div>
          ))}
        </div>

        {/* Leaders */}
        <h3 style={{ fontWeight: 700, fontSize: "20px", marginBottom: "8px" }}>Learn from CXOs, founders & more</h3>
        <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px" }}>Exclusive Insights from industry leaders</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
          {leaders.map((l, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px 16px", textAlign: "center" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: colors[i % colors.length], display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: "20px", color: "#fff", fontWeight: 800 }}>
                {l.name[0]}
              </div>
              <p style={{ fontWeight: 700, fontSize: "13px", color: "#111", marginBottom: "2px" }}>{l.name}</p>
              <p style={{ fontSize: "11px", color: "#6b7280", marginBottom: "4px" }}>{l.role}</p>
              <Chip color="#f3f4f6" text="#374151">{l.company}</Chip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Faculty Section */
const FacultySection = () => {
  const faculty = [
    { name: "Sameer Dubey", role: "Data Science Manager | Expert in Statistical Modeling", company: "Amazon", avatar: "#3b82f6" },
    { name: "Swastik Nayak", role: "GenAI Scientist | Expert in LLMs, RAG, Deep Learning", company: "Google", avatar: "#10b981" },
    { name: "Prakash Chandra Sinha", role: "VP-Applied AI/ML Lead | Building GenAI Systems", company: "Microsoft", avatar: "#8b5cf6" },
  ];

  return (
    <section id="faculty" style={{ background: "#0d0d0d", padding: "72px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTag>FACULTY</SectionTag>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
          Learn from the best <span style={{ color: "#e35a2b" }}>in the industry</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {faculty.map((f, i) => (
            <div key={i} style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: "16px", padding: "28px 24px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: f.avatar, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", color: "#fff", fontWeight: 800, marginBottom: "16px" }}>
                {f.name[0]}
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "17px", marginBottom: "6px" }}>{f.name}</h3>
              <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.5, marginBottom: "12px" }}>{f.role}</p>
              <p style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>WORKED AT</p>
              <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "6px", padding: "4px 10px", display: "inline-block", marginTop: "6px" }}>
                <span style={{ color: "#d1d5db", fontSize: "13px", fontWeight: 600 }}>{f.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Testimonials */
const Testimonials = () => {
  const reviews = [
    { name: "Akash Pal", company: "British Petroleum", text: "This Program was my bridge to a high-paying career in a product-based industry. Their industry-standard curriculum, relevant projects, and unwavering doubt support prepared me for the shift." },
    { name: "Rahul Singla", company: "Oracle", text: "I chose this program for its structured content and clear learning roadmap, which aligned perfectly with my career goals. The quality of the material and mentors were excellent." },
    { name: "Rashid Khan", company: "Oracle", text: "Before joining, I was trying to learn on my own but often hit a dead end. Coding Ninjas helped me identify exactly what I needed to build strong skills." },
    { name: "Satwika Bhattacharjee", company: "Goldman Sachs", text: "I was thrilled with my Coding Ninjas experience! Program enhanced my technical skills, providing invaluable help during interviews. Exceptional faculty and well-structured content." },
    { name: "Vaibhav Dubey", company: "Salesforce", text: "I am immensely gratified by the GenAI program at Coding Ninjas, which strengthened my understanding from fundamentals to advanced concepts." },
    { name: "Adish", company: "Indian Army", text: "Great learning experience with Coding Ninjas - GenAI & Multi-Agent Systems. Live sessions, hands-on projects, and a well-structured curriculum helped me build real-world GenAI skills." },
  ];

  const colors = ["#f97316","#3b82f6","#10b981","#8b5cf6","#ec4899","#14b8a6"];

  return (
    <section id="testimonials" style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTag>TESTIMONIALS</SectionTag>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
          Hear what our <span style={{ color: "#e35a2b" }}>students</span> have to say
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px", position: "relative" }}>
              <span style={{ fontSize: "36px", color: "#e5e7eb", position: "absolute", top: "16px", right: "20px", lineHeight: 1 }}>"</span>
              <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: colors[i % colors.length], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "16px", flexShrink: 0 }}>
                  {r.name[0]}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#111" }}>{r.name}</p>
                  <p style={{ fontSize: "12px", color: "#e35a2b", fontWeight: 600 }}>{r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Pricing Section */
const PricingSection = ({ onCTA }) => {
  const features = [
    "Industry-ready curriculum by expert",
    "24*7 AI doubt support (Unlimited)",
    "Relationship manager",
    "1:1 Domain Expert Sessions",
    "Full fees refundable within 7 days",
    "Project portfolio building",
    "Peer Interaction & network building",
  ];

  return (
    <section id="plans" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)", padding: "72px 24px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <SectionTag>COURSE PRICING</SectionTag>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
          One plan for <span style={{ color: "#e35a2b" }}>every learner</span>
        </h2>

        <div style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: "20px", padding: "36px", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <div style={{ background: "linear-gradient(135deg,#e35a2b,#f97316)", borderRadius: "8px", padding: "4px 12px" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "13px" }}>GEN AI & Multi Agent System</span>
            </div>
          </div>

          <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <GreenCheck />
                <span style={{ color: "#d1d5db", fontSize: "14px" }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "#fff", fontWeight: 900, fontSize: "32px" }}>{"\u20b9"}1,00,000<span style={{ fontSize: "16px", fontWeight: 400, color: "#6b7280" }}>/-</span></p>
              <p style={{ color: "#9ca3af", fontSize: "13px", marginTop: "4px" }}>EMI options available</p>
            </div>
            <button onClick={onCTA} style={{ background: "#e35a2b", color: "#fff", border: "none", borderRadius: "10px", padding: "14px 32px", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#c94e22"}
              onMouseLeave={e => e.currentTarget.style.background = "#e35a2b"}>
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Contact Form */
const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "" });
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});
  const experiences = ["Working professional - Technical roles", "Working professional - Non technical", "College student - Final year", "College student - 1st to pre-final year", "Others"];

  const submit = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.experience) e.experience = "Required";
    setErrors(e);
    if (!Object.keys(e).length) setDone(true);
  };

  return (
    <section id="contact" style={{ background: "#f9fafb", padding: "72px 24px" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <SectionTag>GOT DOUBTS</SectionTag>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.5vw,36px)", marginBottom: "8px" }}>We are here to <span style={{ color: "#e35a2b" }}>help you out</span></h2>
        <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "36px" }}>Fill in the form and our counsellor will contact you soon.</p>

        {done ? (
          <div style={{ textAlign: "center", padding: "40px", background: "#fff", borderRadius: "16px", border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>{"\u2705"}</div>
            <h3 style={{ fontWeight: 700, fontSize: "20px", color: "#111" }}>Submitted!</h3>
            <p style={{ color: "#6b7280", marginTop: "8px" }}>We'll reach out to you within 24 hours.</p>
          </div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {[
              { field: "name", label: "Name", type: "text", placeholder: "Enter your name" },
              { field: "email", label: "Email", type: "email", placeholder: "Enter your email" },
              { field: "phone", label: "Phone Number", type: "tel", placeholder: "Enter phone number" },
            ].map(({ field, label, type, placeholder }) => (
              <div key={field} style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>{label} <span style={{ color: "red" }}>*</span></label>
                <input type={type} placeholder={placeholder} value={form[field]}
                  onChange={e => { setForm(p => ({ ...p, [field]: e.target.value })); setErrors(p => ({ ...p, [field]: "" })); }}
                  style={{ width: "100%", padding: "11px 14px", border: `1px solid ${errors[field] ? "red" : "#d1d5db"}`, borderRadius: "8px", fontSize: "14px", outline: "none" }} />
                {errors[field] && <p style={{ color: "red", fontSize: "11px", marginTop: "2px" }}>{errors[field]}</p>}
              </div>
            ))}

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Experience <span style={{ color: "red" }}>*</span></label>
              <select value={form.experience} onChange={e => { setForm(p => ({ ...p, experience: e.target.value })); setErrors(p => ({ ...p, experience: "" })); }}
                style={{ width: "100%", padding: "11px 14px", border: `1px solid ${errors.experience ? "red" : "#d1d5db"}`, borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff" }}>
                <option value="" disabled>Select experience</option>
                {experiences.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
              {errors.experience && <p style={{ color: "red", fontSize: "11px", marginTop: "2px" }}>{errors.experience}</p>}
            </div>

            <button onClick={submit} style={{ width: "100%", background: "#e35a2b", color: "#fff", border: "none", borderRadius: "8px", padding: "14px", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#c94e22"}
              onMouseLeave={e => e.currentTarget.style.background = "#e35a2b"}>
              Request callback
            </button>
            <p style={{ fontSize: "10px", color: "#9ca3af", marginTop: "12px", lineHeight: 1.6 }}>
              I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
              <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Privacy Policy</a> &{" "}
              <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Terms of use</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

/* FAQ Section */
const FAQSection = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What is the Advanced Certification in Gen AI and Multi-Agent Systems?", a: "A 6-month live training program for working professionals in collaboration with IBM, focusing on real-world applications of Generative AI, LLMs, and autonomous agent systems through hands-on projects, 1:1 mentorship, and expert-led sessions." },
    { q: "What is the duration and mode of the GenAI certification program?", a: "This is a 6-month live online program. You'll learn through expert-led sessions with 1:1 real-time doubt support, plus 35 hours of pre-recorded content to strengthen your concepts." },
    { q: "Who is eligible to enroll in this GenAI and Multi-Agent Systems course?", a: "The program is best suited for working professionals from technical domains (e.g., developers, analysts, engineers) who want to upskill in the latest advancements in Generative AI and Autonomous Agent Systems." },
    { q: "Do I need a computer science degree to apply?", a: "No. If you're working in a technical domain and are eager to learn about Generative AI and Multi-Agent Systems, you're welcome to join. A formal computer science degree is not mandatory." },
    { q: "What kind of projects will I build in this GenAI certification?", a: "You'll work on 10+ real-world projects including an AI-Powered Product Insight Generator, Resume-to-Job Semantic Search Engine, Smart Customer Support Chatbot, and Custom Multi-Agent AI Ecosystem. Plus 3 IBM-designed projects." },
    { q: "Will my projects be reviewed by industry experts?", a: "Yes, all projects are reviewed by domain experts who will provide feedback to improve your technical and problem-solving skills." },
    { q: "Will this course help in improving my online job profile?", a: "Yes. You get access to the CN X NSDC job board, resume enhancement support, and your profile gets highlighted to recruiters in our network." },
  ];

  return (
    <section id="faqs" style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionTag>BEFORE YOU ASK</SectionTag>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,3.5vw,38px)", marginBottom: "48px" }}>
          Here's what you <span style={{ color: "#e35a2b" }}>need to know</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", padding: "20px 24px", background: open === i ? "#fff8f5" : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontWeight: 600, fontSize: "15px", color: "#111", lineHeight: 1.4 }}>{f.q}</span>
                <span style={{ fontSize: "20px", color: "#e35a2b", flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)", marginTop: "2px" }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px", background: "#fff8f5" }}>
                  <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: 1.7 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Footer */
const Footer = () => (
  <footer style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a", padding: "48px 24px 24px" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "32px", marginBottom: "40px" }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg,#e35a2b,#f97316)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "12px" }}>C</div>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>coding<span style={{ fontWeight: 400 }}>ninjas</span></span>
          </div>
          <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6 }}>Get the career you deserve, faster.</p>
          <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "8px" }}>{"\ud83d\udcde"} 1800-123-3598</p>
          <p style={{ color: "#6b7280", fontSize: "12px" }}>{"\u2709\ufe0f"} contact@codingninjas.com</p>
        </div>

        {/* Links */}
        {[
          { title: "Coding Ninjas", links: ["Careers", "Privacy policy", "Terms & conditions", "Pricing & refund policy", "Bug bounty"] },
          { title: "Products", links: ["Job Bootcamp", "Code 360", "Professional Certifications", "Student Certifications"] },
          { title: "Community", links: ["10X Club", "Student Chapters", "Hire from us"] },
        ].map(col => (
          <div key={col.title}>
            <h5 style={{ color: "#fff", fontWeight: 700, fontSize: "14px", marginBottom: "14px" }}>{col.title}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {col.links.map(l => (
                <li key={l}><a href="#" style={{ color: "#6b7280", fontSize: "13px", textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "#6b7280"}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <p style={{ color: "#4b5563", fontSize: "12px" }}>Copyright © Sunrise Mentors Pvt. Ltd. All rights reserved.</p>
        <div style={{ display: "flex", gap: "16px" }}>
          {["\ud83d\udcf8", "\ud83d\udc4d", "\ud83d\udcbc", "\ud83d\udc26", "\u25b6\ufe0f"].map((icon, i) => (
            <a key={i} href="#" style={{ color: "#6b7280", fontSize: "18px", textDecoration: "none" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#6b7280"}>{icon}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* Sticky Bottom Bar */
const StickyBottomBar = ({ onCTA }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200, background: "#fff", borderTop: "1px solid #e5e7eb", boxShadow: "0 -4px 20px rgba(0,0,0,0.1)", padding: "12px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "15px", color: "#111" }}>Advanced Certification in GenAI & Multi-Agent Systems</p>
          <p style={{ fontSize: "12px", color: "#6b7280" }}>In collaboration with IBM · 6 months · Online</p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button onClick={onCTA} style={{ background: "#f9fafb", color: "#111", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "10px 20px", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>
            Request callback
          </button>
          <button onClick={onCTA} style={{ background: "#e35a2b", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 24px", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
            Apply now {"\u2192"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* Main App Component */
export default function AICoursesPage() {
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", minHeight: "100vh" }}>
      <GlobalStyle />
      <Navbar onCTA={scrollToForm} />
      <HeroSection onCTA={scrollToForm} />
      <StickyNav />
      <FutureProofBanner />
      <CurriculumSection />
      <GenAIAdvantage />
      <IBMSection />
      <CareerServices />
      <CommunitySection />
      <FacultySection />
      <Testimonials />
      <PricingSection onCTA={scrollToForm} />
      <div ref={formRef}><ContactSection /></div>
      <FAQSection />
      <Footer />
      <StickyBottomBar onCTA={scrollToForm} />
    </div>
  );
}

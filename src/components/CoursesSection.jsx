import { useState } from "react";

const domains = [
  "Data Analytics",
  "Generative AI",
  "Software Development",
  "Data Structures & Algorithms"
];

const certifications = [
  { code: "IITM-P", name: "IITM Pravartak, TIH IIT Madras" },
  { code: "IITM", name: "IIT Mandi - TIH" },
  { code: "IBM", name: "IBM Certification" },
  { code: "CN", name: "Coding Ninjas" }
];

const allCourses = [
  {
    id: 1,
    title: "Professional Certification in Data Analytics with GenAI",
    institute: "IITM Pravartak, TIH IIT Madras",
    instituteCode: "IITM-P",
    image: "https://picsum.photos/seed/iitm1/600/300",
    logoText: "IIT", logoColor: "#1e40af",
    duration: "6 months",
    domain: "Data Analytics",
    closed: false,
    techIcons: [{ label: "SQL", color: "#f59e0b", bg: "#fffbeb" }, { label: "Py", color: "#3b82f6", bg: "#eff6ff" }]
  },
  {
    id: 2,
    title: "Advanced Certification in Data Analytics with GenAI",
    institute: "IIT Mandi – TIH (Technology & Innovation Hub)",
    instituteCode: "IITM",
    image: "https://picsum.photos/seed/iitmandi1/600/300",
    logoText: "HGI", logoColor: "#0f766e",
    duration: "6 months",
    domain: "Data Analytics",
    closed: false,
    techIcons: [{ label: "Mo", color: "#7c3aed", bg: "#f5f3ff" }, { label: "SQL", color: "#f59e0b", bg: "#fffbeb" }]
  },
  {
    id: 3,
    title: "Data Analytics with GenAI Program by Coding Ninjas",
    institute: "Coding Ninjas",
    instituteCode: "CN",
    image: "https://picsum.photos/seed/cn1/600/300",
    logoText: "CN", logoColor: "#ea580c",
    duration: "9 months",
    domain: "Data Analytics",
    closed: false,
    techIcons: [{ label: "Ex", color: "#16a34a", bg: "#dcfce7" }, { label: "SQL", color: "#f59e0b", bg: "#fffbeb" }]
  },
  {
    id: 4,
    title: "Advanced Certification in GenAI and Multi-Agent Systems",
    institute: "IITM Pravartak, TIH IIT Madras",
    instituteCode: "IITM-P",
    image: "https://picsum.photos/seed/genai2/600/300",
    logoText: "IIT", logoColor: "#1e40af",
    duration: "6 months",
    domain: "Generative AI",
    closed: true,
    techIcons: [{ label: "LLM", color: "#111", bg: "#f3f4f6" }, { label: "Py", color: "#3b82f6", bg: "#eff6ff" }]
  },
  {
    id: 5,
    title: "PG Certification in Software Development",
    institute: "IBM Certification",
    instituteCode: "IBM",
    image: "https://picsum.photos/seed/sdev2/600/300",
    logoText: "IBM", logoColor: "#1e3a8a",
    duration: "9 months",
    domain: "Software Development",
    closed: false,
    techIcons: [{ label: "JS", color: "#ca8a04", bg: "#fefce8" }, { label: "Re", color: "#0ea5e9", bg: "#f0f9ff" }]
  },
  {
    id: 6,
    title: "Professional Certification in Data Structures",
    institute: "IIT Mandi - TIH",
    instituteCode: "IITM",
    image: "https://picsum.photos/seed/dsa1/600/300",
    logoText: "HGI", logoColor: "#0f766e",
    duration: "4 months",
    domain: "Data Structures & Algorithms",
    closed: false,
    techIcons: [{ label: "C++", color: "#1d4ed8", bg: "#eff6ff" }, { label: "Py", color: "#3b82f6", bg: "#eff6ff" }]
  }
];

export default function CoursesSection() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);

  const filteredCourses = allCourses.filter(c => c.domain === activeDomain);

  return (
    <section className="bg-white py-16 md:py-24 relative border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Explore our professional programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Upgrade your skills with our university-backed certifications in tech's most demanded fields.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── LEFT SIDEBAR FILTERS ── */}
          <div className="lg:w-1/4 shrink-0">
            {/* Domain Filter */}
            <div className="mb-10">
              <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                Domain
              </h3>
              <ul className="flex flex-col gap-1.5">
                {domains.map((dom) => (
                  <li key={dom}>
                    <button
                      onClick={() => setActiveDomain(dom)}
                      className={`text-left w-full px-4 py-2.5 rounded-lg text-[15px] transition-colors ${
                        activeDomain === dom
                          ? "bg-orange-50 text-orange-600 font-semibold border border-orange-100"
                          : "text-gray-600 hover:bg-gray-50 font-medium border border-transparent"
                      }`}
                    >
                      {dom}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Map (Visual Only) */}
            <div>
              <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                Certification By
              </h3>
              <ul className="flex flex-col gap-3 px-2">
                {certifications.map((cert) => (
                  <li key={cert.code} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded shrink-0 bg-gray-50 border border-gray-200 flex items-center justify-center text-[9px] font-black text-gray-700">
                      {cert.code}
                    </div>
                    <span className="text-[13px] text-gray-600 font-medium leading-tight">
                      {cert.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT CONTENT CARDS ── */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                  
                  {/* Image Header */}
                  <div className="relative h-[160px] bg-gray-100 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur rounded shadow px-2 py-1.5 flex items-center gap-2">
                      <div 
                        className="w-[22px] h-[22px] rounded flex items-center justify-center text-[8px] font-black text-white"
                        style={{ backgroundColor: course.logoColor }}
                      >
                        {course.logoText}
                      </div>
                      <span className="text-[11px] font-bold text-gray-800">
                        {course.instituteCode}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[16px] font-bold text-[#111] leading-tight mb-2 h-[44px] overflow-hidden">
                      {course.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 mb-4 h-[38px] overflow-hidden leading-relaxed">
                      {course.institute}
                    </p>
                    
                    <div className="flex gap-2 mb-5 mt-auto">
                      <span className="px-2.5 py-1 bg-[#fff7ed] text-[#c2410c] border border-[#fed7aa] rounded text-[10px] font-bold uppercase tracking-wide">
                        With Certificate
                      </span>
                      {course.closed && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase tracking-wide">
                          Closed
                        </span>
                      )}
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-auto">
                      <div className="flex -space-x-1">
                        {course.techIcons.map((icon, i) => (
                          <div 
                            key={i} 
                            className="w-7 h-7 rounded-full border-[1.5px] border-white flex items-center justify-center text-[9px] font-bold shadow-sm relative z-10"
                            style={{ backgroundColor: icon.bg, color: icon.color }}
                          >
                            {icon.label}
                          </div>
                        ))}
                      </div>
                      <span className="text-[13px] font-semibold text-gray-600">
                        {course.duration}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="w-full py-16 flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
                <span className="text-4xl mb-4">🔍</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">No courses found</h3>
                <p className="text-gray-500">More programs coming soon to this domain.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}

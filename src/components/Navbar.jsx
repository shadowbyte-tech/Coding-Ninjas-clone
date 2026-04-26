import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Sparkles } from 'lucide-react';

/* Course data for dropdowns */
const domainList = {
  professionals: [
    { id: 'data-analytics', label: 'Data Analytics' },
    { id: 'generative-ai',  label: 'Generative AI' },
    { id: 'software-dev',   label: 'Software Development' },
    { id: 'dsa',            label: 'Data Structures & Algorithms' },
  ],
  students: [
    { id: 'data-analytics', label: 'Data Analytics' },
    { id: 'generative-ai',  label: 'Generative AI' },
    { id: 'software-dev',   label: 'Software Development' },
    { id: 'dsa',            label: 'Data Structures & Algorithms' },
  ],
};

const courseMap = {
  professionals: {
    'data-analytics': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM-P', logoBg: '#003f7f', institute: 'IITM Pravartak, TIH IIT Madras',          name: 'Professional Certification in Data Analytics with GenAI',       closed: false },
            { logoCode: 'IITG',   logoBg: '#7b1818', institute: 'E&ICT Academy, IIT Guwahati',              name: 'PG Certification in Data Analytics with GenAI',                 closed: false },
            { logoCode: 'IITM',   logoBg: '#1a4a8a', institute: 'IIT Mandi - TIH (Technology & Innovation Hub)', name: 'Professional Certification in Data Analytics with GenAI', closed: true  },
            { logoCode: 'IITP',   logoBg: '#1a4f8a', institute: 'Vishlesan i-hub, IIT Patna',               name: 'Professional Certification in Data Analytics with GenAI',       closed: true  },
          ],
        },
        {
          heading: 'Job Bootcamp',
          items: [
            { logoCode: 'CN',     logoBg: '#e35a2b', institute: 'Coding Ninjas',                            name: 'Data Analytics with GenAI Program by Coding Ninjas Job Bootcamp', closed: false },
          ],
        },
      ],
    },
    'generative-ai': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM',   logoBg: '#1a4a8a', institute: 'IIT Mandi - TIH (Technology & Innovation Hub)', name: 'Professional Certification in GenAI and Multi-Agent Systems', closed: false },
            { logoCode: 'IITM-P', logoBg: '#003f7f', institute: 'IITM Pravartak, TIH IIT Madras',          name: 'Advanced Certification in GenAI for Non-Tech Professionals',    closed: false },
          ],
        },
        {
          heading: 'Advanced Certification',
          items: [
            { logoCode: 'IBM',    logoBg: '#1f57c3', institute: 'IBM Certification',                        name: 'Advanced Certification in GenAI & Multi-Agent Systems',         closed: false },
            { logoCode: 'CN',     logoBg: '#e35a2b', institute: 'Coding Ninjas',                            name: 'Advanced Certification in GenAI and Multi-Agent Systems Program', closed: false },
          ],
        },
      ],
    },
    'software-dev': {
      sections: [
        {
          heading: 'Job Bootcamp',
          items: [
            { logoCode: 'CN',     logoBg: '#e35a2b', institute: 'Coding Ninjas',                            name: 'Software Development with GenAI Program by Coding Ninjas Job Bootcamp', closed: false },
            { logoCode: 'CN',     logoBg: '#e35a2b', institute: 'Coding Ninjas',                            name: 'Data Science with GenAI Program by Coding Ninjas Job Bootcamp',          closed: false },
          ],
        },
      ],
    },
    'dsa': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM-P', logoBg: '#003f7f', institute: 'IITM Pravartak, TIH IIT Madras',          name: 'Advanced Certification in Data Structures and Algorithms',       closed: false },
          ],
        },
        {
          heading: 'Practice Platform',
          items: [
            { logoCode: 'CN',     logoBg: '#e35a2b', institute: 'Code 360 by Coding Ninjas',                name: 'Free DSA Practice, Mock Tests & Contests',                      closed: false },
          ],
        },
      ],
    },
  },
  students: {
    'data-analytics': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM',   logoBg: '#1a4a8a', institute: 'IIT Mandi - TIH (Technology & Innovation Hub)', name: 'Advanced Certification in Data Analytics with GenAI',       closed: false },
            { logoCode: 'IITP',   logoBg: '#1a4f8a', institute: 'Vishlesan i-hub, IIT Patna',               name: 'Training and Internship Certification in Data Analytics with GenAI', closed: true },
          ],
        },
      ],
    },
    'generative-ai': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM',   logoBg: '#1a4a8a', institute: 'IIT Mandi - TIH (Technology & Innovation Hub)', name: 'Advanced Certification in GenAI and Multi-Agent Systems',   closed: false },
          ],
        },
      ],
    },
    'software-dev': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM-P', logoBg: '#003f7f', institute: 'IITM Pravartak, TIH IIT Madras',          name: 'Advanced Certification in Software Development with GenAI and DSA', closed: false },
          ],
        },
      ],
    },
    'dsa': {
      sections: [
        {
          heading: 'Certification with IIT',
          items: [
            { logoCode: 'IITM-P', logoBg: '#003f7f', institute: 'IITM Pravartak, TIH IIT Madras',          name: 'Advanced Certification in Data Structures and Algorithms',       closed: false },
          ],
        },
      ],
    },
  },
};

/* Small colored square logo badge */
function InstituteLogo({ code, bg }) {
  return (
    <div
      className="w-10 h-10 rounded flex items-center justify-center text-white text-[9px] font-extrabold flex-shrink-0 border border-white/20"
      style={{ backgroundColor: bg }}
    >
      {code}
    </div>
  );
}

/* Single course row inside dropdown panel */
function CourseRow({ logoCode, logoBg, institute, name, closed }) {
  return (
    <a
      href="#"
      className="flex items-start gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
    >
      <InstituteLogo code={logoCode} bg={logoBg} />
      <div className="min-w-0">
        <p className="text-[#1558c0] text-[13px] font-semibold leading-tight group-hover:underline">
          {institute}
        </p>
        <p className="text-gray-700 text-[13px] leading-snug mt-0.5">{name}</p>
        {closed && (
          <span className="inline-block mt-1.5 bg-gray-800 text-white text-[11px] font-medium px-3 py-0.5 rounded-full">
            Enrolment closed
          </span>
        )}
      </div>
    </a>
  );
}

/* Mega dropdown panel */
function MegaPanel({ type }) {
  const list = domainList[type];
  const data = courseMap[type];
  const [activeDomain, setActiveDomain] = useState(list[0].id);
  const sections = data[activeDomain]?.sections ?? [];

  return (
    <div className="flex" style={{ minHeight: '300px', maxHeight: '500px' }}>
      {/* Left: domain list */}
      <div className="w-52 flex-shrink-0 border-r border-gray-100 py-5">
        <p className="text-gray-900 text-sm font-bold px-5 mb-3">Domain</p>
        <ul>
          {list.map(d => (
            <li key={d.id}>
              <button
                onMouseEnter={() => setActiveDomain(d.id)}
                className={`w-full flex items-center justify-between px-5 py-2.5 text-[13px] font-medium text-left transition-colors
                  ${activeDomain === d.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
              >
                <span>{d.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: course rows */}
      <div className="flex-1 py-4 px-2 overflow-y-auto">
        {sections.length === 0 ? (
          <p className="text-gray-400 text-sm px-4 py-6">Coming soon...</p>
        ) : (
          <div
            className="grid gap-x-6"
            style={{ gridTemplateColumns: sections.length >= 2 ? '1fr 1fr' : '1fr' }}
          >
            {sections.map((sec, si) => (
              <div key={si} className="min-w-0">
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest px-4 mb-1 mt-2">
                  {sec.heading}
                </p>
                {sec.items.map((item, ii) => (
                  <CourseRow key={ii} {...item} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu]   = useState(null); // 'professionals' | 'students' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab]   = useState('professionals');
  const [mobileDomain, setMobileDomain] = useState('data-analytics');

  const navRef       = useRef(null);
  const closeTimerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const onEnter = (key) => {
    clearTimeout(closeTimerRef.current);
    setOpenMenu(key);
  };
  const onLeave = () => {
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 130);
  };

  return (
    /* Wrap in a relative container so the full-width dropdown can be positioned */
    <div className="sticky top-0 z-40" ref={navRef}>

      {/* Announcement bar */}
      <div
        className="w-full text-center py-2 text-[13px] font-medium text-gray-700"
        style={{ background: 'linear-gradient(90deg, #fce7f3 0%, #ede9fe 50%, #fce7f3 100%)' }}
      >
        <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-300 inline -mt-0.5 mr-1" />
        Become AI ready{' '}
        <a
          href="/ai-courses"
          className="font-bold text-orange-500 underline underline-offset-2 hover:text-orange-600 transition-colors"
        >
          check our AI courses
        </a>
      </div>

      {/* White navbar with centered navigation */}
      <nav className="relative bg-white border-b border-gray-200" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[60px]">

            {/* Logo - Left side */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0 select-none">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm flex-shrink-0"
                style={{ background: 'radial-gradient(circle at 35% 35%, #f97316, #c94a00)' }}
              >
                <span className="text-white font-extrabold text-[17px] leading-none" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.5px' }}>
                  c
                </span>
              </div>
              <span className="text-[17px] tracking-tight leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="text-gray-500 font-normal">coding</span>
                <span className="text-gray-900 font-extrabold">ninjas</span>
              </span>
            </a>

            {/* Centered navigation items */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-8">
              
              {/* For working professionals */}
              <div onMouseEnter={() => onEnter('professionals')} onMouseLeave={onLeave}>
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 whitespace-nowrap
                    ${openMenu === 'professionals'
                      ? 'bg-orange-50 text-orange-600 border border-orange-200'
                      : 'text-gray-600 border border-transparent hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  For working professionals
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'professionals' ? 'rotate-180 text-orange-500' : 'text-gray-400'}`}
                  />
                </button>
              </div>

              {/* For College Students */}
              <div onMouseEnter={() => onEnter('students')} onMouseLeave={onLeave}>
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 whitespace-nowrap
                    ${openMenu === 'students'
                      ? 'bg-orange-50 text-orange-600 border border-orange-200'
                      : 'text-gray-600 border border-transparent hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  For College Students
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'students' ? 'rotate-180 text-orange-500' : 'text-gray-400'}`}
                  />
                </button>
              </div>
            </div>

            {/* Login button - Right side */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {/* Ghost login */}
              <button
                onClick={() => window.location.href = '/login'}
                className="px-5 py-2 rounded-full text-[14px] font-semibold text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900 transition-all duration-200 whitespace-nowrap select-none"
              >
                Log in
              </button>
              {/* Primary CTA */}
              <button
                onClick={() => window.location.href = '/get-started'}
                className="relative px-5 py-2 rounded-full text-[14px] font-bold text-white whitespace-nowrap select-none overflow-hidden transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  boxShadow: '0 0 0 1px rgba(249,115,22,0.3), 0 4px 16px -4px rgba(249,115,22,0.5)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 0 1px rgba(249,115,22,0.5), 0 6px 24px -4px rgba(249,115,22,0.65)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 1px rgba(249,115,22,0.3), 0 4px 16px -4px rgba(249,115,22,0.5)'; }}
              >
                Get started
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Full-width mega dropdown */}
        {openMenu && (
          <div
            className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 z-50"
            style={{ boxShadow: '0 12px 48px rgba(0,0,0,0.14)' }}
            onMouseEnter={() => onEnter(openMenu)}
            onMouseLeave={onLeave}
          >
            <div className="max-w-6xl mx-auto">
              <MegaPanel type={openMenu} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {[
                { key: 'professionals', label: 'For Professionals' },
                { key: 'students',      label: 'For Students' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => { setMobileTab(t.key); setMobileDomain(domainList[t.key][0].id); }}
                  className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors
                    ${mobileTab === t.key ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Domain + courses side by side */}
            <div className="flex">
              {/* Domain list */}
              <div className="w-2/5 border-r border-gray-100 py-3">
                {domainList[mobileTab].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setMobileDomain(d.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors
                      ${mobileDomain === d.id ? 'bg-gray-100 text-gray-900' : 'text-gray-500'}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              {/* Courses */}
              <div className="flex-1 py-2 overflow-y-auto">
                {courseMap[mobileTab][mobileDomain]?.sections.map((sec, si) => (
                  <div key={si} className="mb-3">
                    <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{sec.heading}</p>
                    {sec.items.map((item, ii) => (
                      <a 
                        key={ii} 
                        href={`/course/${item.institute.toLowerCase().replace(/[^a-z0-9]/g, '-')}/${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="flex items-start gap-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-7 h-7 rounded flex items-center justify-center text-white text-[8px] font-extrabold flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: item.logoBg }}>
                          {item.logoCode}
                        </div>
                        <div>
                          <p className="text-[11px] text-blue-600 font-semibold leading-tight">{item.institute}</p>
                          <p className="text-[11px] text-gray-700 leading-snug mt-0.5">{item.name}</p>
                          {item.closed && (
                            <span className="inline-block mt-1 bg-gray-800 text-white text-[9px] px-2 py-0.5 rounded-full">
                              Enrolment closed
                            </span>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="p-4 border-t border-gray-100 flex gap-3">
              <button 
                onClick={() => window.location.href = '/login'}
                className="flex-1 py-3 border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:border-gray-300 transition-colors"
              >
                Log in
              </button>
              <button
                onClick={() => window.location.href = '/get-started'}
                className="flex-1 py-3 text-white rounded-full text-sm font-bold transition-all"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  boxShadow: '0 4px 14px -4px rgba(249,115,22,0.5)',
                }}
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

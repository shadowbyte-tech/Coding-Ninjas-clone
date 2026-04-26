import { useState, useMemo } from 'react';
import { ChevronsUp } from 'lucide-react';

const filters = [
  { id: 'non-tech', label: 'Career changers' },
  { id: 'service', label: 'Industry switchers' },
  { id: 'tier23', label: 'College students' },
  { id: 'bootcamp', label: 'Job bootcamp' },
  { id: 'upskill', label: 'Skill upgraders' },
];

/** Renders testimonial body: alternating plain white and orange spans. */
function HighlightedQuote({ parts }) {
  return (
    <p className="text-center text-sm leading-loose text-white tracking-wide">
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i} className="text-orange-500 font-medium mr-1">
            {part.text}
          </span>
        ) : (
          <span key={i} className="mr-0.5">{part.text}</span>
        )
      )}
    </p>
  );
}

const allTestimonials = [
  {
    id: 1,
    category: 'non-tech',
    name: 'Dr. Meera Krishnan',
    role: 'Associate Engineer at Optum',
    avatarSeed: 'tm1',
    company: 'Optum',
    logoUrl: null,
    parts: [
      { text: 'From optometrist to IT pro, thanks to ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: '. Their structured lessons and mentors helped me excel in Java and system design faster than I imagined.',
        highlight: false,
      },
    ],
  },
  {
    id: 2,
    category: 'non-tech',
    name: 'Rohan Batra',
    role: 'Data Analyst at Razorpay',
    avatarSeed: 'tm2',
    company: 'Razorpay',
    logoUrl: null,
    parts: [
      { text: 'I had zero coding background. ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: ' made SQL and Python click for me — the 1:1 doubt support is genuinely the fastest I’ve seen.',
        highlight: false,
      },
    ],
  },
  {
    id: 3,
    category: 'service',
    name: 'Kavita Deshmukh',
    role: 'SDE at Flipkart',
    avatarSeed: 'tm3',
    company: 'Flipkart',
    logoUrl: null,
    parts: [
      { text: 'Moved from IT support to product engineering. The ', highlight: false },
      { text: 'Job Bootcamp', highlight: true },
      { text: ' projects and ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      { text: ' placement team kept me accountable every week.', highlight: false },
    ],
  },
  {
    id: 4,
    category: 'service',
    name: 'Imran Shaikh',
    role: 'Backend Developer at Swiggy',
    avatarSeed: 'tm4',
    company: 'Swiggy',
    logoUrl: null,
    parts: [
      { text: 'Service desk to backend — ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: ' taught me how to think like an engineer, not just finish modules. That shift landed me Swiggy.',
        highlight: false,
      },
    ],
  },
  {
    id: 5,
    category: 'tier23',
    name: 'Ananya Ghosh',
    role: 'ML Engineer at Microsoft',
    avatarSeed: 'tm5',
    company: 'Microsoft',
    logoUrl: null,
    parts: [
      { text: 'Tier-2 college didn’t limit me — ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: ' IIT-partner courses and mock interviews gave my resume the credibility recruiters wanted.',
        highlight: false,
      },
    ],
  },
  {
    id: 6,
    category: 'tier23',
    name: 'Vivek Patil',
    role: 'Data Scientist at Zomato',
    avatarSeed: 'tm6',
    company: 'Zomato',
    logoUrl: null,
    parts: [
      { text: 'Our campus had limited exposure; ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: ' became my bridge to real industry projects and interview prep.',
        highlight: false,
      },
    ],
  },
  {
    id: 7,
    category: 'bootcamp',
    name: 'Siddharth Rao',
    role: 'SDE-2 at Google',
    avatarSeed: 'tm7',
    company: 'Google',
    logoUrl: null,
    parts: [
      { text: 'The ', highlight: false },
      { text: 'Job Bootcamp', highlight: true },
      { text: ' resume reviews and AI mock rounds from ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      { text: ' were sharper than anything I found online.', highlight: false },
    ],
  },
  {
    id: 8,
    category: 'bootcamp',
    name: 'Neha Kapoor',
    role: 'Full Stack at PhonePe',
    avatarSeed: 'tm8',
    company: 'PhonePe',
    logoUrl: null,
    parts: [
      { text: 'I cracked PhonePe after ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: ' — DSA sheets, weekly contests, and mentor feedback felt tailor-made.',
        highlight: false,
      },
    ],
  },
  {
    id: 9,
    category: 'upskill',
    name: 'Arjun Menon',
    role: 'Senior Analyst at Amazon',
    avatarSeed: 'tm9',
    company: 'Amazon',
    logoUrl: null,
    parts: [
      { text: 'Upskilled while working full-time. ', highlight: false },
      { text: 'Coding Ninjas', highlight: true },
      {
        text: ' weekend batches and recorded classes fit my schedule without compromising depth.',
        highlight: false,
      },
    ],
  },
];

const PER_PAGE = 3;

function CompanyLogoSmall({ name, url }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex h-8 w-[72px] items-center justify-center rounded-md bg-white/5 px-2">
      {!failed ? (
        <img
          src={url}
          alt=""
          className="max-h-5 max-w-[64px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[10px] font-bold text-gray-400">{name}</span>
      )}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="flex flex-col w-full h-full overflow-hidden rounded-2xl bg-[#1a1a1a] ring-1 ring-white/[0.06]">
      <div className="relative px-5 pt-8 pb-4">
        <span
          className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 font-serif text-[5.5rem] leading-none text-white/[0.06] select-none"
          aria-hidden
        >
          &ldquo;
        </span>
        <div className="relative z-10 mx-auto flex justify-center">
          <img
            src={`https://picsum.photos/seed/${item.avatarSeed}/120/120`}
            alt=""
            className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
            loading="lazy"
          />
        </div>
        <h3 className="relative z-10 mt-4 text-center text-base font-bold text-white">{item.name}</h3>
        <p className="relative z-10 mt-1 text-center text-xs text-gray-500">{item.role}</p>
        <div className="relative z-10 mt-4 px-0.5">
          <HighlightedQuote parts={item.parts} />
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] bg-[#232323] px-4 py-3">
        <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px]">
          <span className="shrink-0 text-gray-500">Post</span>
          <span className="font-semibold text-white">Coding Ninjas</span>
          <span className="text-gray-500">&gt;&gt;</span>
        </div>
        <CompanyLogoSmall name={item.company} url={item.logoUrl} />
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('non-tech');
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () => allTestimonials.filter((t) => t.category === activeFilter),
    [activeFilter]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages - 1);
  const slice = filtered.slice(safePage * PER_PAGE, safePage * PER_PAGE + PER_PAGE);

  const setFilter = (id) => {
    setActiveFilter(id);
    setPage(0);
  };

  return (
    <section className="border-t border-white/[0.05] bg-[#0d0d0d] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1: quote box + heading | link */}
        <div className="mb-12 flex flex-col items-center justify-center gap-6 text-center lg:mb-16 lg:gap-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white shadow-lg"
              aria-hidden
            >
              <span className="font-serif text-3xl font-bold leading-none text-orange-500 pt-2">&ldquo;</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Real people, real career transformations
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-orange-500 hover:text-orange-400 lg:text-base underline underline-offset-4"
            onClick={(e) => e.preventDefault()}
          >
            See all success stories ↗
          </a>
        </div>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => {
            const on = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  on
                    ? 'bg-white text-gray-900 ring-2 ring-gray-300'
                    : 'bg-[#1a1a1a] text-gray-300 ring-2 ring-white/30 hover:bg-[#222] hover:ring-white/40'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
          {slice.map((item) => (
            <div key={item.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-2.5 w-2.5 rounded-full border border-white transition-colors ${
                i === safePage ? 'bg-white' : 'bg-transparent hover:bg-white/20'
              }`}
              aria-label={`Go to page ${i + 1}`}
              aria-current={i === safePage ? 'true' : undefined}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#explore-section-v2"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-orange-600 sm:text-base"
          >
            Explore offerings
            <ChevronsUp className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

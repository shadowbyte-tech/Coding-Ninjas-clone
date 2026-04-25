# 🥷 Coding Ninjas — Homepage Clone

A **pixel-perfect, production-quality recreation** of the [Coding Ninjas](https://www.codingninjas.com/) homepage, built with **React 18 + Vite + Tailwind CSS v4**. This project demonstrates advanced frontend engineering — component architecture, interactive animations, state management, and premium UI design.

---

## 🚀 Live Demo

> **[➜ View Live on Vercel](https://your-deployment-url.vercel.app)**  
> *(Replace with your Vercel/Netlify URL after deployment)*

---

## 🖼️ Screenshots

| Section | Preview |
|---|---|
| Hero + Navbar | Phone-frame lead capture form + mega dropdown nav |
| Courses | Domain-filtered card grid with IIT/IBM certification badges |
| Stats | Horizontal 3-column animated stats with grid background |
| Comparison Table | Feature comparison with green check / gray X icons |
| Testimonials | Filterable cards with highlighted quotes and pagination |
| Media Section | Dual-row infinite marquee + mouse-tracking news cards |

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.x | Component architecture & state management |
| **Vite** | 8.x | Lightning-fast dev server & bundler |
| **Tailwind CSS** | v4 | Utility-first styling with design tokens |
| **Lucide React** | Latest | Icon library (Chevron, Menu, Sparkles...) |

---

## ✨ Key Features

### 🧭 Navigation
- **Full mega-dropdown** with two-level navigation (domain → course list)
- Domain hover activates course panel — debounced 130ms close timer prevents flicker
- **Mobile menu** with tab switcher (Professionals / Students) + domain sidebar
- Sticky top-bar with `"Become AI ready"` announcement link

### 🦸 Hero Section
- Dark split layout: headline + stats left, phone-frame form right
- **Lead capture form** with full state: experience radio buttons, topic dropdown, name/phone/email inputs, success confirmation screen
- Orange ambient glow on phone frame, `clamp()` fluid typography

### 📚 Courses Section
- Left sidebar: domain filter + certification-by legend
- Card grid auto-filters on domain selection with hover scale + shadow lift
- Closed enrollment badge on relevant courses

### 📊 Stats Section
- **3-column horizontal grid** with vertical dividers — matching reference layout
- `IntersectionObserver` triggers section entry animation
- Dark grid SVG background with "Explore offerings" CTA

### 🏆 Why Us / Comparison
- Feature matrix: Coding Ninjas vs Free resources vs Other courses
- Row hover highlight, GreenCheck / GrayX / LightCheck visual differentiation

### 💬 Testimonials
- `useMemo`-memoized filter across 5 categories × 9 testimonials
- `HighlightedQuote` component renders alternating orange/white text spans
- Pagination with dot indicators — auto-resets on filter change

### 🛤️ Interactive Career Path
- 4-stage node map: Core Fundamentals → Frontend → Backend → GenAI
- Hover-activated right panel with skills, roles, and salary range
- `opacity + translateY` transition with `ease-spring` timing

### 📰 Media Section
- **Dual-row infinite marquee** (28 companies, opposite directions)
- **Mouse-tracking spotlight** on news cards via CSS custom properties (`--mouse-x`, `--mouse-y`)
- Stat pills with colored glow box-shadows

### 🦶 Footer
- 4-column link grid with animated hover effect (orange sliding left-border on links)
- Social icons with platform-specific brand colors on hover + lift + glow
- CTA strip at top, noise grain texture + radial glow atmosphere

---

## 🧠 Challenges & Solutions

### Challenge 1: Mega-dropdown UX
**Problem:** Hovering between the trigger button and the dropdown panel would close the menu mid-flight.  
**Solution:** Implemented a `130ms` debounced close timer (`closeTimerRef`) that gets cleared when either the trigger or panel is entered. Feels exactly like the reference site.

### Challenge 2: Phone Frame Form
**Problem:** The phone mockup had hardware elements (notch, side buttons) that cluttered the UI.  
**Solution:** Removed all hardware chrome — kept only the rounded border and orange ambient glow shadow, creating a cleaner card aesthetic.

### Challenge 3: Responsive Stats Layout
**Problem:** Stats needed to be horizontal 3-column at desktop but gracefully collapse to single-column on mobile.  
**Solution:** Used CSS Grid with `repeat(3, 1fr)` and a `@media (max-width: 768px)` override to `1fr`, with vertical dividers swapped for spacing on mobile.

### Challenge 4: Infinite Marquee Performance
**Problem:** Marquee with many items causes layout jank if not implemented carefully.  
**Solution:** Tripled the items array (`[...items, ...items, ...items]`) and animated only `translateX(-33.333%)` — avoiding layout thrashing by using only `transform`.

### Challenge 5: Mouse-tracking Spotlight Effect
**Problem:** Per-card spotlight that follows the cursor feels premium but can be complex.  
**Solution:** Used `onMouseMove` to set CSS custom properties `--mouse-x` and `--mouse-y` on the card ref, which drives a `radial-gradient` via inline style — zero JS per frame after setup.

---

## 🏗️ Project Structure

```
src/
├── App.jsx                 # Root app, routing, section order
├── index.css               # Global styles + Tailwind tokens
├── config/
│   └── texts.js            # Centralized copy/text content
└── components/
    ├── Navbar.jsx           # Mega-dropdown + mobile menu (466 lines)
    ├── Hero.jsx             # Phone-frame form + stats (283 lines)
    ├── CoursesSection.jsx   # Filtered course card grid
    ├── StatsSection.jsx     # Animated 3-column stats
    ├── WhyUs.jsx            # Guidance cards + bootcamp section
    ├── PlacementSection.jsx # Alumni companies + hover tooltips
    ├── ComparisonTable.jsx  # Feature comparison matrix
    ├── Testimonials.jsx     # Filterable testimonials + pagination
    ├── TrustedByLearners.jsx# Rating badges + trust signals
    ├── LearningModel.jsx    # 3-stage Learn/Excel/Standout tabs
    ├── InteractivePath.jsx  # Career path node map
    ├── CommunitySection.jsx # 10X Club, CXO talks, Hackathons
    ├── MediaSection.jsx     # Marquee + mouse-track news cards
    ├── Footer.jsx           # Multi-column footer + social icons
    └── StickyCtaBar.jsx     # Mobile sticky CTA bar
```

---

## 🏃 Setup & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/ninjas-web.git
cd ninjas-web

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 4. Build for production
npm run build
# → Output in /dist
```

**Requirements:** Node.js 18+ | npm 9+

---

## ⚡ Performance Optimizations

- **`IntersectionObserver`** — Stats section only triggers its animation when visible in viewport (no wasted CPU on off-screen elements)
- **`useMemo`** — Testimonials filtering memoized to avoid recomputing on every render
- **CSS `transform`-only animations** — Marquee, hover lifts, and card transitions never trigger layout/paint — only composite
- **Debounced dropdown** — 130ms close timer prevents unnecessary state updates during hover transitions
- **`loading="lazy"`** — Testimonial avatars use lazy loading to defer off-screen image fetches
- **Manual routing** — No React Router dependency keeps bundle size lean

---

## 🔮 What I'd Improve With More Time

1. **Real course thumbnail images** — Replace `picsum.photos` placeholders with actual course artwork
2. **React Router** — Add proper client-side routing for `/login`, `/get-started`, course detail pages
3. **Form validation** — Add phone number format validation, email regex check, required field errors
4. **Accessibility** — Add `aria-expanded` on dropdown triggers, focus trapping in mobile menu
5. **Animation on stat numbers** — Wire up the `useCounter` hook to animate numbers counting up on scroll
6. **Dark/light mode toggle** — The design system already has CSS variables set up for it

---

## 📄 License

MIT — Built for educational/portfolio purposes. Coding Ninjas is a trademark of Sunrise Mentors Pvt. Ltd.



# Coding Ninjas Clone – Internship Project

A production-ready React implementation of the Coding Ninjas website, built as part of an internship program. This project combines pixel-perfect design replication with performance optimization and real-world best practices.

## Project Overview

During my internship at [Company Name], I was tasked with cloning the Coding Ninjas website using React, Vite, and Tailwind CSS. Beyond replicating the design, I implemented advanced features, optimized performance, and contributed additional enhancements that demonstrate full-stack understanding.

## Live Demo & Repository

🚀 Live: 
📂 GitHub: 

## Tech Stack

Frontend Framework	React 18 + Hooks
Build Tool	Vite (1.01s build)
Styling	Tailwind CSS v4
Deployment	Vercel (auto-deploy)
## Key Achievements

✓ Pixel-perfect replication of 16 sections
✓ Advanced mega-dropdown navigation with debounced interactions
✓ Smooth scroll animations using IntersectionObserver
✓ Performance optimized: 94 kB gzip, 1.01s build
✓ Fully responsive (375px–1920px)
✓ Production-ready: zero console errors

## Internship Experience

This project deepened my understanding of component architecture, state management at scale, and CSS animation orchestration. Key learnings include debounce patterns for event handlers, memoization for performance, and maintaining design consistency across 16+ sections.# Coding-Ninjas-clone

# Internship Project Submission

Coding Ninjas Clone | React + Vite + Tailwind CSS v4

## About This Project

During my internship, I was assigned to clone the Coding Ninjas website. Starting from a static reference, I built a full React application with advanced interactions, performance optimizations, and production-quality code. This document outlines my learning outcomes and technical decisions.

## What I Learned

1. Component Architecture at Scale

Breaking down a 16-section website into reusable, maintainable components taught me about separation of concerns. I learned to distinguish between container components (that manage state) and presentational components (that render UI).

2. Performance Optimization Matters

Using useMemo for filtered testimonials, debounced dropdown toggles, and IntersectionObserver for lazy animations taught me that performance isn't an afterthought—it's core to user experience. Final bundle: 94 kB gzip.

3. CSS at Scale Requires Strategy

Managing animations, colors, and responsive layouts across 16 sections without chaos required CSS custom properties, consistent naming patterns, and Tailwind utilities. I learned when to use Tailwind and when to write custom CSS.

4. Design-to-Code Fidelity

Achieving pixel-perfect accuracy taught me attention to detail—spacing, colors, font weights, and hover states all matter. I learned to use browser DevTools to verify alignment and compare against reference designs.

## Technical Decisions

Decision: Manual routing over React Router

Why: Smaller bundle, simpler for single-page navigation. Trade-off: lost browser history management (acceptable for this project scope).

Decision: IntersectionObserver for scroll animations

Why: Native API, no animation library dependency. Counters animate in when scrolled into view, improving perceived performance.

Decision: useMemo for testimonial filtering

Why: Prevents unnecessary re-renders when filtering testimonials by category. Measurable performance gain on slower devices.

## If I Had More Time

• Add unit tests (Jest) for critical components
• Implement dark mode toggle with persistent user preference
• Add analytics to track user interactions
• Optimize course card images with lazy loading
• Add form validation error messages

## Conclusion

This internship project solidified my understanding of modern frontend development. I'm confident in my ability to build scalable, performant React applications and ready to contribute meaningfully to your team.
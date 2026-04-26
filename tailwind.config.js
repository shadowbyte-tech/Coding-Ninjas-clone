/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cn-orange': '#E35A2B',
        'cn-blue': '#3B82F6',
        'cn-dark': '#0d0d0d',
        'cn-darker': '#111',
        'cn-section-dark': '#1a1a2e',
        primary: "#f97316",
        accent: "#10b981",
        electric: "#3b82f6",
        base: "#0a0a0a",
        surface: "#111111",
        surfaceHover: "#18181b"
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 0 30px rgba(249,115,22,0.15)",
        'glow-accent': "inset 0 0 0 1px rgba(255,255,255,0.05), 0 0 30px rgba(16,185,129,0.15)"
      },
      backdropBlur: {
        xl: "24px"
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    },
  },
  plugins: [],
}

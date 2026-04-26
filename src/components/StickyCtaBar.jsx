import { useState, useEffect } from 'react';

const SHOW_AFTER_PX = 300;

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] border-t border-white/5 bg-surface/80 backdrop-blur-xl shadow-[0_-20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 ease-spring ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          
          {/* Action 1 */}
          <div className="flex w-full md:w-auto items-center justify-between md:justify-center gap-4">
            <div className="flex flex-col text-left md:text-right hidden sm:flex">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">Professionals</span>
              <span className="text-[13px] font-bold text-white/90">Job Bootcamp</span>
            </div>
            <a
              href="#explore"
              className="w-full md:w-auto text-center rounded-xl bg-white/10 border border-white/10 active:scale-95 px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/20 ease-spring"
            >
              Explore Bootcamp
            </a>
          </div>

          <div className="hidden md:block h-10 w-px bg-white/10" />

          {/* Action 2: High Conversion Target (CTA Engineering) */}
          <div className="flex w-full md:w-auto items-center justify-between md:justify-center gap-4">
            <div className="flex flex-col text-left hidden sm:flex">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary/70">Secure your future</span>
              <span className="text-[13px] font-bold text-white/90">Join 15K+ IIT Certified</span>
            </div>
            <a
              href="#explore"
              className="w-full md:w-auto text-center rounded-xl bg-primary text-white border border-primary active:scale-95 px-6 py-3.5 text-[14px] font-bold transition-all hover:shadow-glow ease-spring"
            >
              Apply Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

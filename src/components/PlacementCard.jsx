import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { CompanyLogo } from './CompanyLogo';
import { Briefcase, MapPin, TrendingUp, ChevronRight, CheckCircle2, PlayCircle } from 'lucide-react';

export const PlacementCard = React.memo(({ placement, isTrending }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <>
      <motion.div
        className="relative perspective-1000 w-full sm:w-[340px] shrink-0"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsExpanded(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        layout
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 cursor-pointer shadow-xl transition-colors duration-300 hover:border-orange-500/50 hover:bg-[#1a1a1a]"
        >
          {/* Subtle Glow Effect */}
          <motion.div 
            className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-orange-500/30 to-purple-600/30 blur-xl opacity-0 transition-opacity duration-300"
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            style={{ transform: 'translateZ(-1px)' }}
          />

          {/* Badges */}
          <div className="absolute -top-3 -right-3 flex gap-2" style={{ transform: 'translateZ(20px)' }}>
            {isTrending && (
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 flex items-center gap-1">
                Trending 🔥
              </span>
            )}
            {placement.isCareerSwitch && (
              <span className="bg-[#1a1a1a] text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-cyan-500/30">
                Career Switch
              </span>
            )}
          </div>

          <div style={{ transform: 'translateZ(30px)' }}>
            <div className="flex items-start justify-between mb-6">
              <CompanyLogo name={placement.company} src={placement.companyLogo} size="md" />
              <div className="text-right">
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                  {placement.salary}
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Base Salary</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
              {placement.name}
            </h3>
            
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-medium">
              <Briefcase className="w-4 h-4 text-cyan-500" />
              <span>{placement.role}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600 mx-1" />
              <span className="text-white">{placement.company}</span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Before</span>
                <span className="text-xs text-gray-300 font-medium truncate">{placement.previousRole}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Hike</span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {placement.hike}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Expandable Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setIsExpanded(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#111] p-1 rounded-[2rem] max-w-2xl w-full border border-white/10 shadow-2xl relative overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Background Gradient */}
                <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-orange-600/20 to-transparent pointer-events-none" />
                
                <div className="bg-[#161616] rounded-[1.75rem] p-6 sm:p-10 relative z-10">
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
                  >
                    ×
                  </button>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                    <CompanyLogo name={placement.company} src={placement.companyLogo} size="lg" />
                    <div>
                      <h2 className="text-3xl font-black text-white mb-2">{placement.name}</h2>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 font-medium">
                        <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full border border-orange-500/20">
                          {placement.role}
                        </span>
                        <span>at</span>
                        <span className="text-white font-bold">{placement.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Journey Timeline */}
                  <div className="mb-10">
                    <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                      <TrendingUp className="text-orange-500" /> Career Journey
                    </h4>
                    
                    <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-gradient-to-b before:from-gray-700 before:to-transparent">
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#111] border-2 border-gray-600 flex items-center justify-center z-10" />
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Before</p>
                        <p className="text-sm text-gray-300">{placement.previousRole}</p>
                      </div>
                      
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#111] shadow-[0_0_10px_rgba(249,115,22,0.5)] z-10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        <p className="text-xs text-orange-500 uppercase font-bold tracking-widest mb-1">After Coding Ninjas</p>
                        <p className="text-lg text-white font-semibold">
                          {placement.role} <span className="text-gray-500 font-normal">at</span> {placement.company}
                        </p>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 mt-2">
                          {placement.salary} Package
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                    <button className="flex-1 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors group">
                      <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      View Video Interview
                    </button>
                    <button className="flex-1 bg-white/5 text-white font-bold py-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

PlacementCard.displayName = 'PlacementCard';

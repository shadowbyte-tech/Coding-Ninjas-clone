import { useState } from 'react';
import { Search, PenTool, Database, Rocket, ChevronRight } from 'lucide-react';

const pathNodes = [
  {
    id: 'fundamentals',
    title: 'Core Fundamentals',
    icon: <Search className="w-5 h-5" />,
    skills: ['Data Structures', 'Algorithms', 'Logic Building'],
    salary: '₹6L - ₹10L PA',
    roles: ['Junior Developer', 'Trainee Engineer'],
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/30 text-blue-400'
  },
  {
    id: 'frontend',
    title: 'Frontend Mastery',
    icon: <PenTool className="w-5 h-5" />,
    skills: ['React Native', 'Next.js', 'Tailwind CSS', 'Redux'],
    salary: '₹12L - ₹18L PA',
    roles: ['Frontend Engineer', 'UI/UX Developer'],
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/30 text-orange-400'
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    icon: <Database className="w-5 h-5" />,
    skills: ['Node.js', 'PostgreSQL', 'Microservices', 'AWS'],
    salary: '₹18L - ₹28L PA',
    roles: ['Backend Engineer', 'Systems Architect'],
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/30 text-emerald-400'
  },
  {
    id: 'ai',
    title: 'GenAI & Multi-Agent Integration',
    icon: <Rocket className="w-5 h-5" />,
    skills: ['LLMs', 'LangChain', 'RAG', 'Vector Databases'],
    salary: '₹30L+ PA',
    roles: ['AI Engineer', 'Principal Architect'],
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/30 text-purple-400'
  }
];

export default function InteractivePath() {
  const [hoveredNode, setHoveredNode] = useState(pathNodes[3].id);

  return (
    <section className="bg-base border-t border-white/5 py-24 relative overflow-hidden" id="interactive-path">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Your path to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">top 1%</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore each stage to see what you'll learn, the jobs you can get, and how much you can earn at every level.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT: Pathway Nodes */}
          <div className="flex-1 w-full space-y-4">
            {pathNodes.map((node, i) => (
              <div 
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                className={`group cursor-pointer relative rounded-2xl border p-5 transition-all duration-500 ease-spring ${
                  hoveredNode === node.id 
                    ? `bg-surface border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] scale-100`
                    : `bg-surface/40 border-white/5 scale-[0.98] opacity-60 hover:opacity-100`
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border bg-gradient-to-b ${node.color} ${node.border}`}>
                      {node.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{node.title}</h3>
                      <p className="text-sm text-white/50 block md:hidden mt-1">{node.roles[0]}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-white/20 transition-transform duration-300 ${hoveredNode === node.id ? 'translate-x-1 text-primary' : ''}`} />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Dynamic Data Panel */}
          <div className="flex-1 w-full relative" style={{ minHeight: '380px' }}>
            {pathNodes.map((node) => (
              <div 
                key={node.id}
                className={`absolute inset-0 bg-surface border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-700 ease-spring flex flex-col ${
                  hoveredNode === node.id ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${node.color} blur-[80px] opacity-30 rounded-full pointer-events-none`} />
                
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  {node.icon} What you'll master in {node.title}
                </h4>

                <div className="space-y-10 flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 block">Skills you'll learn</span>
                    <div className="flex flex-wrap gap-3">
                      {node.skills.map((skill, idx) => (
                        <span key={idx} className={`text-sm px-4 py-2 rounded-lg border bg-gradient-to-r ${node.color} ${node.border}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6 block">Where you can work</span>
                    <ul className="space-y-4">
                      {node.roles.map((role, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/80">
                          <div className={`w-2 h-2 rounded-full bg-current ${node.border.split(' ')[1]}`} />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`mt-8 p-4 rounded-xl border bg-gradient-to-r ${node.color} ${node.border} flex items-center justify-between`}>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">Typical salary range</span>
                    <span className="text-2xl font-black">{node.salary}</span>
                  </div>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-colors">
                    See details
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

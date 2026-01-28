import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  Shield, 
  ChevronRight, 
  Target, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Database,
  TrendingUp,
  Activity,
  Zap,
  Plus,
  ChevronDown
} from 'lucide-react';
import { SectionHeader } from './components/SectionHeader';
import { MetricCard } from './components/MetricCard';
import { clinicStrategy, insurerStrategy, hacks, timeline } from './data';
import { SegmentStrategy, Hack } from './types';

// --- Reveal Animation Component ---
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- CountUp Animation Component ---
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* BACKGROUND WATERMARK */}
      <div className="fixed top-0 left-0 w-full pointer-events-none z-0 overflow-hidden h-[100vh]">
        <div className="absolute -top-[5%] -left-[5%] text-watermark font-bold text-slate-100/80 whitespace-nowrap select-none animate-float">
          YOU(
        </div>
        <div className="absolute top-[30%] right-[0%] text-watermark font-bold text-slate-50/50 whitespace-nowrap select-none opacity-50 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          )
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
             <span className="text-3xl font-bold tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors">YOU<span className="text-slate-300 group-hover:text-indigo-300">(</span>th<span className="text-slate-300 group-hover:text-indigo-300">)</span></span>
             <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-full tracking-wide">by Raghav</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-40">
        
        {/* HERO SECTION */}
        <section className="relative">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex flex-wrap gap-3 mb-8">
                <Tag text="< 2 MIN READ" />
                <Tag text="ICP ANALYSIS" />
                <Tag text="10X GROWTH" />
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1] text-slate-900">
                Unlocking prevention for <br className="hidden md:block" />
                8 billion people. <br />
                <span className="text-slate-400 font-medium">Starting with You(th).</span>
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12 font-light">
                The frictionless measurement + engagement layer. 
                Not "diagnosis". Not "replacing doctors". 
                <span className="block mt-2 text-slate-900 font-medium">Pure GTM velocity.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECTION: STRATEGY CARDS */}
        <section>
          <Reveal>
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Two Paths to Market</h2>
              <p className="text-xl text-slate-500 max-w-2xl">Structured for high distribution & retention. Focusing on where the structural incentives align with prevention.</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <Reveal delay={100}>
              <StrategyCard strategy={clinicStrategy} type="clinic" icon={Building2} />
            </Reveal>
            <Reveal delay={200}>
              <StrategyCard strategy={insurerStrategy} type="insurer" icon={Shield} />
            </Reveal>
          </div>
        </section>

        {/* SECTION: THE MACHINE */}
        <section>
          <Reveal>
            <SectionHeader number="03" title="The GTM Machine" subtitle="A systematic distribution engine." />
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100} className="h-full">
              <MachineCard 
                icon={Database} 
                title="Account Engine" 
                color="indigo"
                content={
                  <ul className="space-y-4 mt-6 text-sm text-slate-600">
                    <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="font-medium">Target Clinics</span>
                      <span className="text-lg font-bold text-slate-900">
                        <CountUp end={300} />
                      </span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="font-medium">Payer Orgs</span>
                      <span className="text-lg font-bold text-slate-900">
                        <CountUp end={60} />
                      </span>
                    </li>
                  </ul>
                }
              />
            </Reveal>
            
            <Reveal delay={200} className="h-full">
              <MachineCard 
                icon={Target} 
                title="Scoring & Gating" 
                color="emerald"
                content={
                  <div className="mt-6 space-y-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Fit Score Criteria</div>
                    <Badge label="Recurring Revenue" points="+20" />
                    <Badge label="1k+ Members" points="+15" />
                    <Badge label="Sells Diagnostics" points="+15" />
                  </div>
                }
              />
            </Reveal>

            <Reveal delay={300} className="h-full">
              <MachineCard 
                icon={Mail} 
                title="Outreach Playbooks" 
                color="blue"
                content={
                  <div className="mt-6 space-y-3">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-indigo-50 hover:border-indigo-100 transition-colors group cursor-default">
                      <div className="text-[10px] font-bold text-emerald-600 mb-1 tracking-wider">CLINICS</div>
                      <div className="text-sm font-medium text-slate-700 group-hover:text-indigo-900">"Digital Extension"</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group cursor-default">
                      <div className="text-[10px] font-bold text-blue-600 mb-1 tracking-wider">INSURERS</div>
                      <div className="text-sm font-medium text-slate-700 group-hover:text-blue-900">"Pilotable Benefit"</div>
                    </div>
                  </div>
                }
              />
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-16 bg-slate-50 rounded-[2.5rem] p-10 md:p-14 hover:shadow-lg transition-shadow duration-500 border border-slate-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-white rounded-xl shadow-sm text-indigo-600">
                   <Activity size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Projected Weekly Volume</h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 rounded-3xl bg-white text-slate-900 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100">
                  <div className="text-4xl font-bold mb-2 tracking-tighter"><CountUp end={250} /></div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">New Contacts</div>
                </div>
                <div className="p-8 rounded-3xl bg-white text-slate-900 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100">
                  <div className="text-4xl font-bold mb-2 tracking-tighter"><CountUp end={15} /></div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Positive Replies</div>
                </div>
                <div className="p-8 rounded-3xl bg-white text-slate-900 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100">
                  <div className="text-4xl font-bold mb-2 tracking-tighter"><CountUp end={10} /></div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Qualified Mtgs</div>
                </div>
                <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-200">
                  <div className="text-4xl font-bold mb-2 tracking-tighter">2-4</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Pilots / Mo</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION: HACKS (Biomarker List Style) */}
        <section>
          <Reveal>
            <SectionHeader number="04" title="High-Signal Hacks" subtitle="Niche strategies to accelerate trust & distribution." />
          </Reveal>
          
          <div className="bg-slate-50 rounded-[2.5rem] p-4 md:p-8 border border-slate-100">
            {hacks.map((hack, index) => (
              <Reveal key={hack.id} delay={index * 100}>
                <BiomarkerRow hack={hack} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* SECTION: METRICS SYSTEM */}
        <section className="grid lg:grid-cols-2 gap-8">
          <Reveal className="h-full">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_rgb(0,0,0,0.03)] border border-slate-100 relative overflow-hidden h-full flex flex-col justify-between hover:border-slate-200 transition-colors">
               <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
               
               <div>
                 <SectionHeader number="05" title="The Metric System" />
                 
                 <div className="mb-16 relative z-10">
                    <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold tracking-widest mb-4 uppercase">North Star Metric</div>
                    <div className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1]">
                      Weekly Active Screenings
                      <span className="block text-2xl text-slate-400 font-normal mt-3">per Activated User</span>
                    </div>
                 </div>
               </div>

               <div className="space-y-10 relative z-10">
                 <FunnelRow 
                   icon={Building2} 
                   title="Clinic Funnel" 
                   steps={["Invited", "Activated", "W1 Retained", "Bookings"]} 
                   color="emerald"
                 />
                 <FunnelRow 
                   icon={Shield} 
                   title="Insurer Funnel" 
                   steps={["Eligible", "Enrolled", "WA_Scan", "Action Rate"]} 
                   color="blue"
                 />
               </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <div className="bg-[#1C1C1E] rounded-[2.5rem] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden h-full group shadow-2xl shadow-slate-200">
               {/* Abstract circle decoration - refined opacity */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] border border-white/5 rounded-full opacity-100 animate-pulse group-hover:border-white/10 transition-colors" style={{ animationDuration: '8s' }}></div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[25rem] h-[25rem] border border-white/5 rounded-full opacity-100 animate-pulse group-hover:border-white/10 transition-colors" style={{ animationDuration: '6s' }}></div>
               
               <div>
                 <div className="flex items-center gap-4 mb-8">
                   <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Zap className="text-yellow-400 fill-yellow-400" size={20} />
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight">Experiment Cadence</h3>
                 </div>
                 
                 <div className="space-y-10 relative z-10">
                   <div className="pl-8 border-l border-white/20 relative">
                     <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#1C1C1E] rounded-full border-2 border-white/40"></div>
                     <div className="text-xl font-bold mb-2">Weeks 1–4</div>
                     <p className="text-white/60 font-light">4–8 micro-tests / week</p>
                     <p className="text-xs text-white/40 mt-2 uppercase tracking-wider font-medium">Persona x Angle x Offer</p>
                   </div>
                   <div className="pl-8 border-l border-indigo-500 relative">
                     <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
                     <div className="text-xl font-bold mb-2 text-white">Weeks 5–8</div>
                     <p className="text-indigo-200 font-light">Scale Winners</p>
                     <p className="text-xs text-indigo-200/50 mt-2 uppercase tracking-wider font-medium">Focus on highest WA_Scan cohorts</p>
                   </div>
                 </div>
               </div>

               <div className="mt-12 pt-10 border-t border-white/10 text-center relative z-10">
                  <p className="text-sm text-white/40 font-medium">Rapid iteration cycle enables <span className="text-white font-bold">product-market fit velocity</span>.</p>
               </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION: DELIVERABLES */}
        <section>
          <Reveal>
            <SectionHeader number="06" title="Roadmap" subtitle="Concrete deliverables for the first 90 days." />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] transition-all hover:-translate-y-2 h-full cursor-default group">
                  <div className="text-6xl font-black text-slate-100 mb-8 select-none tracking-tighter group-hover:text-slate-200 transition-colors">{item.period}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.items.map((sub, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                        <CheckCircle2 size={18} className="text-indigo-600 mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-100 py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-3xl font-bold tracking-tighter text-slate-900 mb-4">YOU(th)</div>
          <p className="text-slate-400 text-sm font-medium">by Raghav</p>
        </div>
      </footer>
    </div>
  );
};

// COMPONENTS

const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="bg-[#FEFCE8] text-[#854D0E] px-4 py-1.5 rounded-lg text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase hover:bg-yellow-100 transition-colors cursor-default">
    {text}
  </span>
);

const Badge: React.FC<{ label: string; points: string }> = ({ label, points }) => (
  <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all">
    <span className="text-slate-600 font-medium">{label}</span>
    <span className="font-bold text-indigo-600">{points}</span>
  </div>
);

// New Component: Biomarker Row Style for Hacks
const BiomarkerRow: React.FC<{ hack: Hack }> = ({ hack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = hack.icon;

  return (
    <div 
      className="group border-b border-slate-200 last:border-0 hover:bg-white transition-colors cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="py-6 px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isOpen ? hack.color.replace('text-', 'bg-').replace('100', '500').replace('text-', 'text-white ') : 'bg-slate-100 text-slate-500 group-hover:text-slate-900'}`}>
            <Icon size={22} className={isOpen ? 'text-white' : ''} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{hack.title}</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">{hack.subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
           <div className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-opacity duration-300 ${isOpen ? 'opacity-100 text-indigo-600' : 'opacity-0'}`}>
              <TrendingUp size={16} />
              {hack.impact}
           </div>
           
           {/* Highlighted Dropdown Button */}
           <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${isOpen ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md'}`}>
             <span className="hidden sm:inline">{isOpen ? 'Close' : 'View Strategy'}</span>
             <span className="sm:hidden">{isOpen ? 'Close' : 'View'}</span>
             <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
           </div>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 md:px-8 pb-8 pt-2 pl-[5.5rem] md:pl-[6.5rem]">
           <p className="text-slate-600 leading-relaxed max-w-2xl text-base">{hack.description}</p>
           {/* Mobile only impact tag */}
           <div className="md:hidden mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-600">
              <TrendingUp size={16} />
              {hack.impact}
           </div>
        </div>
      </div>
    </div>
  );
}

const MachineCard: React.FC<{ icon: any, title: string, color: string, content: React.ReactNode }> = ({ icon: Icon, title, color, content }) => {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgb(0,0,0,0.02)] h-full flex flex-col hover:border-indigo-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500">
      <div className="flex items-center gap-4 mb-2">
        <div className={`p-3 rounded-2xl bg-${color}-50 text-${color}-600`}>
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-lg text-slate-900 tracking-tight">{title}</h3>
      </div>
      <div className="flex-grow">
        {content}
      </div>
    </div>
  )
}

const FunnelRow: React.FC<{ icon: any, title: string, steps: string[], color: string }> = ({ icon: Icon, title, steps, color }) => (
  <div className="group">
    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-3">
      <div className={`p-2 rounded-xl bg-${color}-50 text-${color}-600 group-hover:bg-${color}-100 transition-colors`}>
        <Icon size={18}/> 
      </div>
      {title}
    </h4>
    <div className="flex flex-wrap items-center gap-3 text-sm">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <span className={`px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 cursor-default text-xs font-medium tracking-wide ${i === 2 ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}>
            {step}
          </span>
          {i < steps.length - 1 && (
            <ChevronRight size={16} className="text-slate-300 stroke-[3] group-hover:text-slate-400 transition-colors" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
)

const StrategyCard: React.FC<{ strategy: SegmentStrategy; type: 'clinic' | 'insurer'; icon: any }> = ({ strategy, type, icon: Icon }) => {
  const isClinic = type === 'clinic';
  
  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-[0_40px_80px_rgb(0,0,0,0.08)] transition-all duration-500 group cursor-default relative">
      <div className="p-10 md:p-12 border-b border-slate-50 bg-gradient-to-b from-slate-50/50 to-white relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${isClinic ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
            <Icon size={32} />
          </div>
          <span className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isClinic ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
            {isClinic ? 'High ROI' : 'Scale'}
          </span>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{strategy.title}</h3>
        <p className="text-slate-500 leading-relaxed text-lg">{strategy.description}</p>
      </div>

      <div className="p-10 md:p-12 flex flex-col gap-10 flex-grow bg-white relative z-10">
        <div className="space-y-5">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target Profile</h4>
          {strategy.icp.map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
              <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isClinic ? 'bg-emerald-500' : 'bg-blue-500'}`} />
              {item}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deliverables</h4>
           {strategy.deliverables.map((d, i) => (
             <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-900 bg-slate-50 px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">
               <CheckCircle2 size={16} className={isClinic ? 'text-emerald-500' : 'text-blue-500'}/> 
               {d}
             </div>
           ))}
        </div>
      </div>
      
      <div className="p-8 bg-slate-50 text-center border-t border-slate-100 group-hover:bg-slate-100 transition-colors relative z-10">
        <div className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-widest">Pricing Model</div>
        <div className={`text-base font-bold ${isClinic ? 'text-emerald-700' : 'text-blue-700'}`}>{strategy.pricing}</div>
      </div>
    </div>
  );
};

export default App;
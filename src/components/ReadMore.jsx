import React from "react";
import signalLines from "../assets/readMore/signal lines.svg";
import abstractShape from "../assets/readMore/Abstract Shape Render 1.png";
import uavBlueprint from "../assets/readMore/uav-blueprint-4k-alpha 3.svg";
import object2 from "../assets/readMore/object2.png";
import planeImage from "../assets/readMore/plane.png";
import humanImage from "../assets/readMore/human.png";
import rocksImage from "../assets/readMore/rocks.png";
import printer3d from "../assets/readMore/3d-printer.png";
import cncMilling from "../assets/readMore/cnc-milling.png";

// --- DATA ---

const problems = [
  {
    id: 'P-01',
    category: 'COST',
    title: <>The <span className="text-[#d4ff00]">Cost</span> of War Has Collapsed</>,
    desc: 'A $20,000 drone now forces defenders to fire $3-4 million interceptor missiles. MEGHA flips the arithmetic — built for thousands of dollars, expendable by design, it imposes financial ruin on the adversary\'s magazine, not on ours.'
  },
  {
    id: 'P-02',
    category: 'PRECISION',
    title: <><span className="text-[#d4ff00]">Precise</span> Strike, Not Blunt Force</>,
    desc: 'Onboard computer vision identifies and locks the exact target. MEGHA strikes with surgical precision in the terminal phase — reducing collateral damage and protecting civilian populations near the engagement.'
  },
  {
    id: 'P-03',
    category: 'HUMAN ERROR',
    title: <>Removing Human <span className="text-[#d4ff00]">Error</span></>,
    desc: 'Fatigue, stress, and split-second misjudgement cost lives. Edge-level AI executes the commander\'s intent with consistent, repeatable accuracy — fixing the human errors that turn missions into tragedies.'
  },
  {
    id: 'P-04',
    category: 'CIVILIAN SAFETY',
    title: <><span className="text-[#d4ff00]">Lower</span> Damage to Civilians</>,
    desc: 'Precision targeting and abort-aware autonomy keep destruction confined to the legitimate target. Less indiscriminate fire means fewer civilian casualties in contested, populated theatres.'
  },
  {
    id: 'P-05',
    category: 'SPEED',
    title: <><span className="text-[#d4ff00]">Act Fast — See</span> First, <span className="text-[#d4ff00]">Strike</span> First</>,
    desc: 'Decisions are made onboard in milliseconds, not delayed by network latency to a distant operator. MEGHA sees the battlefield first and acts decisively before the enemy can react.'
  },
  {
    id: 'P-06',
    category: 'SUPPLY',
    title: <><span className="text-[#d4ff00]">Rapid</span> Manufacturing</>,
    desc: 'Distributed 3D-print farms output thousands of units. Engineers tweak a CAD file and field a hardware upgrade to the frontline in hours, not years. You scale by adding printers, not factories.'
  }
];

const tableData = [
  {
    system: 'Attack drone (Shahed-class)',
    cost: '$20K - $50K',
    meaning: 'The cheap, expendable asset — designed to be lost',
    highlight: false
  },
  {
    system: 'MEGHA UAVs',
    cost: '$10K - $50K',
    meaning: 'Cheap to lose, fast to build, autonomous — built to be on the winning side of the math',
    highlight: true
  },
  {
    system: 'Patriot PAC-3 interceptor',
    cost: '≈ $4,000,000',
    meaning: '~200x the cost of the threat it stops',
    highlight: false
  },
  {
    system: 'THAAD interceptor',
    cost: '$12M - $15M',
    meaning: '~300-700x the cost of the threat',
    highlight: false
  },
  {
    system: 'Fighter jet + AA missile',
    cost: '$20M + $400K',
    meaning: 'A million-dollar engagement against a $20K target',
    highlight: false
  }
];

const capabilities = [
  {
    num: '01',
    title: 'MAN-PORTABLE LAUNCH',
    desc: 'Hand-launched in seconds. No runway, no launch rig, no exposed ground crew.'
  },
  {
    num: '02',
    title: 'PERSISTENT LOITER',
    desc: 'Long endurance holds watch over an area for hours, feeding a continuous live picture.'
  },
  {
    num: '03',
    title: 'DAY & NIGHT ISR',
    desc: 'Electro-optical and thermal sensors see through smoke and darkness — surveillance never stops.'
  },
  {
    num: '04',
    title: 'REAL-TIME AI DETECTION',
    desc: 'Onboard AI detects, classifies and tracks targets the instant they appear — not minutes later.'
  },
  {
    num: '05',
    title: 'SILENT & GPS-DENIED',
    desc: 'Navigates by vision when GPS is jammed, and observes without transmitting its position.'
  },
  {
    num: '06',
    title: 'FEEDS THE SWARM',
    desc: 'Streams geo-tagged intelligence into ARC OS, cueing the wider MEGHA force onto confirmed targets.'
  }
];

const features = [
  {
    category: 'STEALTH',
    highlightTitle: 'LOW',
    title: 'SIGNATURE',
    desc: 'Hand-launched in seconds. No runway, no launch rig, no exposed ground crew.'
  },
  {
    category: 'SPEED',
    highlightTitle: 'RAPID',
    title: 'DEPLOYMENT',
    desc: 'Long endurance holds watch over an area for hours, feeding a continuous live picture.'
  },
  {
    category: 'STRENGTH',
    highlightTitle: 'REINFORCED',
    title: 'COMPOSITE',
    desc: 'Electro-optical and thermal sensors see through smoke and darkness — surveillance never stops.'
  },
  {
    category: 'ITERATE',
    highlightTitle: 'HOURS',
    title: ', NOT YEARS',
    desc: 'Onboard AI detects, classifies and tracks targets the instant they appear — not minutes later.'
  }
];

export default function ReadMore() {
  return (
    <div className="min-h-screen bg-[#06070a] text-white flex flex-col relative overflow-hidden pt-24 md:pt-28">
      
      {/* ========================================================= */}
      {/* GLOBAL BACKGROUND (SIGNAL LINES)                          */}
      {/* ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full min-w-[1400px] max-w-[2000px] h-[900px] pointer-events-none z-0 opacity-60 flex justify-center">
        <img 
          src={signalLines}
          alt="Signal Lines Background" 
          className="w-full object-contain object-top"
        />
      </div>

      {/* ========================================================= */}
      {/* SECTION 1: HEADER & INTRO                                 */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center mt-32 md:mt-48">
        
        {/* Huge Title Container (Centered) */}
        <div className="w-full max-w-[1600px] mx-auto px-6 z-10 flex flex-col items-center">
          <h1 className={`font-orbitron text-[60px] md:text-[90px] lg:text-[130px] font-bold tracking-widest text-center flex items-center justify-center gap-4 md:gap-8 lg:gap-12 leading-none mb-24 md:mb-32`}>
            <span className="flex">
              <span className="bg-gradient-to-br from-gray-300 via-gray-500 to-gray-800 bg-clip-text text-transparent drop-shadow-lg">
                M
              </span>
              <span className="text-white">E</span>
              <span className="text-[#d4ff00]">G</span>
              <span className="text-white">HA</span>
            </span>
            <span className="text-white">UAS</span>
          </h1>
        </div>

        {/* Main Content Area with Left Vertical Line */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          
          {/* Container with the Vertical Line */}
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pb-12 pt-0">
            
            {/* Subtitle */}
            <p className="text-gray-400 text-left text-[16px] md:text-xl lg:text-2xl max-w-[1400px] leading-relaxed tracking-wide mb-12">
              A New Class Of <span className="text-[#d4ff00]">Low-Cost, 3D-Printed, Edge-Autonomous</span> Aerial Systems Built To Win The Wars Of Mass — Commanded In Their Thousands By A Single Operator Through <span className="text-white font-bold">ARC OS</span>, And Built To Keep Human Warfighters Out Of The Kill Zone.
            </p>

            {/* Horizontal Divider stretching from the left border */}
            <div className="w-full h-[1px] bg-white/50 mb-16 relative left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] w-[calc(100%+1.5rem)] md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]"></div>
            
            {/* Text Content */}
            <div className="flex flex-col items-start text-left w-full relative">
              {/* Background Glows for "The Question" section */}
              <div className="absolute left-[-30%] md:left-[-20%] top-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-[-1]"></div>
              <div className="absolute right-[-30%] md:right-[-20%] top-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-[-1]"></div>
              
              <span className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-medium">
                // 01 — THE QUESTION
              </span>
              
              <h2 className={`font-orbitron text-5xl md:text-6xl lg:text-[64px] font-bold text-white mb-8 tracking-wide`}>
                WHY DO WE NEED <span className="text-[#d4ff00]">MEGHA?</span>
              </h2>

              <div className="flex flex-col gap-8 text-gray-400 text-lg md:text-xl lg:text-[22px] leading-[1.8] tracking-wide font-light max-w-none w-full pr-4 md:pr-12 lg:pr-24">
                <p>
                  For seventy years, air power meant a handful of extraordinarily expensive aircraft flown by humans who had to be physically present and exposed to danger. that model is breaking down in front of the entire world. on every modern battlefield the decisive weapon is no longer the most exquisite platform — it is the <span className="text-white font-semibold">cheapest one, produced in the largest numbers, and intelligent enough to fight when no human is steering it.</span>
                </p>
                <p>
                  MEGHA exists because the old way of war has become unaffordable, slow, manned, and fragile. it answers a single hard problem at the heart of the modern battlefield: how do you deliver decisive force that is cheap to lose, fast to build, precise enough to spare civilians, and able to keep fighting the moment the enemy jams the radio link? every design decision in the megha series traces back to solving a real battlefield problem.
                </p>
              </div>
            </div>

            {/* Visual Section: Shape, UAV, Vertical Text */}
            <div className="w-full relative h-[600px] md:h-[800px] mt-24 flex items-center justify-center">
              
              <div 
                className="absolute top-[-30%] w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] z-10 pointer-events-none"
                style={{ left: 'calc(50% - 50vw)' }}
              >
                <img 
                  src={abstractShape} 
                  alt="Abstract Shape" 
                  className="w-full h-full object-contain object-left"
                />
              </div>
              
              <div className="relative z-0 w-full max-w-[1100px] h-[500px] md:h-[700px] pointer-events-none opacity-90 flex justify-center items-center">
                {/* Orangish Background Light in the Middle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/15 blur-[120px] rounded-full z-[-1]"></div>
                
                <img 
                  src={uavBlueprint} 
                  alt="UAV Blueprint" 
                  className="w-full h-full object-contain relative z-10"
                />
              </div>

              <div 
                className="absolute top-1/2 -translate-y-1/2 origin-center opacity-40 pointer-events-none z-0"
                style={{ right: 'calc(50% - 50vw + 20px)' }}
              >
                <span className={`font-orbitron text-[80px] md:text-[140px] font-bold tracking-[0.2em] text-white/50 whitespace-nowrap`} style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  AUTONOMY
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: PROBLEMS MEGHA SOLVES                          */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pb-24">
            
            <div className="flex flex-col items-start text-left w-full pt-4">
              <span className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-medium">
                // 02 — PROBLEMS MEGHA SOLVES
              </span>
              
              <div className="relative w-full mb-16">
                <div className="absolute top-5 md:top-8 lg:top-10 left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] h-[1px] bg-white/50 w-[1.2rem] md:w-[2.5rem] lg:w-[3.5rem]"></div>
                <h2 className={`font-orbitron text-4xl md:text-6xl lg:text-[72px] font-bold text-white tracking-wide leading-[1.1] uppercase max-w-5xl`}>
                  REAL BATTLEFIELD PROBLEMS, <span className="text-[#d4ff00]">ENGINEERED</span> SOLUTIONS
                </h2>
              </div>
            </div>

            <div 
              className="absolute pointer-events-none z-0"
              style={{ right: 'calc(50% - 50vw - 100px)', top: '250px', width: '900px', height: '900px' }}
            >
              <img 
                src={object2} 
                alt="Abstract Object 2" 
                className="w-full h-full object-contain object-right opacity-80 mix-blend-screen"
              />
            </div>

            <div className="absolute right-[-20%] md:right-[-10%] top-[30%] w-[500px] md:w-[800px] h-[700px] md:h-[1100px] bg-[#5D6EF3]/60 blur-[100px] md:blur-[120px] rounded-[100%] pointer-events-none z-0 mix-blend-screen"></div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 relative z-10">
              {problems.map((prob, idx) => {
                const isTopRow = idx < 3;
                const isLeftCol = idx % 3 === 0;
                
                return (
                  <div 
                    key={prob.id} 
                    className={`flex flex-col items-start p-8 lg:p-12 border-white/20 ${!isTopRow ? 'border-t' : ''} ${!isLeftCol ? 'border-l' : ''} bg-black/10 backdrop-blur-sm`}
                  >
                    <span className="text-gray-400 text-sm tracking-widest mb-6 uppercase">
                      {prob.id} / {prob.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
                      {prob.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-light">
                      {prob.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2.5: PLANE SHOWCASE                               */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center">
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E3E41B]/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pb-32 pt-24 flex flex-col items-center">
            
            <div className="relative w-full max-w-[900px] aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-white/10">
              <img 
                src={planeImage} 
                alt="HESA Shahed 136 Drone" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 text-center max-w-4xl mx-auto z-10 flex flex-col gap-2 text-gray-400 font-light text-[11px] md:text-sm tracking-wide leading-relaxed">
              <p className="text-gray-300">You said: shahid 136</p>
              <p>
                The HESA Shahed 136 (also known as the Geran-2 in Russian service) is an Iranian-designed, one-way attack (OWA) kamikaze drone built to conduct long-range precision strikes. First introduced into active service around 2021, it has fundamentally shifted modern asymmetric warfare due to its incredibly low cost (ranging from $10,000 to $50,000 to manufacture locally) relative to its long operational range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THE COST ARGUMENT                              */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center">
        <div className="absolute left-[-20%] top-0 w-[800px] h-[800px] bg-[#d4ff00]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pb-32 pt-24">
            <div className="flex flex-col items-start text-left w-full pt-4">
              <span className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-medium">
                // 03 — THE COST ARGUMENT
              </span>
              
              <div className="relative w-full mb-16">
                <div className="absolute top-5 md:top-7 lg:top-10 left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] h-[1px] bg-white/50 w-[1.2rem] md:w-[2.5rem] lg:w-[3.5rem]"></div>
                <h2 className={`font-orbitron text-4xl md:text-5xl lg:text-[72px] font-bold text-white tracking-wide leading-[1.1] uppercase max-w-5xl`}>
                  YOU <span className="text-[#d4ff00]">CANNOT</span> WIN A WAR OF MASS WITH A STRATEGY OF SCARCITY
                </h2>
              </div>

              <p className="text-gray-400 text-lg md:text-xl lg:text-[22px] leading-[1.8] tracking-wide font-light max-w-4xl mb-24">
                The reason the old model collapses is arithmetic, not technology. The defender wins almost every individual engagement — and still loses the war of attrition, because each "win" costs hundreds of times more than it costs the attacker.
              </p>
            </div>

            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-[1.5fr_1fr_2fr] w-full">
                
                {/* Headers */}
                <div className="text-white text-base md:text-xl font-medium tracking-wide pb-6 border-b border-white/20 pr-4">
                  SYSTEM / ENGAGEMENT
                </div>
                <div className="text-white text-base md:text-xl font-medium tracking-wide pb-6 border-b border-white/20 border-l border-white/50 pl-6 md:pl-10 pr-4">
                  APPROX. COST
                </div>
                <div className="text-white text-base md:text-xl font-medium tracking-wide pb-6 border-b border-white/20 border-l border-white/50 pl-6 md:pl-10">
                  WHAT IT MEANS
                </div>
                
                {/* Data Rows */}
                {tableData.map((row, idx) => (
                  <React.Fragment key={idx}>
                    <div className={`${row.highlight ? 'text-[#d4ff00]' : 'text-gray-300'} text-sm md:text-lg font-light tracking-wide py-6 md:py-8 pr-4 flex items-center`}>
                      {row.system}
                    </div>
                    <div className={`${row.highlight ? 'text-[#d4ff00]' : 'text-gray-300'} text-sm md:text-lg font-light tracking-wide border-l border-white/50 pl-6 md:pl-10 pr-4 py-6 md:py-8 flex items-center`}>
                      {row.cost}
                    </div>
                    <div className={`${row.highlight ? 'text-[#d4ff00]' : 'text-gray-400'} text-sm md:text-base font-light tracking-wide leading-relaxed border-l border-white/50 pl-6 md:pl-10 py-6 md:py-8 flex items-center`}>
                      {row.meaning}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3.5: THE EQUATION & LAUNCH IMAGE                  */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center">
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4ff00]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pb-32 pt-16 flex flex-col items-center">
            
            <p className="text-gray-300 text-center text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mb-16">
              This is the equation MEGHA is engineered to win. Instead of spending millions to stop a cheap threat, MEGHA <span className="text-[#d4ff00] font-medium">becomes the mass</span> — fielding attritable, autonomous aircraft in numbers no exquisite platform can match, while keeping the human cost at zero
            </p>

            <div className="w-full max-w-6xl rounded-[2rem] border border-white/30 p-8 md:p-12 mb-20 bg-black/20 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr_0.8fr] gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/30">
                <div className="flex flex-col items-start md:px-6 lg:px-8 first:pl-0">
                  <div className="text-5xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
                    $2<span className="text-[#d4ff00]">0</span>K
                  </div>
                  <div className="text-gray-300 text-sm md:text-base tracking-wide font-light">Cost to attack</div>
                </div>
                <div className="flex flex-col items-start md:px-6 lg:px-8">
                  <div className="text-5xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
                    2<span className="text-[#d4ff00]">00</span><span className="text-3xl md:text-4xl">x</span>
                  </div>
                  <div className="text-gray-300 text-sm md:text-base tracking-wide font-light">Defender cost ratio</div>
                </div>
                <div className="flex flex-col items-start md:px-6 lg:px-8">
                  <div className="text-5xl md:text-5xl lg:text-[56px] font-light text-white mb-4 tracking-tight whitespace-nowrap">
                    7M-1<span className="text-[#d4ff00]">0</span>M
                  </div>
                  <div className="text-gray-300 text-sm md:text-base tracking-wide font-light pr-2">Ukraine drone output, 2026 est</div>
                </div>
                <div className="flex flex-col items-start md:px-6 lg:px-8 last:pr-0">
                  <div className="text-5xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
                    $<span className="text-[#d4ff00]">0</span>
                  </div>
                  <div className="text-gray-300 text-sm md:text-base tracking-wide font-light">Human casualties per loss</div>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[800px] aspect-[4/3] md:aspect-[3/2] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 z-10">
              <img src={humanImage} alt="Marine launching a drone" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: CAPABILITIES & ISR                             */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center pb-32">
        <div className="absolute left-[-20%] top-[20%] w-[800px] h-[800px] bg-[#d4ff00]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute right-[-10%] bottom-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="absolute right-[-25%] md:right-[-40%] top-0 w-[140%] md:w-[120%] h-full pointer-events-none z-0 opacity-60 mix-blend-screen">
          <img src={rocksImage} alt="Floating Rocks Background" className="w-full h-full object-contain object-right-top" />
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pt-24">
            <div className="flex flex-col items-start text-left w-full mb-16 pt-4">
              <span className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-medium">
                // 04 — CAPABILITIES & ISR
              </span>
              
              <div className="relative w-full">
                <div className="absolute top-5 md:top-7 lg:top-10 left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] h-[1px] bg-white/50 w-[1.2rem] md:w-[2.5rem] lg:w-[3.5rem]"></div>
                <h2 className={`font-orbitron text-4xl md:text-5xl lg:text-[72px] font-bold text-white tracking-wide leading-[1.1] uppercase max-w-5xl`}>
                  MAN-PORTABLE, EDGE-<br/>
                  <span className="text-[#d4ff00]">INTELLIGENT,</span> PERSISTENT<br/>
                  EYES ON THE BATTLEFIELD
                </h2>
              </div>
            </div>

            <div className="w-full max-w-6xl rounded-[2rem] border border-white/20 bg-black/10 backdrop-blur-md p-8 md:p-12 mb-24 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-md border border-[#d4ff00]/50 bg-black/50">
                        <span className="text-[#d4ff00] text-sm font-semibold">{cap.num}</span>
                      </div>
                      <h3 className="text-white text-lg md:text-xl font-medium tracking-wide">{cap.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-light pl-[3rem]">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[1px] bg-white/10"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
              <h2 className={`font-orbitron text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-[0.1em] mb-12`}>
                <span className="text-[#d4ff00]">SEE</span> FIRST. <span className="text-[#d4ff00]">DECIDE</span> FIRST. <span className="text-[#d4ff00]">ACT</span> FIRST.
              </h2>
              <p className="text-gray-300 text-lg md:text-xl lg:text-[22px] leading-[1.8] tracking-wide font-light">
                An ISR patrol that detects the threat before the enemy is aware of you is worth more than any weapon fired blind — turning raw airspace into <span className="text-white font-semibold">persistent, AI-enhanced</span> awareness while soldiers stay out of the kill zone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: THE AIRFRAME                                   */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center">
        <div className="absolute left-[-20%] top-[30%] w-[800px] h-[800px] bg-[#d4ff00]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute right-[-10%] top-[30%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pt-24 pb-8">
            <div className="flex flex-col items-start text-left w-full mb-12 pt-4">
              <span className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-medium">
                // 05 — THE AIRFRAME
              </span>
              
              <div className="relative w-full">
                <div className="absolute top-5 md:top-8 lg:top-10 left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] h-[1px] bg-white/50 w-[1.2rem] md:w-[2.5rem] lg:w-[3.5rem]"></div>
                <h2 className={`font-orbitron text-4xl md:text-6xl lg:text-[72px] font-bold text-white tracking-wide leading-[1.1] uppercase max-w-5xl`}>
                  <span className="text-[#d4ff00]">STEALTH</span> THROUGH<br/>
                  ADVANCED COMPOSITES &<br/>
                  RAPID <span className="text-[#d4ff00]">3D-PRINTED</span><br/>
                  DEPLOYMENT
                </h2>
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl lg:text-[22px] leading-[1.8] tracking-wide font-light max-w-5xl mb-24">
              MEGHA airframes are built from <span className="text-[#d4ff00] font-medium">advanced engineering-grade thermoplastics, carbon fibre and reinforced composites</span>, manufactured through additive 3D printing. This is not a cost compromise — it is a tactical advantage. Composite structures reduce radar signature, keep the airframe light for extended endurance, and remain rugged enough for sustained frontline conditions. The result is a man-portable system that is hard to detect, cheap to field, and fast to replace.
            </p>

            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 px-8">
                {features.map((feat, idx) => (
                  <div key={idx} className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                    {feat.category}
                  </div>
                ))}
              </div>

              <div className="w-full rounded-[1.5rem] border border-white/20 bg-black/20 backdrop-blur-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex flex-col items-start p-8">
                      <h3 className="text-white text-xl md:text-2xl font-semibold mb-6 tracking-wide leading-snug">
                        <span className="text-[#d4ff00]">{feat.highlightTitle}</span> {feat.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-light">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5.5: THE MACHINES                                 */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center">
        <div className="absolute left-[-20%] top-[30%] w-[800px] h-[800px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pt-0 pb-8 flex justify-center items-start">
            
            <div className="flex flex-col md:flex-row items-end justify-center w-full max-w-7xl mt-4 relative">
              <div className="w-full md:w-1/2 flex justify-end pr-4 md:pr-8 z-10">
                <img 
                  src={printer3d} 
                  alt="CNC Milling Machine" 
                  className="w-full max-w-[650px] object-contain opacity-90 drop-shadow-2xl"
                />
              </div>

              <div className="w-full md:w-1/2 flex justify-start pl-4 md:pl-8 z-10">
                <img 
                  src={cncMilling} 
                  alt="3D Printer" 
                  className="w-full max-w-[650px] object-contain opacity-90 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ========================================================= */}
      {/* SECTION 4.5: SWARM AUTONOMY                               */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center pb-32">
        <div className="absolute left-[-20%] top-[30%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pt-24">
            <div className="flex flex-col items-start text-left w-full mb-12 pt-4">
              <span className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-8 font-medium">
                // 06 — SWARM AUTONOMY
              </span>
              
              <div className="relative w-full">
                <div className="absolute top-5 md:top-8 lg:top-10 left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] h-[1px] bg-white/50 w-[1.2rem] md:w-[2.5rem] lg:w-[3.5rem]"></div>
                <h2 className={`font-orbitron text-4xl md:text-6xl lg:text-[72px] font-bold text-white tracking-wide leading-[1.1] uppercase max-w-5xl`}>
                  NETWORKED <span className="text-[#d4ff00]">SWARM</span><br/>
                  <span className="text-[#d4ff00]">AUTONOMY</span>, RESILIENT TO<br/>
                  ELECTRONIC WARFARE
                </h2>
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl lg:text-[22px] leading-[1.8] tracking-wide font-light max-w-5xl mb-24">
              A single MEGHA is powerful. The real weapon is the swarm. <span className="text-white font-semibold">Through ARC <span className="text-[#d4ff00]">OS</span> — ABSOL X's</span> agentic command-and-control platform — one commander dictates the strategic intent, the &quot;what&quot; and the &quot;why,&quot; while thousands of distributed MEGHA agents intelligently determine the &quot;how.&quot; And on every modern battlefield the radio link is the first thing the enemy attacks. MEGHA bypasses Electronic Warfare entirely: the moment the link is severed, the onboard AI promotes itself to operator and executes the commander&apos;s intent independently.
            </p>

            <div className="w-full max-w-5xl rounded-[2rem] border border-white/20 bg-black/20 backdrop-blur-md p-8 md:p-12 shadow-2xl">
              <h3 className={`font-orbitron text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-[1.4] uppercase mb-8`}>
                <span className="text-[#d4ff00]">ONE</span> COMMANDER. <span className="text-[#d4ff00]">ONE</span> HAND. THOUSANDS OF INTELLIGENT UAVS ACTING AS A SINGLE COORDINATED SWARM.
              </h3>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-[1.8] tracking-wide font-light">
                If localized jamming degrades part of the swarm, the surviving MEGHA assets automatically re-route their mesh communications, redistribute tactical roles, and continue the mission. The swarm <span className="text-[#d4ff00] font-medium">degrades gracefully rather than collapsing</span> — each AI agent acting as a localized battlefield commander.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      {/* ========================================================= */}
      {/* SECTION 6: OLD WAY VS MEGHA                               */}
      {/* ========================================================= */}
      <section className="w-full relative flex flex-col items-center pb-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 z-10 relative">
          <div className="relative border-l border-white/50 pl-6 md:pl-12 lg:pl-16 pt-16">
            
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between mt-12">
              
              {/* Left Column: Old Way */}
              <div className="w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-8">
                <span className="text-gray-400 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                  // OLD WAY — DEPENDENT ON A DISTANT BRAIN
                </span>
                <div className="w-[80%] h-[1px] bg-white/10 mt-4 mb-8"></div>
                
                <ul className="flex flex-col gap-6 text-gray-300 text-sm md:text-base tracking-wide font-light">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Dies the moment the link is jammed
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Lost when GPS is denied
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Decisions delayed by network latency
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Constant transmissions reveal position
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Crew exposed to recover lost links
                  </li>
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-[1px] bg-white/20 self-stretch mx-4"></div>

              {/* Right Column: MEGHA */}
              <div className="w-full md:w-1/2 flex flex-col items-start pl-0 md:pl-8">
                <span className="text-[#d4ff00] text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                  // MEGHA — EDGE-AUTONOMOUS AGENT
                </span>
                <div className="w-[80%] h-[1px] bg-white/10 mt-4 mb-8"></div>
                
                <ul className="flex flex-col gap-6 text-gray-300 text-sm md:text-base tracking-wide font-light">
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Promotes AI to operator; keeps fighting
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Navigates by computer vision and motion
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Decisions made onboard in milliseconds
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Stays entirely silent and undetectable
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    No human ever sent into the fire
                  </li>
                </ul>
              </div>

            </div>

            {/* Final Concluding Text */}
            <div className="w-full mt-32 md:mt-40 pb-12 relative">
              <h2 className="text-4xl md:text-6xl lg:text-[76px] font-light text-white leading-[1.1] tracking-wide text-left pr-4">
                The <span className="text-[#d4ff00] font-medium">Future</span> of Power Belongs to<br className="hidden lg:block" />
                {' '}Cheap, Numerous, <span className="text-[#d4ff00] font-medium">Intelligent</span> Mass
              </h2>
            </div>
            
            {/* The terminal horizontal line that caps the left vertical border */}
            <div className="absolute bottom-0 left-0 w-[200px] md:w-[350px] h-[1px] bg-white/50"></div>

          </div>
        </div>
      </section>

    </div>
  );
}

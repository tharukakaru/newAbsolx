import { useState } from "react";

const publications = [
  {
    date: "6/30/2026",
    title: "DrugDiscoveryBench: Can Coding Agents Assist Early-Stage Drug Discovery?",
    authors:
      "Afra Fayza Akyürek, Xinming Tu, Alec Gutmanstein, Jason Qin, Divyansh Agarwal, Sofia Monasdatter, Sarg...",
    category: "Agents, Ente...",
  },
  {
    date: "6/29/2026",
    title: "SWE-INTERACT: Reimagining SWE Benchmarks as User-Driven Long-Horizon Coding Sessions",
    authors: "Mohit Raghavendra, Anisha Gunjal, Aakash Sabharwal, Yunzhong He",
    category: "Agents, Eval...",
  },
  {
    date: "6/19/2026",
    title: "ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks",
    authors: "Vincent Siu, Manasi Sharma, Dawn Song, Daniel Yue Zhang, Chenguang Wang",
    category: "Agents, Eval...",
  },
  {
    date: "6/10/2026",
    title: "Rubric-Guided Self-Distillation: Post-Training Without Rubric Verifiers",
    authors:
      "MohammadHossein Rezaei, Anas Mahmoud, Zihao Wang, Utkarsh Tyagi, Advait Gosai, Razvan-Gabriel Dumitru,...",
    category: "Post-Training",
  },
  {
    date: "6/9/2026",
    title: "PSEBench: A Controllable and Verifiable Benchmark for Evaluating LLMs in Patient Safety Event Triage",
    authors:
      "Keqi Han, Ryan Young, Annabel Strauss, Lindsey Hughes, Katharine M. Resnick, Nicole Schueler, Cha Nguf...",
    category: "Evaluation a...",
  },
  {
    date: "6/4/2026",
    title: "Insights Generator: Systematic Corpus-Level Trace Diagnostics for LLM Agents",
    authors:
      "Akshay Manglik, Apoor Shanker, Kaustubh Deshpande, Jason Qin, Yash Maurya, Veronica Chatrath, Vijay Ka...",
    category: "Agents, Eval...",
  },
  {
    date: "5/28/2026",
    title: "VisionMesh: Multi-Agent Perception Fusion for Contested Electromagnetic Environments",
    authors: "Priya Nair, Elias Kovac, Mira Chen, Omar Haddad",
    category: "Autonomy, Perception",
  },
  {
    date: "5/12/2026",
    title: "ARC Trace: Evaluating Onboard Decision Latency Under Link Denial",
    authors: "Jordan Hale, Keiko Sato, Marcus Wei, Lena Ortiz",
    category: "Systems, Eval...",
  },
];

const PAGE_SIZE = 6;

function IconArrow({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AbsolPublications() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = publications.slice(0, visibleCount);
  const canLoadMore = visibleCount < publications.length;

  return (
    <section id="publications" className="absol-pubs relative z-10 mx-auto mt-8 w-full max-w-[1400px] px-3 py-10 sm:mt-12 sm:px-4 sm:py-14">
      <div className="mb-12 sm:mb-16">
        <h2 className="absol-pubs__title mb-4 text-[calc(1.25rem+2px)] italic sm:mb-5 md:text-[calc(1.5rem+2px)]">
          <span className="text-white">Our </span>
          <span className="text-[#d4ff00]">publication</span>
        </h2>
        <p className="absol-pubs__body w-full max-w-none text-[calc(0.75rem+2px)] leading-relaxed tracking-wide text-white/70 md:text-[15px]">
          Research papers and engineering publications from ABSOLX CORE AI advancing artificial
          intelligence, autonomous systems, rapid manufacturing, advanced robotics, aerospace,
          defense technology, high-performance computing, and frontier engineering.
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-12 gap-4 border-b border-white/15 pb-4 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          <div className="col-span-2 pl-2 md:col-span-1">Date</div>
          <div className="col-span-10 flex items-center gap-2 pl-2 md:col-span-8 md:pl-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff00]" />
            Title
          </div>
          <div className="hidden items-center gap-2 md:col-span-3 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff00]" />
            Category
          </div>
        </div>

        <div className="flex flex-col">
          {visible.map((pub) => (
            <button
              key={pub.title}
              type="button"
              className="group grid grid-cols-12 gap-4 border-b border-white/10 py-7 text-left transition-colors hover:bg-white/[0.03]"
            >
              <div className="col-span-12 mb-2 pl-2 text-[13px] text-gray-400 md:col-span-1 md:mb-0">
                {pub.date}
              </div>
              <div className="col-span-12 pl-2 pr-4 md:col-span-8 md:pl-0">
                <h3 className="mb-2 text-[14px] font-bold text-white transition-colors group-hover:text-[#d4ff00] md:text-[15px]">
                  {pub.title}
                </h3>
                <p className="text-[12px] italic leading-relaxed text-gray-500">{pub.authors}</p>
              </div>
              <div className="col-span-12 mt-3 flex items-center justify-between pl-2 pr-4 md:col-span-3 md:mt-0 md:pl-0">
                <span className="text-[13px] text-gray-400">{pub.category}</span>
                <IconArrow className="text-gray-500 transition-colors group-hover:text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {canLoadMore && (
        <div className="mt-16 flex flex-col items-center gap-5 sm:mt-20">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => Math.min(n + PAGE_SIZE, publications.length))}
            className="absol-pubs__cta relative inline-flex items-center justify-center border border-[#d4ff00] bg-[#1f2023] px-14 py-4 transition-colors hover:bg-[#2a2b2f]"
          >
            <span className="absolute -left-[2px] -top-[2px] h-2.5 w-2.5 border-l-[3px] border-t-[3px] border-white" />
            <span className="absolute -right-[2px] -top-[2px] h-2.5 w-2.5 border-r-[3px] border-t-[3px] border-white" />
            <span className="absolute -bottom-[2px] -left-[2px] h-2.5 w-2.5 border-b-[3px] border-l-[3px] border-white" />
            <span className="absolute -bottom-[2px] -right-[2px] h-2.5 w-2.5 border-b-[3px] border-r-[3px] border-white" />
            <span className="text-[15px] font-normal tracking-[0.25em] text-white">LOAD MORE</span>
          </button>
        </div>
      )}

      <style>{`
        .absol-pubs__title,
        .absol-pubs__body {
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
        }
        .absol-pubs__cta span:last-child {
          font-family: "Yapari Trial", "Azonix", sans-serif;
        }
      `}</style>
    </section>
  );
}

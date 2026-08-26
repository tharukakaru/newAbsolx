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
    <section id="publications" className="absol-pubs relative z-10 mx-auto mt-8 w-full max-w-[1400px] px-3 pt-10 pb-20 sm:mt-12 sm:px-4 sm:pt-14 sm:pb-28">
      <div className="mb-16 sm:mb-20">
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

      <div className="w-full pl-8 sm:pl-10 md:pl-12">
        <div className="grid grid-cols-12 gap-4 border-b border-white/15 pb-4 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          <div className="col-span-2 pl-2 md:col-span-1">Date</div>
          <div className="col-span-10 flex items-center gap-2 pl-2 md:col-span-8 md:pl-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff00]" />
            Title
          </div>
          <div className="hidden items-center justify-end gap-1.5 pr-[18px] md:col-span-3 md:flex">
            <div className="mr-[50px] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff00]" />
              Category
            </div>
            <span className="inline-block w-4 shrink-0" aria-hidden="true" />
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
                <h3 className="mb-2 text-[14px] font-semibold text-white/85 transition-colors group-hover:text-[#d4ff00] md:text-[15px]">
                  {pub.title}
                </h3>
                <p className="text-[12px] italic leading-relaxed text-gray-500">{pub.authors}</p>
              </div>
              <div className="col-span-12 mt-3 flex items-center justify-end gap-1.5 pl-2 pr-[18px] md:col-span-3 md:mt-0 md:pl-0">
                <span className="mr-[50px] text-[12px] text-gray-400">{pub.category}</span>
                <IconArrow className="shrink-0 text-gray-500 transition-colors group-hover:text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {canLoadMore && (
        <div className="mt-16 mb-8 flex justify-center sm:mt-20 sm:mb-12">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => Math.min(n + PAGE_SIZE, publications.length))}
            className="absol-pubs__cta group flex flex-col items-center gap-2"
          >
            <span className="relative inline-flex items-center justify-center border border-[#E3E41B] bg-white/[0.12] px-9 py-2 transition-colors group-hover:bg-white/[0.18]">
              <span className="pointer-events-none absolute -left-[3px] -top-[3px] h-2 w-2 border-l-[1.5px] border-t-[1.5px] border-white" />
              <span className="pointer-events-none absolute -right-[3px] -top-[3px] h-2 w-2 border-r-[1.5px] border-t-[1.5px] border-white" />
              <span className="pointer-events-none absolute -bottom-[3px] -left-[3px] h-2 w-2 border-b-[1.5px] border-l-[1.5px] border-white" />
              <span className="pointer-events-none absolute -bottom-[3px] -right-[3px] h-2 w-2 border-b-[1.5px] border-r-[1.5px] border-white" />
              <span className="absol-pubs__cta-label text-[11px] font-light tracking-[0.22em] text-white">
                LOAD MORE
              </span>
            </span>
            <svg
              className="text-white transition-transform duration-200 group-hover:translate-y-0.5"
              width="22"
              height="20"
              viewBox="0 0 18 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 2.5 9 8l6-5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 8 9 13.5 15 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        .absol-pubs__title,
        .absol-pubs__body {
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
        }
        .absol-pubs__cta-label {
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-weight: 300;
        }
      `}</style>
    </section>
  );
}

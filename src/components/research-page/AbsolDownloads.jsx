import AbsolModelCard from "./AbsolModelCard";

const models = [
  {
    title: "ABSOLX SOUL V3.1S",
    badge: "ABSOL X trained",
    subtitle: "Realistic_Vision_V5.1_Hyper_pruned.saf...",
    sub2: "Half precision, best balance (pruned) • 1.99 GB",
    size: "1.99 GB",
    type: ["CHECKPOINT MERGE", "SAFETENSOR"],
    stats: { dl: "626,998", energy: "78.5K" },
    reviews: { text: "Overwhelmingly Positive", count: "(17,625)" },
    published: "Oct 5, 2023",
    baseModel: "SDXL",
    usageTips: "CLIP SKIP: 2",
    reqSpec: ["AUTOV2", "7C819B6D13"],
  },
  {
    title: "fp16 SafeTensor",
    badge: "ABSOL X trained",
    subtitle: "Realistic_Vision_V5.1_Hyper_pruned.saf...",
    sub2: "Half precision, best balance (pruned) • 1.99 GB",
    size: "1.99 GB",
    type: ["CHECKPOINT MERGE", "SAFETENSOR"],
    stats: { dl: "626,998", energy: "78.5K" },
    reviews: { text: "Overwhelmingly Positive", count: "(17,625)" },
    published: "Oct 5, 2023",
    baseModel: "Flux",
    usageTips: "CLIP SKIP: 2",
    reqSpec: ["AUTOV2", "7C819B6D13"],
  },
  {
    title: "fp16 SafeTensor",
    badge: "ABSOL X trained",
    subtitle: "Realistic_Vision_V5.1_Hyper_pruned.saf...",
    sub2: "Half precision, best balance (pruned) • 1.99 GB",
    size: "1.99 GB",
    type: ["CHECKPOINT MERGE", "SAFETENSOR"],
    stats: { dl: "626,998", energy: "78.5K" },
    reviews: { text: "Overwhelmingly Positive", count: "(17,625)" },
    published: "Oct 5, 2023",
    baseModel: "SDXL",
    usageTips: "CLIP SKIP: 2",
    reqSpec: ["AUTOV2", "7C819B6D13"],
  },
];

export default function AbsolDownloads() {
  return (
    <section id="downloads" className="absol-downloads relative z-10 flex w-full flex-col items-center pb-16 pt-24 sm:pb-20 sm:pt-32">
      <div className="mb-16 flex flex-col items-center sm:mb-24">
        <span className="absol-downloads__eyebrow mb-3 text-sm tracking-[0.3em] text-white sm:mb-4 sm:text-lg">
          OPEN SOURCE
        </span>
        <h2 className="absol-downloads__title text-[clamp(2.6rem,10vw,6.875rem)] font-medium tracking-[0.12em] text-white">
          DOWN<span className="text-[#d4ff00]">LOAD</span>&apos;S
        </h2>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="mb-10">
          <h3 className="absol-downloads__subtitle mb-2 text-2xl tracking-widest text-white md:text-3xl">
            DIFFUSION MODELS/LORA
          </h3>
          <span className="absol-downloads__eyebrow text-xs tracking-[0.2em] text-gray-400">
            OPEN SOURCE
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {models.map((model) => (
            <AbsolModelCard key={`${model.title}-${model.baseModel}`} model={model} />
          ))}
        </div>
      </div>

      <style>{`
        .absol-downloads__title,
        .absol-downloads__subtitle {
          font-family: "Yapari Trial", "Azonix", sans-serif;
        }
        .absol-downloads__eyebrow {
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
        }
      `}</style>
    </section>
  );
}

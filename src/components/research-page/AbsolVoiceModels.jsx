import AbsolModelCard from "./AbsolModelCard";

const voiceModels = [
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
    baseModel: "SD 1.5",
    usageTips: "CLIP SKIP: 2",
    reqSpec: ["AUTOV2", "7C819B6D13"],
  },
];

export default function AbsolVoiceModels() {
  return (
    <section id="voice" className="absol-voice relative z-10 mx-auto mb-56 w-full max-w-[1400px] px-6 pt-16 pb-64 sm:mb-72 sm:pb-80">
      <div className="mb-10">
        <h2 className="absol-voice__title mb-0.5 text-[20px] font-normal uppercase tracking-wide text-white sm:text-[26px] md:text-[30px]">
          VOICE INTELLIGENCE MODELS
        </h2>
        <span className="absol-voice__eyebrow text-[15px] font-light tracking-[0.2em] text-[#FFFFFF]">
          OPEN SOURCE
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {voiceModels.map((model) => (
          <AbsolModelCard key={`${model.title}-${model.baseModel}`} model={model} />
        ))}
      </div>

      <style>{`
        .absol-voice__title {
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-weight: 400;
        }
        .absol-voice__eyebrow {
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
        }
      `}</style>
    </section>
  );
}

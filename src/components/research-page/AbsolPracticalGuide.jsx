import { useState } from "react";

const contents = [
  {
    title: "Introduction",
    body: [
      "With the release of DALL·E 2, Google's Imagen, Stable Diffusion, and Midjourney, diffusion models have taken the world by storm — inspiring creativity and pushing the boundaries of machine learning.",
      "These models can generate a near-infinite variety of images from text prompts, including the photo-realistic, the fantastical, the futuristic, and of course the adorable.",
      "These capabilities redefine what it means for humanity to interact with silicon, giving us superpowers to generate almost any image that we can imagine. Even with their advanced capabilities, diffusion models do have limitations which we will cover later in the guide.",
      "In this guide, we explore diffusion models, how they work, their practical applications, and what the future may have in store.",
    ],
  },
  {
    title: "What are Diffusion Models?",
    body: [
      "Diffusion models learn to reverse a gradual noising process. Starting from pure noise, they iteratively denoise toward a sample that matches the training distribution — conditioned on text, images, or other signals.",
      "Unlike GANs, they optimize a tractable likelihood-related objective and tend to produce more stable training dynamics at scale.",
    ],
  },
  {
    title: "Diffusion Models: Why Are They Important?",
    body: [
      "They unlock controllable generation for design, simulation, synthetic data, and human–machine collaboration — from concept art to engineering visualization.",
      "For ABSOL X research, diffusion is a substrate for perception synthesis, scenario generation, and open model experimentation.",
    ],
  },
  {
    title: "Getting Started with Diffusion Models",
    body: [
      "Begin with a well-documented open checkpoint, a modest GPU, and a clear prompt discipline. Prefer SafeTensors weights and verify hashes before load.",
      "Measure latency, VRAM, and output consistency before optimizing for quality. Ship the smallest reliable loop first.",
    ],
  },
  {
    title: "Diffusion Model Prompt Engineering",
    body: [
      "Treat prompts as interface contracts: subject, style, camera, lighting, negative constraints. Keep a library of reusable fragments.",
      "Evaluate systematically — same seeds, same steps — so changes in wording are attributable.",
    ],
  },
  {
    title: "Diffusion Model Limitations",
    body: [
      "Common failure modes include composition errors, text rendering issues, identity drift, and brittle control under strong conditioning.",
      "Mitigate with curated datasets, LoRA specialization, and human review on high-stakes outputs.",
    ],
  },
  {
    title: "Diffusion Models: Additional Capabilities and Tooling",
    body: [
      "ControlNets, IP-Adapters, upscalers, and latent editors expand the stack beyond text-to-image into pipelines you can version and test.",
      "Pair generation with evaluation harnesses so research claims stay measurable.",
    ],
  },
  {
    title: "Diffusion Models: Practical Applications for today and .",
    body: [
      "Today: concept exploration, synthetic ISR imagery for training, UI mock generation, and rapid industrial visualization.",
      "Tomorrow: tighter coupling with agents and autonomy stacks — diffusion as a world-model sketchpad under human command.",
    ],
  },
];

export default function AbsolPracticalGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = contents[activeIndex];

  return (
    <section id="guide" className="absol-guide relative z-10 mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-24">
      <h2 className="absol-guide__title mb-14 text-3xl uppercase tracking-wide text-white sm:mb-20 md:text-5xl lg:text-[54px]">
        DIFFUSION MODELS: <span className="text-[#d4ff00]">A PRACTICAL GUIDE</span>
      </h2>

      <div className="flex flex-col gap-14 lg:flex-row lg:gap-24">
        <aside className="w-full shrink-0 lg:w-1/3">
          <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-white">Contents</h3>
          <nav className="flex flex-col gap-5" aria-label="Guide contents">
            {contents.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex text-left"
                >
                  <span
                    className={`mr-4 w-[3px] shrink-0 rounded-full transition-colors ${
                      isActive ? "bg-[#d4ff00]" : "border-l border-white/15 bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-[15px] leading-relaxed transition-colors ${
                      isActive ? "font-medium text-[#d4ff00]" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="flex w-full flex-col lg:w-2/3">
          <h3 className="mb-4 text-xl font-bold text-white">{active.title}</h3>
          <div className="absol-guide__body mb-10 space-y-4 text-[15px] leading-relaxed tracking-wide text-gray-300">
            {active.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveIndex((i) => Math.min(i + 1, contents.length - 1))}
              className="absol-guide__cta group relative inline-flex items-center justify-center border border-white/25 bg-transparent px-8 py-3 transition-colors hover:bg-white/[0.03]"
            >
              <span className="absolute -left-[2px] -top-[2px] h-2.5 w-2.5 border-l-[2.5px] border-t-[2.5px] border-white" />
              <span className="absolute -right-[2px] -top-[2px] h-2.5 w-2.5 border-r-[2.5px] border-t-[2.5px] border-white" />
              <span className="absolute -bottom-[2px] -left-[2px] h-2.5 w-2.5 border-b-[2.5px] border-l-[2.5px] border-white" />
              <span className="absolute -bottom-[2px] -right-[2px] h-2.5 w-2.5 border-b-[2.5px] border-r-[2.5px] border-white" />
              <span className="text-[13px] font-normal uppercase tracking-[0.25em] text-gray-300 transition-colors group-hover:text-white">
                Read more
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .absol-guide__title,
        .absol-guide__cta span:last-child {
          font-family: "Yapari Trial", "Azonix", sans-serif;
        }
        .absol-guide__body {
          font-family: "Plus Jakarta Sans", "Helvetica Now Display", Arial, sans-serif;
        }
      `}</style>
    </section>
  );
}

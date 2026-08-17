import AbsolHero from "./research-page/AbsolHero";
import AbsolPublications from "./research-page/AbsolPublications";
import AbsolDownloads from "./research-page/AbsolDownloads";
import AbsolPracticalGuide from "./research-page/AbsolPracticalGuide";
import AbsolVoiceModels from "./research-page/AbsolVoiceModels";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";

export default function ResearchPageTab() {
  return (
    <div className="research-tab relative flex min-h-screen flex-col overflow-hidden bg-[#06070a] text-white">
      <div className="pointer-events-none absolute top-[2%] -left-[30%] h-[60%] w-[40%] -rotate-12 rounded-[100%] bg-[#4D79EA]/30 blur-[200px]" />
      <div className="pointer-events-none absolute top-[8%] -right-[30%] h-[60%] w-[40%] rotate-12 rounded-[100%] bg-[#4D79EA]/30 blur-[200px]" />
      <div className="pointer-events-none absolute top-[50%] -left-[30%] h-[60%] w-[40%] -rotate-12 rounded-[100%] bg-[#F3D05D]/20 blur-[200px]" />
      <div className="pointer-events-none absolute top-[60%] -right-[30%] h-[60%] w-[40%] rotate-12 rounded-[100%] bg-[#4D79EA]/30 blur-[200px]" />
      <div className="pointer-events-none absolute top-[85%] -left-[30%] h-[60%] w-[40%] -rotate-12 rounded-[100%] bg-[#F3D05D]/20 blur-[200px]" />
      <div className="pointer-events-none absolute top-[90%] -right-[30%] h-[60%] w-[40%] rotate-12 rounded-[100%] bg-[#4D79EA]/20 blur-[200px]" />

      <AbsolHero />
      <AbsolPublications />
      <AbsolDownloads />
      <AbsolPracticalGuide />
      <AbsolVoiceModels />

      <style>{`
        @font-face {
          font-family: "Plus Jakarta Sans";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}

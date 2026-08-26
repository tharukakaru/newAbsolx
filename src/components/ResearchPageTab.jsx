import AbsolHero from "./research-page/AbsolHero";
import AbsolPublications from "./research-page/AbsolPublications";
import AbsolDownloads from "./research-page/AbsolDownloads";
import AbsolPracticalGuide from "./research-page/AbsolPracticalGuide";
import AbsolVoiceModels from "./research-page/AbsolVoiceModels";
import ResearchAtmosphere from "./research-page/ResearchAtmosphere";
import Footer from "./Footer";

export default function ResearchPageTab() {
  return (
    <div className="research-tab relative isolate flex min-h-screen flex-col overflow-x-hidden bg-black text-white">
      <ResearchAtmosphere />

      <div className="relative z-10 flex flex-col">
        <AbsolHero />
        <AbsolPublications />
        <AbsolDownloads />
        <AbsolPracticalGuide />
        <AbsolVoiceModels />
        <Footer showReadmeBridge={false} variant="research" />
      </div>

      <style>{`
        .research-tab {
          --research-footer-border-offset: clamp(112px, calc(6.5vw + 96px), 188px);
        }
      `}</style>
    </div>
  );
}

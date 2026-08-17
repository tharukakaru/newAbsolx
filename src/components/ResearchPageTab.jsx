import AbsolHero from "./research-page/AbsolHero";
import AbsolPublications from "./research-page/AbsolPublications";
import AbsolDownloads from "./research-page/AbsolDownloads";
import AbsolPracticalGuide from "./research-page/AbsolPracticalGuide";
import AbsolVoiceModels from "./research-page/AbsolVoiceModels";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";

export default function ResearchPageTab() {
  return (
    <div className="research-tab relative flex min-h-screen flex-col overflow-x-hidden text-white">
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

        .research-tab {
          isolation: isolate;
          background: #000;
        }

        .research-tab::before,
        .research-tab::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .research-tab::before {
          background:
            radial-gradient(
              ellipse 570px 900px at -140px 16%,
              rgba(77, 121, 234, 0.45) 0%,
              rgba(77, 121, 234, 0.45) 35%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 570px 900px at calc(100% + 140px) 16%,
              rgba(77, 121, 234, 0.45) 0%,
              rgba(77, 121, 234, 0.45) 35%,
              transparent 72%
            );
          filter: blur(90px);
        }

        .research-tab::after {
          background:
            radial-gradient(
              ellipse 1473px 1273px at calc(100% + 680px) 38%,
              #5d6ef3 0%,
              #5d6ef3 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at -680px 55%,
              #f3d05d 0%,
              #f3d05d 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at -680px 76%,
              #5d6ef3 0%,
              #5d6ef3 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at calc(100% + 680px) 92%,
              #f3d05d 0%,
              #f3d05d 38%,
              transparent 72%
            );
          filter: blur(80px);
        }
      `}</style>
    </div>
  );
}

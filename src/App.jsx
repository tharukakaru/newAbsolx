import { useEffect, useState } from "react";
import SubTitle from "./components/hero/SubTitle";
import Title from "./components/hero/Title";
import Navbar from "./components/Navbar";
import AnimatedLine from "./Utils/AnimatedLine";
import BlackHoleCanvas from "./components/BlackholeCanvas";
import Glitch from "./components/Glitch";
import Arc from "./components/Arc";
import Stable from "./components/stable";
import Footer from "./components/Footer";
import Drone from "./components/drone";
import DroneSubSection from "./components/dronesub-section";
import ResearchPage from "./components/ResearchPage";
import ArsOs from "./components/ArsOs";


function HomePage() {
  return (
    <>
      <section className="relative z-0 min-h-[100dvh] overflow-hidden bg-black">
        {/* Glow Background Container */}
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          {/* Left side glow */}
          <div
            className="
              hero-glow-pulse
              absolute rounded-full
              bg-[radial-gradient(circle,rgba(90,140,255,0.3),rgba(90,140,255,0.1)_50%,transparent_90%)]
              blur-[80px]
              top-1/2 left-[-25vw] w-[85vw] h-[85vw] -translate-y-1/2
              sm:left-[-22vw] sm:w-[75vw] sm:h-[75vw]
              md:left-[-20vw] md:w-[65vw] md:h-[65vw]
              lg:left-[-16vw] lg:w-[46vw] lg:h-[46vw]
            "
          ></div>

          {/* Right side glow */}
          <div
            className="
              hero-glow-pulse
              absolute rounded-full
              bg-[radial-gradient(circle,rgba(90,140,255,0.3),rgba(90,140,255,0.1)_50%,transparent_90%)]
              blur-[100px]
              top-1/2 right-[-25vw] w-[85vw] h-[85vw] -translate-y-1/2
              sm:right-[-22vw] sm:w-[75vw] sm:h-[75vw]
              md:right-[-20vw] md:w-[65vw] md:h-[65vw]
              lg:right-[-16vw] lg:w-[46vw] lg:h-[46vw]
            "
          ></div>
        </div>

        <div className="absolute inset-x-0 top-[3vh] z-50">
          <AnimatedLine />
        </div>

        <div className="absolute inset-x-0 top-[38vh] z-40 flex flex-col items-center translate-x-[0.3vw]">
          <Title />
          <SubTitle />
        </div>

        <BlackHoleCanvas />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[20dvh] bg-gradient-to-t from-black from-[15%] via-black/45 to-transparent" />
      </section>

      <section className="relative z-[55] min-h-[38vh] bg-black pt-[10vh] pb-[12vh]">
        <div className="relative z-[70] pointer-events-none flex justify-center">
          <Stable />
        </div>
      </section>

      {/* Glitch + ARC Section */}
      <section
        className="relative w-full bg-black z-[60]"
        style={{
          paddingBottom: "clamp(620px, 55vw, 1210px)",
        }}
      >
        <div className="relative h-[120vh]">
          <Glitch />
        </div>
      </section>

      {/* ARC OS Section */}
      <section className="relative z-[70] bg-black">
        <Arc />
      </section>

      {/* Drone Section */}
      <section className="relative z-[80] bg-black">
        <Drone />
      </section>

      <DroneSubSection />

      {/* Footer - now has its own layer properties (w-full, z-50) */}
      <Footer />
    </>
  );
}

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    if (window.location.pathname === nextPath) return;

    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo(0, 0);
  };

  const isResearchPage = path === "/research";
  const isAecOsPage = path === "/aec-os";
  const isNewMeghaPage = path === "/newmegha";

  return (
    <div className={`relative w-full min-h-screen bg-black overflow-x-hidden ${isAecOsPage ? "arc-os-page" : ""}`}>
      <Navbar currentPath={path} onNavigate={navigate} />
      {isNewMeghaPage ? (
        <>
          <NewMegha />
          <Footer showReadmeBridge={false} variant="new-megha" />
        </>
      ) : isResearchPage ? (
        <>
          <ResearchPage />
          <Footer showReadmeBridge={false} variant="research" />
        </>
      ) : isAecOsPage ? (
        <>
          <ArsOs />
          <Footer showReadmeBridge={false} variant="arc-os" />
        </>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

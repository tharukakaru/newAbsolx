import { useEffect, useState } from "react";
import SubTitle from "./components/hero/SubTitle";
import Title from "./components/hero/Title";
import Navbar from "./components/Navbar";
import AnimatedLine from "./Utils/AnimatedLine";
import CoreAI from "./assets/core.svg";
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
      {/* Glow Background Container */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {/* Top-left glow */}
        <div
          className="
            absolute rounded-full
            bg-[radial-gradient(circle,rgba(77,121,234,0.24),transparent_80%)]
            blur-[80px]
            top-[-40vw] left-[-40vw] w-[120vw] h-[120vw]
            sm:top-[-30vw] sm:left-[-30vw] sm:w-[110vw] sm:h-[110vw]
            md:top-[-45vw] md:left-[-35vw] md:w-screen md:h-[100vw]
            lg:top-[6.5vw] lg:left-[-50vw] lg:w-[90vw] lg:h-[90vw]
          "
        ></div>

        {/* Top-right glow */}
        <div
          className="
            absolute rounded-full
            bg-[radial-gradient(circle,rgba(77,121,234,0.25),transparent_80%)]
            blur-[100px]
            top-[-40vw] right-[-40vw] w-[120vw] h-[120vw]
            sm:top-[-30vw] sm:right-[-30vw] sm:w-[110vw] sm:h-[110vw]
            md:top-[-25vw] md:right-[-35vw] md:w-screen md:h-[100vw]
            lg:top-[1vw] lg:right-[-60vw] lg:w-[90vw] lg:h-[90vw]
          "
        ></div>
      </div>

      <AnimatedLine />

      <div
        className="
          absolute right-2 sm:right-6 md:right-8
          top-[52vh]
          sm:top-[45vh]
          md:top-[40vh]
          lg:top-[35vh]
          xl:top-[40vh]
          2xl:top-[38vh]
          z-30 pointer-events-none
        "
      >
        <img
          src={CoreAI}
          alt="Core AI"
          className="
            h-28 sm:h-[200px] md:h-[260px] lg:h-[340px] xl:h-[420px] 2xl:h-[480px]
            w-auto opacity-60
          "
        />
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <Title />
        <SubTitle />
      </div>

      {/* BlackHole Section */}
      <div className="relative z-0 mt-12 w-full">
        <BlackHoleCanvas />
        <div className="absolute inset-x-0 top-[78vh] z-30 pointer-events-none flex justify-start pl-[4vw]">
          <Stable />
        </div>
      </div>

      {/* Glitch + ARC Section */}
      <section
        className="relative w-full bg-black z-[60]"
        style={{
          paddingBottom: "clamp(520px, 42vw, 980px)",
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


      {/* FullStack Section (optional - currently commented) */}
      {/* <section className="relative w-full bg-black z-30">
        <FullStackSection />
      </section> */}

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

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar currentPath={path} onNavigate={navigate} />
      {isResearchPage ? (
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

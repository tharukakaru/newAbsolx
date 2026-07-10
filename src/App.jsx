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
      <div className="relative bg-black overflow-hidden">
        {/* Single continuous glow layer spanning BOTH sections below — this is what removes the seam, since it's one gradient, not two separately-clipped ones */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Left side glow */}
          <div
            className="
              absolute rounded-full
              bg-[radial-gradient(circle,rgba(77,121,234,0.28),transparent_46%)]
              blur-[120px]
              top-[60%] left-0 -translate-x-1/2 -translate-y-1/2
              w-[900px] h-[1900px]
            "
          ></div>

          {/* Right side glow */}
          <div
            className="
              absolute rounded-full
              bg-[radial-gradient(circle,rgba(77,121,234,0.28),transparent_46%)]
              blur-[120px]
              top-[60%] right-0 translate-x-1/2 -translate-y-1/2
              w-[900px] h-[1900px]
            "
          ></div>
        </div>

        <section className="relative z-0 min-h-[100dvh]">
          <div className="absolute inset-x-0 top-[3vh] z-50">
            <AnimatedLine />
          </div>

          <div className="absolute inset-x-0 top-[38vh] z-40 flex flex-col items-center translate-x-[0.3vw]">
            <Title />
            <SubTitle />
          </div>

          <BlackHoleCanvas />
        </section>

        <section className="relative z-[55] mt-0 min-h-[26vh] pt-[4vh] pb-[1vh]">
          {/* Whole "WHERE IMAGINATION KNOWS NO BOUNDS." block + its divider line, centered as one group */}
          <div className="relative z-[70] pointer-events-none flex justify-center">
            <Stable />
          </div>
        </section>

        {/* Guaranteed fade to pure black right at the bottom edge of this whole
            block — sits ABOVE the glow (higher z-index), so no matter how big
            or bright the glow above is, it always gets masked smoothly to
            black before it reaches the boundary with the next section. This
            is what actually prevents the seam, regardless of glow sizing. */}
        <div className="absolute inset-x-0 bottom-0 h-[9vh] z-[30] pointer-events-none bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      {/* Glitch + ARC Section */}
      <section
        className="relative w-full bg-black z-[60]"
        style={{
          paddingBottom: "clamp(520px, 42vw, 980px)",
        }}
      >
        <div className="relative h-[92vh]">
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

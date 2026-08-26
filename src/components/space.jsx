import { useState, useEffect } from "react";
import galaxy from "../assets/galaxy.png";

const principles = [
  { num: "01", title: "Earn Trust", desc: "We live with uncompromising honesty and integrity. We avoid even the appearance of improper behavior." },
  { num: "02", title: "Be Candid", desc: "We have the courage to address challenges directly and never behind the backs of teammates. We speak up when we disagree." },
  { num: "03", title: "Delight Our Customers", desc: "We develop empathy for our customers and the circumstances they face. We earn customer trust and never take it for granted." },
  { num: "04", title: "Put The Team First", desc: "We are one team committed to the common mission. We place the success of the team ahead of our individual success." },
  { num: "05", title: "Embrace Teammates", desc: "We love and respect our teammates, trusting their good intentions even when results fall short." },
  { num: "06", title: "Demonstrate Grit", desc: "We have the passion and perseverance to meet our goals. We work tirelessly to achieve lofty objectives." },
  { num: "07", title: "Dominate", desc: "We do not seek to merely win but win so dominantly that competitors fear our capabilities. We demonstrate the courage, confidence, and capacity to pursue and achieve game-changing objectives that others regard as improbable or even impossible." },
  { num: "08", title: "Act With Kindness", desc: "We treat people with kindness and respect in our words and actions. We know that achievement of extraordinary success need not come at the expense of being a good person." },
  { num: "09", title: "Be Rigorous & Go Fast", desc: "We approach problems with a clear understanding of objectives, context, and detail. We dive deep into issues and roll up our sleeves to ensure the team succeeds." },
  { num: "10", title: "Be Enthusiastic", desc: "We make work fun because life is short, and we spend most of our lives at work. We are enthusiastic about our successes and our opportunities to solve complex problems." },
  { num: "11", title: "Be A Good Steward Of Resources", desc: "Resources are precious, so we find creative and logical ways to do more with less. We recognize that anyone can change the world with unlimited time and resources, and only great teams can do it within practical limits." },
  { num: "12", title: "Build Resilience", desc: "We keep ourselves and our teams at peak performance by carefully managing our mental, physical and spiritual health." },
];

const placeholderImages = [
  "Image Placeholder 1",
  "Image Placeholder 2",
  "Image Placeholder 3",
  "Image Placeholder 4",
  "Image Placeholder 5",
];

export default function SpacePage({ children = null }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % placeholderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06070a] text-white flex flex-col">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Side ellipses — extends into transparent footer */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 570px 900px at -140px calc(18% + 175px),
                rgba(77, 121, 234, 0.45) 0%,
                rgba(77, 121, 234, 0.45) 35%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 570px 900px at calc(100% + 140px) calc(18% + 175px),
                rgba(77, 121, 234, 0.45) 0%,
                rgba(77, 121, 234, 0.45) 35%,
                transparent 72%
              )
            `,
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 1473px 1273px at calc(100% + 680px) calc(48% + 570px),
                #5d6ef3 0%,
                #5d6ef3 38%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 1473px 1273px at -680px calc(68% + 640px),
                #f3d05d 0%,
                #f3d05d 38%,
                transparent 72%
              ),
              radial-gradient(
                ellipse 2200px 520px at 50% calc(100% + 78px),
                #5d6ef3 0%,
                #5d6ef3 35%,
                transparent 72%
              )
            `,
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Top headlines */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pt-36 md:pt-44 pb-6 md:pb-10 font-yapari-regular">
        <h2 className="text-[23px] sm:text-[25px] md:text-[35px] lg:text-[41px] font-normal text-white tracking-[0.2em] uppercase leading-tight mb-1">
          JOIN US TO BUILD THE
        </h2>
        <h2 className="text-[23px] sm:text-[25px] md:text-[35px] lg:text-[41px] font-normal text-[#d4ff00] tracking-[0.2em] uppercase leading-tight">
          FUTURE OF AI
        </h2>
        <div className="text-[21px] sm:text-[23px] md:text-[25px] font-light text-white tracking-[0.4em] uppercase mt-8 md:mt-10">
          #TEAM ABSOLX
        </div>

        <div className="absolute right-6 md:right-8 top-36 md:top-44 hidden md:flex flex-col items-center">
          <div
            className="font-yapari-regular text-xl md:text-2xl uppercase tracking-[0.35em]"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              backgroundImage: "linear-gradient(to bottom, #A8A8A8 0%, #FFFFFF 35%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            C A R E E R S
          </div>
        </div>
      </div>

      {/* Galaxy — screen blend drops the black canvas against the page bg */}
      <div className="relative z-[1] w-full flex justify-center items-center pointer-events-none mix-blend-screen -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40">
        <img
          src={galaxy}
          alt="Galaxy Background"
          className="w-[155%] max-w-[1560px] sm:w-[135%] md:w-[118%] lg:w-[108%] select-none"
          draggable={false}
        />
      </div>

      {/* Content below image */}
      <div className="relative z-10 w-full -mt-48 sm:-mt-60 md:-mt-80 lg:-mt-[28rem]">
        <div className="relative flex flex-col items-center w-full font-yapari px-4 -top-[10px]">
          <div className="flex flex-col w-full max-w-[90%] mx-auto">
            <div className="text-[7vw] md:text-[72px] lg:text-[88px] font-medium tracking-widest uppercase leading-none text-left whitespace-nowrap">
              <span className="text-[#d4ff00]">WE</span>{" "}
              <span className="text-white">ARE BUILT</span>
            </div>
            <div className="text-[7vw] md:text-[72px] lg:text-[88px] font-medium text-[#d4ff00] tracking-widest uppercase leading-none text-right whitespace-nowrap mt-2">
              DIFFERENT
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-12 md:py-16">
          <div className="relative inline-block group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="px-10 py-4 border border-[#d4ff00]/40 bg-white/12 backdrop-blur-md flex items-center justify-center gap-3 font-yapari-regular font-semibold">
              <span className="text-[#d4ff00] text-[21px] md:text-[23px] tracking-widest uppercase">OPEN </span>
              <span className="text-white text-[21px] md:text-[23px] tracking-widest uppercase">ROLES</span>
            </div>
            <div className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-white transition-all group-hover:-top-1.5 group-hover:-left-1.5"></div>
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-white transition-all group-hover:-top-1.5 group-hover:-right-1.5"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-white transition-all group-hover:-bottom-1.5 group-hover:-left-1.5"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-white transition-all group-hover:-bottom-1.5 group-hover:-right-1.5"></div>
          </div>
        </div>
      </div>

      <section className="w-full py-20 px-6 md:px-12 lg:px-24 z-10 relative">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-[0.2em] uppercase mb-12 font-yapari-regular">
            LEADERSHIP PRINCIPLES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-transparent border border-white/10">
            {principles.map((principle) => (
              <div key={principle.num} className="bg-transparent p-8 md:p-10 flex flex-col items-start transition-colors hover:bg-white/5 border border-white/10">
                <span className="text-[#666666] text-xs md:text-sm font-light mb-6 tracking-wider">
                  {principle.num}
                </span>
                <h4 className="text-xl md:text-2xl text-white font-light mb-4 tracking-wide">
                  {principle.title}
                </h4>
                <p className="font-inter text-[#BBBBBB] text-[10px] md:text-[12px] font-light leading-relaxed max-w-[26ch] md:max-w-[30ch]">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 lg:px-24 z-10 relative pb-40">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl md:text-5xl text-white font-medium tracking-[0.2em] uppercase mb-12 md:mb-16 font-yapari">
            LIFE AT ABSOL X
          </h3>
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] border border-[#d4ff00]/40 overflow-hidden bg-black/40 backdrop-blur-sm group">
            {placeholderImages.map((placeholder, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="text-gray-500 font-light tracking-widest uppercase text-xl md:text-3xl">
                  {placeholder}
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {placeholderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 transition-all duration-500 ${
                    index === activeIndex ? "w-8 bg-[#d4ff00]" : "w-6 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}

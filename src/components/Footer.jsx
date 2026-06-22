import React from "react";

// App badges
import appStore from "../assets/footer/app_store.svg";
import googlePlay from "../assets/footer/google_play.svg";
import soldierEyesVideo from "../assets/Soldier-Eyes (1).webm";
import Subpart from "./subpart";

// Social icons
import facebook from "../assets/footer/facebook.svg";
import github from "../assets/footer/github.svg";
import instagram from "../assets/footer/instagram.svg";
import linkedin from "../assets/footer/linkedin.svg";
import tiktok from "../assets/footer/tiktok.svg";
import x from "../assets/footer/x.svg";

// Fallback flag (this file EXISTS in your project already)
import sriLankaSvg from "../assets/footer/sri_lanka.svg";

/**
 * ƒo. SAFE IMAGE LOADING (Vite)
 * This avoids build errors when "another.png" doesn't exist.
 * - If you later add: src/assets/footer/another.png -> it will auto-load.
 * - If not found -> it uses sri_lanka.svg.
 */
const FLAG_IMAGES = import.meta.glob("../assets/footer/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const sriLankaPng =
  FLAG_IMAGES["../assets/footer/another.png"] ||
  FLAG_IMAGES["../assets/footer/sri_lanka.png"] ||
  FLAG_IMAGES["../assets/footer/srilanka.png"];

const sriLankaFlagSrc = sriLankaPng ?? sriLankaSvg;

/**
 * Data separated from UI = clean + maintainable.
 */
const ABOUT_LINKS = [
  { label: "FAQ", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "SUPPORT", href: "#" },
  { label: "CONTACT US", href: "#" },
];

const INFO_LINKS = [
  { label: "LEGAL NOTICE", href: "#" },
  { label: "DMCA", href: "#" },
  { label: "TERMS OF SERVICE", href: "#" },
  { label: "COOKIE POLICY", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: facebook },
  { label: "Instagram", href: "#", icon: instagram },
  { label: "X", href: "#", icon: x },
  { label: "LinkedIn", href: "#", icon: linkedin },
  { label: "TikTok", href: "#", icon: tiktok },
  { label: "GitHub", href: "#", icon: github },
];

/**
 * Link column component (About / Info)
 */
function FooterLinkGroup({ title, links, compact = false }) {
  const titleClass = compact
    ? "font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:text-[9px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.25em]"
    : "font-elios text-sm font-bold tracking-[0.28em] text-white/90";

  const listClass = compact
    ? "mt-2 space-y-1 font-elios text-[4.5px] tracking-[0.08em] text-white/58 sm:mt-3 sm:text-[7px] sm:tracking-[0.1em] md:mt-4 md:space-y-2 md:text-[9px] md:tracking-[0.12em]"
    : "mt-4 space-y-2 font-elios text-[11px] tracking-[0.14em] text-white/55";

  return (
    <nav aria-label={title}>
      <h3 className={titleClass}>{title}</h3>

      <ul className={listClass}>
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition-colors hover:text-white focus:outline-none focus-visible:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Bracket-corner button (matches reference style)
 */
function BracketButton({
  href = "#",
  variant = "slate",
  children,
  compact = false,
  className = "",
}) {
  const variantBg =
    variant === "maroon"
      ? "bg-gradient-to-br from-[#4a1b2a]/85 to-[#16050b]/85"
      : "bg-gradient-to-br from-[#3b4356]/70 to-[#1b2233]/85";
  const sizeClass = compact
    ? "h-6 px-2 text-[4.5px] tracking-[0.1em] sm:h-8 sm:px-4 sm:text-[7px] sm:tracking-[0.18em] md:h-9 md:px-6 md:text-[9px] md:tracking-[0.22em]"
    : "h-11 px-7 text-[11px] tracking-[0.26em]";
  const cornerSize = compact
    ? "h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"
    : "h-3 w-3";

  return (
    <a
      href={href}
      className={[
        "group relative inline-flex items-center justify-center",
        "font-elios uppercase text-white/85 whitespace-nowrap",
        "border border-white/25 backdrop-blur-sm",
        "transition-all duration-200",
        "hover:border-white/40 hover:text-white hover:shadow-[0_0_20px_rgba(140,170,255,0.10)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        sizeClass,
        variantBg,
        className,
      ].join(" ")}
    >
      {/* Corner brackets (thin like the screenshot) */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -left-[2px] -top-[2px] ${cornerSize} border-l border-t border-white/80`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-[2px] -top-[2px] ${cornerSize} border-r border-t border-white/80`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -left-[2px] -bottom-[2px] ${cornerSize} border-b border-l border-white/80`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-[2px] -bottom-[2px] ${cornerSize} border-b border-r border-white/80`}
      />

      {/* Inner subtle border */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[3px] border border-white/10"
      />

      <span className="relative z-10">{children}</span>
    </a>
  );
}

export default function Footer({ showReadmeBridge = true, variant = "default" }) {
  const isResearchFooter = variant === "research";

  /**
   * Title tone: white + light-blue mix (NOT pure white)
   */
  const titleTone =
    "bg-gradient-to-b from-white via-[#B9C9FF] to-white/75 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(150,180,255,0.18)]";

  return (
    <footer
      className={[
        "relative overflow-hidden bg-black text-white font-elios z-50",
        isResearchFooter
          ? "min-h-[590px] sm:min-h-[680px] md:min-h-[740px] lg:min-h-[760px]"
          : "",
      ].join(" ")}
    >
      <style>{`
        .footer-animated-line {
          background:
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.82) 5%, rgba(255,255,255,0.82) 95%, transparent 100%),
            linear-gradient(90deg, transparent 0%, rgba(255,255,210,0.08) 18%, rgba(255,255,180,0.24) 38%, rgba(255,255,255,0.92) 50%, rgba(255,255,150,0.24) 62%, rgba(255,255,120,0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 30% 100%;
          background-position: 0 0, -34% 0;
          filter: drop-shadow(0 0 4px rgba(255,255,160,0.18));
          will-change: background-position;
          animation: footerLineRunX 4.4s linear infinite;
        }

        @keyframes footerLineRunX {
          0% {
            background-position: 0 0, -34% 0;
          }
          100% {
            background-position: 0 0, 134% 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-animated-line {
            animation: none;
          }
        }
      `}</style>

      {isResearchFooter ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_#000_0%,_#000_11%,_rgba(2,3,8,0.94)_28%,_rgba(9,10,18,0.88)_58%,_rgba(20,31,86,0.98)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[24%] top-[12%] h-[76%] w-[70%] bg-[radial-gradient(ellipse_at_center,_rgba(243,208,93,0.64)_0%,_rgba(243,208,93,0.3)_34%,_rgba(243,208,93,0)_72%)] blur-[18px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[24%] top-[12%] h-[78%] w-[72%] bg-[radial-gradient(ellipse_at_center,_rgba(93,110,243,0.68)_0%,_rgba(93,110,243,0.32)_36%,_rgba(93,110,243,0)_74%)] blur-[18px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_52%,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_28%),radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.86)_100%)]"
          />
          <video
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 bottom-[-18px] z-[4] w-[min(112vw,700px)] max-w-none -translate-x-1/2 object-contain opacity-[0.96] saturate-[1.08] contrast-[1.04] sm:bottom-[-34px] sm:w-[min(74vw,640px)] md:bottom-[-46px] md:w-[min(52vw,620px)]"
            src={soldierEyesVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[44%] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(27,42,116,0.34)_48%,_rgba(37,65,171,0.52)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[6] h-36 bg-gradient-to-b from-black via-black/85 to-transparent sm:h-44"
          />
        </>
      ) : (
        <>
          {/* ======================================================
             BACKGROUND LAYERS
             Goal: blend into black page without that blue band edge.
             - Keep top area pure black for a while
             - Push glows lower (no glow touching the top edge)
          ======================================================= */}

          {/* Base gradient: black stays at top, then fades into navy/blue */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,1)_22%,_rgba(7,11,24,1)_55%,_rgba(30,59,150,1)_100%)]"
          />

          {/* Lower glow (kept low so it doesn't create top band) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_82%,_rgba(120,150,255,0.28)_0%,_rgba(10,14,28,0)_68%)]"
          />

          {/* Vignette to darken edges like the reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_45%,_rgba(0,0,0,0.88)_100%)]"
          />

          {/* Strong top mask (band remover) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-black via-black to-transparent"
          />
        </>
      )}

      {showReadmeBridge ? <Subpart /> : null}

      {/* ======================================================
         CONTENT
      ======================================================= */}
      <div
        className={
          isResearchFooter
            ? "relative z-10 mx-auto max-w-[1500px] px-7 pt-[clamp(300px,39vw,410px)] pb-8 sm:px-12 md:px-20 md:pt-[360px] lg:px-24 lg:pt-[365px]"
            : "relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-10 sm:px-10"
        }
      >
        <section className="w-full">
          <div
            className={
              isResearchFooter
                ? "mx-auto max-w-[1500px] [--gap:20px] sm:[--gap:34px] md:[--gap:48px]"
                : "mx-auto max-w-[1500px] px-6 sm:px-10 [--gap:48px]"
            }
          >
            {/* Top row: Left | Center | Right */}
            <div
              className={
                isResearchFooter
                  ? "pt-7 pb-[var(--gap)] md:pt-9"
                  : "pb-[var(--gap)]"
              }
            >
              <div
                className={
                  isResearchFooter
                    ? "grid grid-cols-[0.75fr_1.15fr_0.78fr] items-start gap-2 sm:gap-6 md:gap-10"
                    : "grid gap-10 md:grid-cols-3 md:items-start"
                }
              >
                {/* Left columns */}
                <div
                  className={
                    isResearchFooter
                      ? "grid grid-cols-2 gap-3 sm:gap-8 md:gap-14"
                      : "grid grid-cols-2 gap-10 sm:gap-14"
                  }
                >
                  <FooterLinkGroup
                    title="ABOUT"
                    links={ABOUT_LINKS}
                    compact={isResearchFooter}
                  />
                  <FooterLinkGroup
                    title="INFO"
                    links={INFO_LINKS}
                    compact={isResearchFooter}
                  />
                </div>

                {/* Center: buttons + tagline + flag */}
                <div
                  className={
                    isResearchFooter
                      ? "flex flex-col items-center"
                      : "flex flex-col items-center md:pt-1"
                  }
                >
                  <div
                    className={
                      isResearchFooter
                        ? "flex w-full items-center justify-center gap-0 font-elios"
                        : "flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-0 font-elios"
                    }
                  >
                    <BracketButton
                      href="#"
                      variant="maroon"
                      compact={isResearchFooter}
                      className={
                        isResearchFooter
                          ? "w-[64px] sm:w-[120px] md:w-[158px]"
                          : "w-full max-w-[260px] sm:w-[190px] sm:max-w-none "
                      }
                    >
                      CONTACT US
                    </BracketButton>

                    {/* Thin connector line */}
                    <div
                      aria-hidden="true"
                      className={
                        isResearchFooter
                          ? "h-px w-3 bg-white/45 sm:w-7 md:w-10"
                          : "hidden h-px w-12 bg-white/45 sm:block"
                      }
                    />

                    <BracketButton
                      href="#"
                      variant="slate"
                      compact={isResearchFooter}
                      className={
                        isResearchFooter
                          ? "w-[68px] sm:w-[134px] md:w-[184px]"
                          : "w-full max-w-[260px] sm:w-[220px] sm:max-w-none"
                      }
                    >
                      OPEN ROLES
                    </BracketButton>
                  </div>

                  <p
                    className={
                      isResearchFooter
                        ? "mt-4 text-center font-elios text-[4.5px] tracking-[0.16em] text-white/55 whitespace-nowrap sm:mt-6 sm:text-[7px] sm:tracking-[0.22em] md:mt-8 md:text-[8px] md:tracking-[0.28em]"
                        : "mt-10 text-center font-elios text-[9px] tracking-[0.32em] text-white/55 whitespace-nowrap sm:text-[10px]"
                    }
                  >
                    THE LION&apos;S ROAR - HEARD BY THE WORLD
                  </p>

                  {/* Flag: object-contain prevents cropping for PNG */}
                  <div
                    className={
                      isResearchFooter
                        ? "mt-2 inline-flex items-center justify-center rounded-md px-1 py-0.5 sm:mt-3 sm:px-2 sm:py-1 md:mt-4"
                        : "mt-6 inline-flex items-center justify-center rounded-md px-2 py-1 "
                    }
                  >
                    <img
                      src={sriLankaFlagSrc}
                      alt="Sri Lanka"
                      className={
                        isResearchFooter
                          ? "h-3 w-5 object-contain sm:h-4 sm:w-7 md:h-5 md:w-8"
                          : "h-6 w-10 object-contain"
                      }
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right: App + Social */}
                <div className={isResearchFooter ? "justify-self-end" : "md:justify-self-end"}>
                  <h3
                    className={
                      isResearchFooter
                        ? "font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:text-[9px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.25em]"
                        : "font-elios text-sm font-bold tracking-[0.28em] text-white/90"
                    }
                  >
                    GET THE APP
                  </h3>

                  <div
                    className={
                      isResearchFooter
                        ? "mt-2 flex items-center gap-1 sm:mt-3 sm:gap-2 md:mt-3 md:gap-3"
                        : "mt-4 flex items-center gap-3"
                    }
                  >
                    <a
                      href="#"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <img
                        src={googlePlay}
                        alt="Get it on Google Play"
                        className={isResearchFooter ? "h-3 sm:h-5 md:h-7" : "h-9"}
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="#"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <img
                        src={appStore}
                        alt="Download on the App Store"
                        className={isResearchFooter ? "h-3 sm:h-5 md:h-7" : "h-9"}
                        loading="lazy"
                      />
                    </a>
                  </div>

                  <h3
                    className={
                      isResearchFooter
                        ? "mt-3 font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:mt-5 sm:text-[9px] sm:tracking-[0.22em] md:mt-6 md:text-[11px] md:tracking-[0.25em]"
                        : "mt-7 font-elios text-sm font-bold tracking-[0.28em] text-white/90"
                    }
                  >
                    STAY TUNED
                  </h3>

                  <div
                    className={
                      isResearchFooter
                        ? "mt-2 flex items-center gap-1.5 sm:mt-3 sm:gap-3 md:mt-3 md:gap-4"
                        : "mt-4 flex items-center gap-4"
                    }
                  >
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="opacity-90 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      >
                        <img
                          src={s.icon}
                          alt=""
                          className={
                            isResearchFooter
                              ? "h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
                              : "h-5 w-5"
                          }
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WHITE LINE */}
            {/* WHITE LINE - extends beyond container padding */}
            {/* WHITE LINE - extends beyond container padding */}
            {/* WHITE LINE - responsive across all devices */}
            <div
              aria-hidden="true"
              className={
                isResearchFooter
                  ? "footer-animated-line mx-auto h-px w-[82%] max-w-[1180px] shadow-[0_0_1px_rgba(255,255,255,0.45)] sm:w-[80%] md:w-[78%]"
                  : "footer-animated-line h-px -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-20 xl:-mx-24 shadow-[0_0_1px_rgba(255,255,255,0.45)]"
              }
            />

            {/* Big title: equal gap around the divider */}
            <div
              className={
                isResearchFooter
                  ? "pt-[calc(var(--gap)+18px)] text-center"
                  : "pt-[var(--gap)] text-center"
              }
            >
              <div className="mx-auto max-w-6xl px-4">
                {isResearchFooter ? (
                  <div className="flex items-center justify-center gap-[clamp(8px,2.5vw,52px)] whitespace-nowrap">
                    {["ABSOL", "X", "CORE", "AI"].map((word) => (
                      <span
                        key={word}
                        className={[
                          "font-elios uppercase leading-none",
                          "text-[clamp(1.25rem,7vw,5.9rem)]",
                          "tracking-[0.08em] sm:tracking-[0.13em]",
                          titleTone,
                        ].join(" ")}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                ) : (
                  /* Desktop: 4 columns (balanced like screenshot, not extreme justify-between) */
                  <div className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-6 sm:grid-cols-4 sm:gap-x-10 md:gap-x-14">
                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        "text-[clamp(2.3rem,6.1vw,5.9rem)]",
                        "tracking-[0.15em]",
                        titleTone,
                      ].join(" ")}
                    >
                      ABSOL
                    </span>

                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        "text-[clamp(2.3rem,6.1vw,5.9rem)]",
                        "tracking-[0.15em]",
                        titleTone,
                      ].join(" ")}
                    >
                      X
                    </span>

                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        "text-[clamp(2.3rem,6.1vw,5.9rem)]",
                        "tracking-[0.15em]",
                        titleTone,
                      ].join(" ")}
                    >
                      CORE
                    </span>

                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        "text-[clamp(2.3rem,6.1vw,5.9rem)]",
                        "tracking-[0.15em]",
                        titleTone,
                      ].join(" ")}
                    >
                      AI
                    </span>
                  </div>
                )}
              </div>

              <p
                className={
                  isResearchFooter
                    ? "mt-3 font-elios text-[5px] tracking-[0.16em] text-white/45 sm:text-[8px] sm:tracking-[0.24em] md:mt-4 md:text-[10px] md:tracking-[0.28em]"
                    : "mt-4 font-elios text-[10px] tracking-[0.28em] text-white/45"
                }
              >
                Ac 2026 ABSOL X CORE AI. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

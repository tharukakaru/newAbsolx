import React from "react";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import footerSentinel from "../assets/065b4a00de40127609484cfbd9569fa6 1.png";

// App badges
import appStore from "../assets/footer/app_store.svg";
import googlePlay from "../assets/footer/google_play.svg";
import Subpart from "./subpart";

// Social icons
import facebook from "../assets/footer/facebook.svg";
import github from "../assets/footer/github.svg";
import instagram from "../assets/footer/instagram.svg";
import linkedin from "../assets/footer/linkedin.svg";
import tiktok from "../assets/footer/tiktok.svg";
import x from "../assets/footer/x.svg";

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

function FooterLinkGroup({ title, links, compact = false }) {
  const titleClass = compact
    ? "font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:text-[9px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.25em]"
    : "font-elios text-sm font-bold tracking-[0.28em] text-white/90";

  const listClass = compact
    ? "mt-2 space-y-1 font-elios text-[4.5px] tracking-[0.08em] text-white/70 sm:mt-3 sm:text-[7px] sm:tracking-[0.1em] md:mt-4 md:space-y-2 md:text-[9px] md:tracking-[0.12em]"
    : "mt-4 space-y-2 font-elios text-[11px] tracking-[0.14em] text-white/70";

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

function BracketButton({
  href = "#",
  variant = "slate",
  children,
  compact = false,
  className = "",
}) {
  const variantBg =
    variant === "maroon"
      ? "bg-gradient-to-br from-[#421523]/50 to-[#120408]/85"
      : "bg-gradient-to-br from-[#2a3244]/75 to-[#131825]/85";
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
        "border border-white/22 backdrop-blur-sm",
        "transition-all duration-200",
        "hover:border-white/40 hover:text-white hover:shadow-[0_0_20px_rgba(80,120,220,0.18)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        sizeClass,
        variantBg,
        className,
      ].join(" ")}
    >
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
  const isArcOsFooter = variant === "arc-os";
  const isCompactFooter = isResearchFooter || isArcOsFooter;

  // Solid white text with subtle blue ambient drop-shadow
  const titleTone = "text-white drop-shadow-[0_0_22px_rgba(60,110,210,0.3)]";

  return (
    <footer
      className={[
        "relative overflow-hidden text-white font-elios z-50 bg-black w-full",
        isArcOsFooter ? "arc-os-footer bg-transparent" : "",
        !isResearchFooter && !isArcOsFooter ? "home-footer" : "",
        isResearchFooter
          ? "research-footer min-h-[400px] sm:min-h-[460px] md:min-h-[500px]"
          : isArcOsFooter
            ? "min-h-[330px] sm:min-h-[390px] md:min-h-[430px]"
            : "",
      ].join(" ")}
    >
      <style>{`
        @font-face {
          font-family: "Plus Jakarta Sans";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
        }

        .home-footer {
          position: relative;
          width: 100%;
          min-height: clamp(600px, 55vw, 950px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .home-footer-figure-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          overflow: hidden;
        }

        .home-footer-figure-img {
          position: absolute;
          left: 50%;
          bottom: -10vw;
          width: 105vw;
          max-width: none;
          height: auto;
          min-height: 90%;
          transform: translateX(-50%);
          object-fit: cover;
          object-position: top center;
        }

        .home-footer-figure-tint {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient( ellipse 75% 55% at 50% 65%, rgba(20, 50, 145, 0.45) 0%, rgba(8, 20, 55, 0.68) 75%, rgba(0, 0, 0, 0.9) 100% ),
            linear-gradient( 180deg, rgba(0,0,0,0.88) 0%, rgba(12, 28, 80, 0.38) 45%, rgba(5, 12, 38, 0.75) 100% );
          mix-blend-mode: screen;
        }

        .home-side-glow {
          position: absolute;
          pointer-events: none;
          width: 45vw;
          height: 30vw;
          border-radius: 100%;
          filter: blur(100px);
          opacity: 0.48;
        }

        .home-side-glow--gold {
          left: -12vw;
          top: 40%;
          background: #d4ae48;
        }

        .home-side-glow--blue {
          right: -12vw;
          top: 40%;
          background: #2e52d4;
        }

        .home-footer-content {
          position: relative;
          z-index: 20;
          width: 100%;
        }

        .research-footer-hashtag {
          margin: clamp(18px, 2.4vw, 32px) 0 clamp(58px, 6vw, 88px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 0.9vw, 16px);
          line-height: 1;
          font-weight: 300;
          letter-spacing: 0.02em;
          text-align: center;
          text-transform: uppercase;
          color: rgba(255,255,255,0.88);
        }

        .footer-animated-line {
          background:
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.72) 5%, rgba(255,255,255,0.72) 95%, transparent 100%),
            linear-gradient(90deg, transparent 0%, rgba(160,190,255,0.06) 18%, rgba(140,170,255,0.2) 38%, rgba(255,255,255,0.85) 50%, rgba(140,170,255,0.2) 62%, rgba(160,190,255,0.06) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 30% 100%;
          background-position: 0 0, -34% 0;
          filter: drop-shadow(0 0 4px rgba(100,140,240,0.22));
          will-change: background-position;
          animation: footerLineRunX 4.4s linear infinite;
        }

        @keyframes footerLineRunX {
          0% { background-position: 0 0, -34% 0; }
          100% { background-position: 0 0, 134% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-animated-line { animation: none; }
        }
      `}</style>

      {!isResearchFooter && !isArcOsFooter ? (
        <div className="home-footer-figure-wrap" aria-hidden="true">
          <img
            src={footerSentinel}
            alt=""
            className="home-footer-figure-img"
            loading="lazy"
          />
          <div className="home-footer-figure-tint" />
          <div className="home-side-glow home-side-glow--gold" />
          <div className="home-side-glow home-side-glow--blue" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent" />
        </div>
      ) : null}

      {showReadmeBridge ? <Subpart /> : null}

      <div
        className={
          isCompactFooter
            ? "relative z-10 mx-auto max-w-[1500px] px-7 pt-8 pb-8 sm:px-12 sm:pt-10 md:px-20 md:pt-12 lg:px-24"
            : "home-footer-content mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-10"
        }
      >
        {isResearchFooter ? (
          <p className="research-footer-hashtag">#AGENTIC WARFARE</p>
        ) : null}

        <section className="w-full">
          <div
            className={
              isCompactFooter
                ? "mx-auto max-w-[1500px] [--gap:20px] sm:[--gap:34px] md:[--gap:48px]"
                : "mx-auto max-w-[1500px] [--gap:48px]"
            }
          >
            <div
              className={
                isCompactFooter
                  ? "pt-7 pb-[var(--gap)] md:pt-9"
                  : "pb-[var(--gap)]"
              }
            >
              <div
                className={
                  isCompactFooter
                    ? "grid grid-cols-[0.75fr_1.15fr_0.78fr] items-start gap-2 sm:gap-6 md:gap-10"
                    : "grid gap-10 md:grid-cols-3 md:items-start"
                }
              >
                <div
                  className={
                    isCompactFooter
                      ? "grid grid-cols-2 gap-3 sm:gap-8 md:gap-14"
                      : "grid grid-cols-2 gap-10 sm:gap-14"
                  }
                >
                  <FooterLinkGroup
                    title="ABOUT"
                    links={ABOUT_LINKS}
                    compact={isCompactFooter}
                  />
                  <FooterLinkGroup
                    title="INFO"
                    links={INFO_LINKS}
                    compact={isCompactFooter}
                  />
                </div>

                <div
                  className={
                    isCompactFooter
                      ? "flex flex-col items-center"
                      : "flex flex-col items-center md:pt-1"
                  }
                >
                  <div
                    className={
                      isCompactFooter
                        ? "flex w-full items-center justify-center gap-0 font-elios"
                        : "flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-0 font-elios"
                    }
                  >
                    <BracketButton
                      href="#"
                      variant="maroon"
                      compact={isCompactFooter}
                      className={
                        isCompactFooter
                          ? "w-[64px] sm:w-[120px] md:w-[158px]"
                          : "w-full max-w-[260px] sm:w-[190px] sm:max-w-none"
                      }
                    >
                      CONTACT US
                    </BracketButton>

                    <div
                      aria-hidden="true"
                      className={
                        isCompactFooter
                          ? "h-px w-3 bg-white/45 sm:w-7 md:w-10"
                          : "hidden h-px w-12 bg-white/45 sm:block"
                      }
                    />

                    <BracketButton
                      href="#"
                      variant="slate"
                      compact={isCompactFooter}
                      className={
                        isCompactFooter
                          ? "w-[68px] sm:w-[134px] md:w-[184px]"
                          : "w-full max-w-[260px] sm:w-[220px] sm:max-w-none"
                      }
                    >
                      OPEN ROLES
                    </BracketButton>
                  </div>

                  <p
                    className={
                      isCompactFooter
                        ? "mt-4 text-center font-elios text-[4.5px] tracking-[0.16em] text-white whitespace-nowrap sm:mt-6 sm:text-[7px] sm:tracking-[0.22em] md:mt-8 md:text-[8px] md:tracking-[0.28em]"
                        : "mt-8 text-center font-elios text-[9px] tracking-[0.32em] text-white whitespace-nowrap sm:text-[10px]"
                    }
                  >
                    THE LION'S ROAR - HEARD BY THE WORLD
                  </p>
                </div>

                <div className={isCompactFooter ? "justify-self-end" : "md:justify-self-end"}>
                  <h3
                    className={
                      isCompactFooter
                        ? "font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:text-[9px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.25em]"
                        : "font-elios text-sm font-bold tracking-[0.28em] text-white/90"
                    }
                  >
                    GET THE APP
                  </h3>

                  <div
                    className={
                      isCompactFooter
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
                        className={isCompactFooter ? "h-2.5 sm:h-4 md:h-5.5" : "h-7"}
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
                        className={isCompactFooter ? "h-2.5 sm:h-4 md:h-5.5" : "h-7"}
                        loading="lazy"
                      />
                    </a>
                  </div>

                  <h3
                    className={
                      isCompactFooter
                        ? "mt-3 font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:mt-5 sm:text-[9px] sm:tracking-[0.22em] md:mt-6 md:text-[11px] md:tracking-[0.25em]"
                        : "mt-7 font-elios text-sm font-bold tracking-[0.28em] text-white/90"
                    }
                  >
                    STAY TUNED
                  </h3>

                  <div
                    className={
                      isCompactFooter
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
                            isCompactFooter
                              ? "h-2 w-2 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5"
                              : "h-4 w-4"
                          }
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className={
                isCompactFooter
                  ? "footer-animated-line mx-auto h-px w-[82%] max-w-[1180px] shadow-[0_0_1px_rgba(255,255,255,0.45)] sm:w-[80%] md:w-[78%]"
                  : "footer-animated-line h-px w-full shadow-[0_0_1px_rgba(255,255,255,0.45)]"
              }
            />

            <div
              className={
                isCompactFooter
                  ? "pt-[calc(var(--gap)+18px)] text-center"
                  : "pt-[var(--gap)] text-center"
              }
            >
              <div className="mx-auto max-w-6xl px-4">
                {isCompactFooter ? (
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
                  <div className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-6 sm:grid-cols-4 sm:gap-x-10 md:gap-x-14">
                    {["ABSOL", "X", "CORE", "AI"].map((word) => (
                      <span
                        key={word}
                        className={[
                          "font-elios uppercase leading-none",
                          "text-[clamp(2.3rem,6.1vw,5.9rem)]",
                          "tracking-[0.15em]",
                          titleTone,
                        ].join(" ")}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p
                className={
                  isCompactFooter
                    ? "mt-3 font-elios text-[5px] tracking-[0.16em] text-white sm:text-[8px] sm:tracking-[0.24em] md:mt-4 md:text-[10px] md:tracking-[0.28em]"
                    : "mt-4 font-elios text-[10px] tracking-[0.28em] text-white"
                }
              >
                © 2026 ABSOL X CORE AI. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
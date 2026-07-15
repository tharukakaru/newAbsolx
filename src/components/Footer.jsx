import React from "react";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import footerSentinel from "../assets/065b4a00de40127609484cfbd9569fa6 1.webp";

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
  const isArcOsFooter = variant === "arc-os";
  const isCompactFooter = isResearchFooter || isArcOsFooter;

  /**
   * Title tone: white + light-blue mix (NOT pure white)
   */
  const titleTone =
    "bg-gradient-to-b from-white via-[#B9C9FF] to-white/75 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(150,180,255,0.18)]";

  return (
    <footer
      className={[
        "relative overflow-hidden text-white font-elios z-50",
        isArcOsFooter ? "arc-os-footer bg-transparent" : "bg-black",
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

        .research-footer {
          background: #000;
        }

        .arc-os-footer {
          margin-top: clamp(-140px, -8vw, -96px);
          padding-top: clamp(176px, 14vw, 230px);
          background: transparent;
        }

        .arc-os-footer-shader {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(52% 34% at 100% 0%, rgba(43, 37, 16, 0.78), rgba(43, 37, 16, 0.28) 48%, transparent 78%),
            radial-gradient(58% 36% at 0% 0%, rgba(33, 40, 92, 0.64), rgba(33, 40, 92, 0.2) 48%, transparent 76%),
            linear-gradient(180deg, #000 0%, #090b1b 22%, #1f275d 67%, #3b459a 100%);
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.18) 6%,
            rgba(0,0,0,0.45) 11%,
            rgba(0,0,0,0.72) 15%,
            #000 19%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.18) 6%,
            rgba(0,0,0,0.45) 11%,
            rgba(0,0,0,0.72) 15%,
            #000 19%
          );
          pointer-events: none;
        }

        .home-footer {
          min-height: clamp(1180px, 96vw, 1845px);
        }

        .home-footer-figure {
          position: absolute;
          z-index: 8;
          left: 50%;
          bottom: 0;
          width: min(82.4vw, 1582px);
          height: min(96vw, 1845px);
          aspect-ratio: 391 / 456;
          object-fit: fill;
          pointer-events: none;
          user-select: none;
          transform: translateX(-50%);
          filter:
            drop-shadow(-28px 24px 50px rgba(89, 76, 34, 0.18))
            drop-shadow(28px 24px 54px rgba(45, 52, 116, 0.24));
        }

        .home-footer-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: clamp(24px, 2.6vw, 50px);
        }

        /* Stage 4 — closing statement + footer (colo6). One broad gold
           source lower-left, one broad blue source lower-right; solid
           centres stay outside the page, only blurred falloff enters. */
        .research-footer-glow {
          position: absolute;
          border-radius: 2423px;
          filter: blur(var(--megha-atmosphere-blur, 283.75px));
          pointer-events: none;
          transform: translateY(-50%) translate3d(0, 0, 0);
        }

        .research-footer-glow--gold {
          left: -45%;
          top: 57%;
          width: clamp(54rem, 80vw, 86rem);
          height: clamp(58rem, 86vw, 92rem);
          background: #F3D05D;
          opacity: 0.52;
        }

        .research-footer-glow--blue {
          right: -47%;
          top: 54%;
          width: clamp(56rem, 82vw, 88rem);
          height: clamp(60rem, 88vw, 94rem);
          background: #5D6EF3;
          opacity: 0.64;
        }

        @media (max-width: 48rem) {
          .research-footer-glow {
            width: clamp(28rem, 140vw, 42rem);
            height: clamp(34rem, 160vw, 48rem);
          }

          .research-footer-glow--gold {
            left: -95%;
            opacity: 0.44;
          }

          .research-footer-glow--blue {
            right: -98%;
            opacity: 0.54;
          }
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

        @media (max-width: 900px) {
          .home-footer {
            min-height: 0;
          }

          .home-footer-figure {
            width: min(76vw, 640px);
            height: auto;
            aspect-ratio: auto;
            object-fit: contain;
          }

          .home-footer-content {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
          }
        }
      `}</style>

      {isResearchFooter ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,_#000_0%,_#000_22%,_rgba(0,0,0,0.98)_40%,_rgba(3,4,10,0.94)_64%,_rgba(24,39,106,0.86)_100%)]"
          />
          <div
            aria-hidden="true"
            className="research-footer-glow research-footer-glow--gold"
          />
          <div
            aria-hidden="true"
            className="research-footer-glow research-footer-glow--blue"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_16%,_rgba(0,0,0,0.94)_0%,_rgba(0,0,0,0.82)_34%,_rgba(0,0,0,0)_68%),radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_46%,_rgba(0,0,0,0.68)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[6] h-36 bg-gradient-to-b from-black via-black/85 to-transparent sm:h-44"
          />
        </>
      ) : isArcOsFooter ? (
        <>
          <div aria-hidden="true" className="arc-os-footer-shader" />
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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_68%,_rgba(89,76,34,0.6)_0%,_rgba(89,76,34,0.2)_34%,_rgba(89,76,34,0)_66%),radial-gradient(ellipse_at_86%_70%,_rgba(45,52,116,0.7)_0%,_rgba(45,52,116,0.24)_38%,_rgba(45,52,116,0)_70%),linear-gradient(180deg,_#000_0%,_#000_18%,_#08080d_52%,_#171c43_100%)]"
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

      {!isResearchFooter && !isArcOsFooter ? (
        <img
          src={footerSentinel}
          alt=""
          aria-hidden="true"
          className="home-footer-figure"
          loading="lazy"
        />
      ) : null}

      {showReadmeBridge ? <Subpart /> : null}

      {/* ======================================================
         CONTENT
      ======================================================= */}
      <div
        className={
          isCompactFooter
            ? "relative z-10 mx-auto max-w-[1500px] px-7 pt-8 pb-8 sm:px-12 sm:pt-10 md:px-20 md:pt-12 lg:px-24"
            : "home-footer-content relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-10 sm:px-10"
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
                : "mx-auto max-w-[1500px] px-6 sm:px-10 [--gap:48px]"
            }
          >
            {/* Top row: Left | Center | Right */}
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
                {/* Left columns */}
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

                {/* Center: buttons + tagline + flag */}
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
                          : "w-full max-w-[260px] sm:w-[190px] sm:max-w-none "
                      }
                    >
                      CONTACT US
                    </BracketButton>

                    {/* Thin connector line */}
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
                        ? "mt-4 text-center font-elios text-[4.5px] tracking-[0.16em] text-white/55 whitespace-nowrap sm:mt-6 sm:text-[7px] sm:tracking-[0.22em] md:mt-8 md:text-[8px] md:tracking-[0.28em]"
                        : "mt-10 text-center font-elios text-[9px] tracking-[0.32em] text-white/55 whitespace-nowrap sm:text-[10px]"
                    }
                  >
                    THE LION&apos;S ROAR - HEARD BY THE WORLD
                  </p>

                  {/* Flag: object-contain prevents cropping for PNG */}
                  <div
                    className={
                      isCompactFooter
                        ? "mt-2 inline-flex items-center justify-center rounded-md px-1 py-0.5 sm:mt-3 sm:px-2 sm:py-1 md:mt-4"
                        : "mt-6 inline-flex items-center justify-center rounded-md px-2 py-1 "
                    }
                  >
                    <img
                      src={sriLankaFlagSrc}
                      alt="Sri Lanka"
                      className={
                        isCompactFooter
                          ? "h-3 w-5 object-contain sm:h-4 sm:w-7 md:h-5 md:w-8"
                          : "h-6 w-10 object-contain"
                      }
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right: App + Social */}
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
                        className={isCompactFooter ? "h-3 sm:h-5 md:h-7" : "h-9"}
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
                        className={isCompactFooter ? "h-3 sm:h-5 md:h-7" : "h-9"}
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
                isCompactFooter
                  ? "footer-animated-line mx-auto h-px w-[82%] max-w-[1180px] shadow-[0_0_1px_rgba(255,255,255,0.45)] sm:w-[80%] md:w-[78%]"
                  : "footer-animated-line h-px -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-20 xl:-mx-24 shadow-[0_0_1px_rgba(255,255,255,0.45)]"
              }
            />

            {/* Big title: equal gap around the divider */}
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
                  isCompactFooter
                    ? "mt-3 font-elios text-[5px] tracking-[0.16em] text-white/45 sm:text-[8px] sm:tracking-[0.24em] md:mt-4 md:text-[10px] md:tracking-[0.28em]"
                    : "mt-4 font-elios text-[10px] tracking-[0.28em] text-white/45"
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

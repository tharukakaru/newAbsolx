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
  const isSectionTitle = title === "ABOUT" || title === "INFO";

  const titleClass = isSectionTitle
    ? compact
      ? "text-[13px] font-extrabold tracking-[0.06em] text-white sm:text-[16px] sm:tracking-[0.08em] md:text-[18px] md:tracking-[0.1em]"
      : "text-[21px] font-extrabold tracking-[0.12em] text-white"
    : compact
      ? "font-elios text-[6px] font-bold tracking-[0.18em] text-white/90 sm:text-[9px] sm:tracking-[0.22em] md:text-[11px] md:tracking-[0.25em]"
      : "font-elios text-sm font-bold tracking-[0.28em] text-white/90";

  const listClass = compact
    ? "mt-2 space-y-0.5 sm:mt-2.5 sm:space-y-1 md:mt-3 md:space-y-1"
    : "mt-4 space-y-1";

  const linkClass = compact
    ? "font-elios text-[7.5px] font-light tracking-[0.08em] text-white/55 transition-colors hover:text-white focus:outline-none focus-visible:text-white sm:text-[10px] sm:tracking-[0.1em] md:text-[12px] md:tracking-[0.12em]"
    : "font-elios text-[14px] font-light tracking-[0.14em] text-white/55 transition-colors hover:text-white focus:outline-none focus-visible:text-white";

  return (
    <nav aria-label={title}>
      <h3
        className={titleClass}
        style={
          isSectionTitle
            ? {
                fontFamily: '"Helvetica Now Display", Helvetica, Arial, sans-serif',
                fontWeight: 700,
                WebkitTextStroke: "0.4px #fff",
              }
            : undefined
        }
      >
        {title}
      </h3>

      <ul className={listClass}>
        {links.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={linkClass}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Bracket-corner button (matches space.jsx Open Roles animation)
 */
function BracketButton({
  href = "#",
  variant = "slate",
  children,
  compact = false,
  className = "",
}) {
  const bgClass =
    variant === "maroon" ? "bg-[#FF1E00]/12" : "bg-[#FFFFFF]/12";

  const sizeClass = compact
    ? "h-[38px] px-3 text-[9px] tracking-[0.1em] sm:h-[46px] sm:px-5 sm:text-[12px] sm:tracking-[0.16em] md:h-[54px] md:px-7 md:text-[15px] md:tracking-[0.2em]"
    : "h-[54px] px-8 text-[16px] tracking-[0.26em]";
  const cornerSize = compact
    ? "w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5"
    : "w-3.5 h-3.5";

  return (
    <a
      href={href}
      className={[
        "group relative inline-flex cursor-pointer",
        "hover:scale-105 transition-transform duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex w-full items-center justify-center",
          "font-elios uppercase text-white whitespace-nowrap",
          "border border-white/40 backdrop-blur-md",
          bgClass,
          sizeClass,
        ].join(" ")}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-0.5 -left-0.5 ${cornerSize} border-t-2 border-l-2 border-white transition-all group-hover:-top-1.5 group-hover:-left-1.5`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-0.5 -right-0.5 ${cornerSize} border-t-2 border-r-2 border-white transition-all group-hover:-top-1.5 group-hover:-right-1.5`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-0.5 -left-0.5 ${cornerSize} border-b-2 border-l-2 border-white transition-all group-hover:-bottom-1.5 group-hover:-left-1.5`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-0.5 -right-0.5 ${cornerSize} border-b-2 border-r-2 border-white transition-all group-hover:-bottom-1.5 group-hover:-right-1.5`}
      />
    </a>
  );
}

export default function Footer({ showReadmeBridge = true, variant = "default" }) {
  const isResearchFooter = variant === "research";
  const isArcOsFooter = variant === "arc-os";
  const isSpaceFooter = variant === "space";
  const isReadMoreFooter = variant === "readmore";
  const isCompactFooter =
    isResearchFooter || isArcOsFooter || isSpaceFooter || isReadMoreFooter;

  /**
   * Big brand title: soft off-white
   */
  const titleTone = "text-[#E6E2E2]";

  const titleSizeCompact = "text-[clamp(calc(1.25rem+6px),calc(7vw+6px),calc(5.9rem+6px))]";
  const titleSizeDefault = "text-[clamp(calc(2.3rem+6px),calc(6.1vw+6px),calc(5.9rem+6px))]";

  return (
    <footer
      className={[
        "relative text-white font-elios",
        isReadMoreFooter ? "readmore-footer no-scrollbar z-10 overflow-x-hidden" : "z-50 overflow-hidden",
        isArcOsFooter || isSpaceFooter || isReadMoreFooter
          ? "bg-transparent"
          : "bg-black",
        isArcOsFooter ? "arc-os-footer" : "",
        !isResearchFooter && !isArcOsFooter && !isSpaceFooter && !isReadMoreFooter
          ? "home-footer"
          : "",
        isResearchFooter || isSpaceFooter || isReadMoreFooter
          ? "min-h-[400px] sm:min-h-[460px] md:min-h-[500px]"
          : isArcOsFooter
            ? "min-h-[330px] sm:min-h-[390px] md:min-h-[430px]"
            : "",
        isResearchFooter ? "research-footer" : "",
        isSpaceFooter ? "space-footer" : "",
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

        .space-footer {
          background: transparent;
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

        /*
          UPDATED: wrapper now controls size/position for BOTH the
          earth image and the blue tint layer above it, so they always
          line up perfectly no matter the viewport width.
        */
        .home-footer-figure-wrap {
          position: absolute;
          z-index: 8;
          left: 50%;
          bottom: 0;
          width: min(98vw, 1680px);
          height: min(150vw, 790px);
          transform: translateX(-50%);
          pointer-events: none;
          user-select: none;
        }

        .home-footer-figure-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          filter:
            drop-shadow(-28px 24px 50px rgba(89, 76, 34, 0.18))
            drop-shadow(28px 24px 54px rgba(45, 52, 116, 0.24));
        }

        /* Transparent blue tint sitting on top of the earth image */
        .home-footer-figure-tint {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(120% 85% at 50% 0%, rgba(90, 130, 255, 0.30) 0%, rgba(40, 55, 140, 0.20) 45%, rgba(0, 0, 0, 0) 78%),
            linear-gradient(180deg, rgba(25, 45, 130, 0.10) 0%, rgba(25, 45, 130, 0.38) 55%, rgba(10, 18, 60, 0.55) 100%);
          mix-blend-mode: color;
          opacity: 0.9;
        }

        .home-footer-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: clamp(24px, 2.6vw, 50px);
        }

        .research-footer-glow {
          position: absolute;
          width: 2423px;
          height: 665px;
          border-radius: 2423px;
          filter: blur(340.5px);
          pointer-events: none;
        }

        .research-footer-glow--gold {
          left: -1370px;
          top: 24%;
          background: #F3D05D;
          opacity: 0.54;
        }

        .research-footer-glow--blue {
          right: -1280px;
          top: 24%;
          background: #5D6EF3;
          opacity: 0.64;
        }

        .readmore-footer {
          margin-top: clamp(-330px, calc(-20vw - 50px), -210px);
          padding-top: clamp(230px, calc(20vw - 50px), 370px);
          background: transparent !important;
        }

        .research-footer-hashtag {
          margin: clamp(48px, 5vw, 72px) 0 clamp(24px, 2.5vw, 40px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(22px, calc(0.9vw + 10px), 26px);
          line-height: 1;
          font-weight: 300;
          letter-spacing: 0.02em;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        .footer-animated-line {
          background: #ffffff;
        }

        @media (max-width: 900px) {
          .home-footer {
            min-height: 0;
          }

          .home-footer-figure-wrap {
            position: relative;
            left: auto;
            bottom: auto;
            width: min(100vw, 900px);
            height: auto;
            aspect-ratio: 391 / 456;
            margin: 0 auto;
            transform: none;
          }

          .home-footer-figure-img {
            position: static;
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

      {isSpaceFooter ? null : isReadMoreFooter ? null : isResearchFooter ? (
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
            className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_0%_86%,_rgba(243,208,93,0.2)_0%,_rgba(243,208,93,0.08)_26%,_rgba(243,208,93,0)_58%),radial-gradient(ellipse_at_100%_88%,_rgba(93,110,243,0.34)_0%,_rgba(93,110,243,0.14)_30%,_rgba(93,110,243,0)_62%)]"
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

      {!isReadMoreFooter && !isResearchFooter && !isArcOsFooter && !isSpaceFooter ? (
        <div className="home-footer-figure-wrap" aria-hidden="true">
          <img
            src={footerSentinel}
            alt=""
            className="home-footer-figure-img"
            loading="lazy"
          />
          <div className="home-footer-figure-tint" />
        </div>
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
        {isResearchFooter || isSpaceFooter || isReadMoreFooter ? (
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
                          ? "w-[80px] sm:w-[148px] md:w-[190px]"
                          : "w-full max-w-[280px] sm:w-[210px] sm:max-w-none "
                      }
                    >
                      CONTACT US
                    </BracketButton>

                    {/* Thin connector line */}
                    <div
                      aria-hidden="true"
                      className={
                        isCompactFooter
                          ? "h-px w-[16px] bg-white/45 sm:w-[32px] md:w-[44px]"
                          : "hidden h-px w-[52px] bg-white/45 sm:block"
                      }
                    />

                    <BracketButton
                      href="#"
                      variant="slate"
                      compact={isCompactFooter}
                      className={
                        isCompactFooter
                          ? "w-[88px] sm:w-[160px] md:w-[210px]"
                          : "w-full max-w-[300px] sm:w-[230px] sm:max-w-none"
                      }
                    >
                      OPEN ROLES
                    </BracketButton>
                  </div>

                  <p
                    className={
                      isCompactFooter
                        ? "mt-12 text-center font-elios text-[10.5px] tracking-[0.08em] text-white whitespace-nowrap sm:mt-14 sm:text-[13px] sm:tracking-[0.1em] md:mt-16 md:text-[14px] md:tracking-[0.12em]"
                        : "mt-20 text-center font-elios text-[15px] tracking-[0.14em] text-white whitespace-nowrap sm:text-[16px]"
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
                          ? "h-5 w-8 object-contain sm:h-6 sm:w-10 md:h-8 md:w-12"
                          : "h-8 w-14 object-contain"
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
                        ? "text-[12px] font-extrabold tracking-[0.1em] text-white sm:text-[15px] sm:tracking-[0.12em] md:text-[17px] md:tracking-[0.14em]"
                        : "text-[20px] font-extrabold tracking-[0.14em] text-white"
                    }
                    style={{
                      fontFamily: '"Helvetica Now Display", Helvetica, Arial, sans-serif',
                      fontWeight: 700,
                      WebkitTextStroke: "0.45px #fff",
                    }}
                  >
                    GET THE APP
                  </h3>

                  <div
                    className={
                      isCompactFooter
                        ? "mt-5 flex items-center gap-1 sm:mt-6 sm:gap-2 md:mt-7 md:gap-3"
                        : "mt-7 flex items-center gap-3"
                    }
                  >
                    <a
                      href="#"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      <img
                        src={googlePlay}
                        alt="Get it on Google Play"
                        className={isCompactFooter ? "h-5 sm:h-8 md:h-11" : "h-12"}
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
                        className={isCompactFooter ? "h-5 sm:h-8 md:h-11" : "h-12"}
                        loading="lazy"
                      />
                    </a>
                  </div>

                  <h3
                    className={
                      isCompactFooter
                        ? "mt-3 text-[12px] font-extrabold tracking-[0.1em] text-white sm:mt-5 sm:text-[15px] sm:tracking-[0.12em] md:mt-6 md:text-[17px] md:tracking-[0.14em]"
                        : "mt-7 text-[20px] font-extrabold tracking-[0.14em] text-white"
                    }
                    style={{
                      fontFamily: '"Helvetica Now Display", Helvetica, Arial, sans-serif',
                      fontWeight: 700,
                      WebkitTextStroke: "0.45px #fff",
                    }}
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
                  ? "footer-animated-line h-px w-full shadow-[0_0_1px_rgba(255,255,255,0.45)]"
                  : "footer-animated-line h-px -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-20 xl:-mx-24 shadow-[0_0_1px_rgba(255,255,255,0.45)]"
              }
            />

            {/* Big title: equal gap around the divider */}
            <div
              className={
                isCompactFooter
                  ? "pt-[calc(var(--gap)-8px)] text-center"
                  : "pt-[calc(var(--gap)-24px)] text-center"
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
                          titleSizeCompact,
                          "tracking-[0.04em] sm:tracking-[0.06em]",
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
                        titleSizeDefault,
                        "tracking-[0.06em]",
                        titleTone,
                      ].join(" ")}
                    >
                      ABSOL
                    </span>

                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        titleSizeDefault,
                        "tracking-[0.06em]",
                        titleTone,
                      ].join(" ")}
                    >
                      X
                    </span>

                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        titleSizeDefault,
                        "tracking-[0.06em]",
                        titleTone,
                      ].join(" ")}
                    >
                      CORE
                    </span>

                    <span
                      className={[
                        "font-elios uppercase leading-none",
                        titleSizeDefault,
                        "tracking-[0.06em]",
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
                    ? "mt-3 font-elios text-[8px] tracking-[0.08em] text-white sm:text-[11px] sm:tracking-[0.1em] md:mt-4 md:text-[13px] md:tracking-[0.12em]"
                    : "mt-4 font-elios text-[13px] tracking-[0.12em] text-white"
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

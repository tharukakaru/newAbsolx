export default function MeghaAppBar({
  titleId,
  titleClassName,
  ariaLabel,
  title,
  tagline,
  caption,
  frameChildren,
  frameClassName = "",
  showHangar = true,
}) {
  const frameClasses = ["megha-hero__frame", frameClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{`
        .megha-app-bar,
        .megha-app-bar * {
          box-sizing: border-box;
        }

        .megha-canvas__header {
          display: flex;
          flex: 0 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding-block-start: clamp(2rem, 3.5vw, 3.125rem);
          padding-block-end: clamp(1.25rem, 2.5vw, 2rem);
          padding-inline: clamp(1.25rem, 4vw, 4rem);
        }

        .megha-hero__tagline {
          width: min(48rem, calc(100% - 2rem));
          max-width: 100%;
          margin: clamp(1.1rem, 1.8vw, 1.75rem) auto 0;
          font-family: "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(0.9rem, 1.15vw, 1.25rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1.45;
          letter-spacing: 0.02em;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        .megha-hero__stage {
          position: relative;
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          min-width: 0;
          margin-inline-end: calc(-1 * clamp(0.5rem, 1.5vw, 1.25rem));
          margin-block-end: clamp(2rem, 4vh, 3rem);
        }

        .megha-hero__hangar {
          position: absolute;
          right: 100%;
          left: auto;
          top: 50%;
          z-index: 2;
          display: block;
          width: max-content;
          margin: 0;
          margin-right: clamp(0.35rem, 0.85vw, 0.75rem);
          padding: 0;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.35rem, 2vw, 2rem);
          font-style: normal;
          font-weight: 600;
          line-height: 1;
          letter-spacing: clamp(0.14rem, 0.45vw, 0.32rem);
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: translateY(-50%) rotate(180deg);
          color: #ffffff;
          pointer-events: none;
        }

        .megha-hero__hangar-num {
          color: #e3e41b;
        }

        .megha-hero__frame {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          width: 100%;
          max-width: none;
          min-width: 0;
          min-height: clamp(36rem, 78vh, 58rem);
          margin-inline: auto;
          overflow: visible;
          border: 0.0625rem solid #e3e41b;
          background: transparent;
        }

        .megha-hero__frame--top {
          align-items: stretch;
          justify-content: flex-start;
        }

        .megha-hero__viewport {
          flex: 1 1 auto;
          width: 100%;
          min-width: 0;
          min-height: inherit;
        }

        .megha-hero__caption {
          position: absolute;
          inset-inline: 0;
          inset-block-end: clamp(0.55rem, 1vh, 0.85rem);
          margin: 0;
          font-family: "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(0.5625rem, 0.65vw, 0.6875rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          pointer-events: none;
        }

        @media (max-width: 47.999rem) {
          .megha-hero__stage {
            flex-direction: column;
            align-items: stretch;
            padding-inline: 0;
            margin-inline: 0;
            gap: clamp(0.5rem, 2vw, 0.85rem);
          }

          .megha-hero__hangar {
            position: absolute;
            right: auto;
            left: 0;
            top: auto;
            bottom: calc(100% + clamp(0.35rem, 1vw, 0.5rem));
            width: auto;
            margin: 0;
            writing-mode: horizontal-tb;
            transform: none;
            pointer-events: auto;
            font-size: clamp(1.1rem, 4.5vw, 1.45rem);
          }

          .megha-hero__frame {
            min-height: clamp(28rem, 68vh, 42rem);
            margin-inline: 0;
          }

          .megha-hero__tagline {
            width: min(100%, 36rem);
            font-size: clamp(0.8125rem, 3.2vw, 1.05rem);
            line-height: 1.5;
            letter-spacing: 0.04em;
          }
        }

        @media (max-width: 30rem) {
          .megha-canvas__header {
            padding-inline: clamp(0.75rem, 3vw, 1.25rem);
            padding-block-start: clamp(2.5rem, 12vw, 3rem);
            padding-block-end: 0;
          }
        }
      `}</style>

      <div className="megha-app-bar">
        <header className="megha-canvas__header">
          <h1
            id={titleId}
            className={titleClassName}
            aria-label={ariaLabel}
          >
            {title}
          </h1>
          {tagline ? (
            <p className="megha-hero__tagline">{tagline}</p>
          ) : null}
        </header>

        <div className="megha-hero__stage">
          <div className={frameClasses}>
            {showHangar ? (
              <p className="megha-hero__hangar" aria-label="Hangar 18">
                HANGAR <span className="megha-hero__hangar-num">1</span>8
              </p>
            ) : null}
            {frameChildren}
            <div className="megha-hero__viewport" aria-hidden="true" />
            {caption ? (
              <p className="megha-hero__caption">{caption}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

const connectedCopy =
  "Connected Warfare ensures U.S. and allied forces win at the edge, in fast-moving and contested environments where decisions must be made in seconds. We build AI-driven systems that connect sensors, shooters, and decision-makers for faster, smarter, and more resilient operations when every second counts.";

const products = [
  {
    title: "HYENA",
    body: "Agentic Autonomous Pilot of ARC OS",
  },
  {
    title: "SENTINEL",
    body: "Integrated Air Surveillance & Counter-UAS Layer",
  },
  {
    title: "ARC C2",
    body: "Command & Control (C2) is an AI-powered battle management",
  },
];

export default function Arc() {
  return (
    <section className="arc-os-section relative isolate overflow-hidden bg-black text-white">
      <style>{`
        .arc-os-section {
          --arc-yellow: #e3e41b;
          --arc-line: rgba(255, 255, 255, 0.72);
          --arc-muted: rgba(255, 255, 255, 0.72);
          --arc-faint: rgba(255, 255, 255, 0.42);
          --arc-line-left: 11.5%;
          --arc-line-right: 15.2%;
          --arc-line-center-gap: 26px;
          --arc-products-top: 332px;
          --arc-product-line-top: 158px;
          --arc-lower-spine-top: 112px;
          --arc-panel-top: 626px;
          --arc-war-top: 166px;
          --arc-copy-top: 158px;
          --arc-copy-right: 42px;
          --arc-copy-width: 430px;
          --arc-upper-spine-top: 186px;
          --arc-upper-spine-end: 300px;
          padding: 74px 0 110px;
        }

        .arc-os-shell {
          position: relative;
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
          min-height: 1080px;
        }

        .arc-os-lockup {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 62px;
          padding-top: 4px;
        }

        .arc-os-logo {
          display: flex;
          align-items: flex-start;
          gap: 62px;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 164px;
          font-weight: 700;
          line-height: 0.68;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .arc-os-logo-part {
          position: relative;
          display: inline-block;
        }

        .arc-os-logo-o {
          color: var(--arc-yellow);
        }

        .arc-os-war {
          position: absolute;
          left: 50%;
          top: var(--arc-war-top);
          transform: translateX(-50%);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .arc-os-ca {
          position: absolute;
          left: -52px;
          top: calc(100% + 26px);
          display: flex;
          align-items: center;
          gap: 9px;
          color: #fff;
          white-space: nowrap;
        }

        .arc-os-ca-code {
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 8px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .arc-os-ca-c2 {
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .arc-os-copy {
          position: absolute;
          right: var(--arc-copy-right);
          top: var(--arc-copy-top);
          width: var(--arc-copy-width);
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 6.4px;
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: 0;
          text-align: right;
          text-transform: uppercase;
          color: var(--arc-faint);
        }

        .arc-os-divider-top {
          position: absolute;
          left: var(--arc-line-left);
          right: var(--arc-line-right);
          top: 230px;
          height: 1px;
          background:
            linear-gradient(90deg, transparent, var(--arc-line) 9%, var(--arc-line) 91%, transparent),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.26) 38%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 150, 0.26) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 34% 100%;
          background-position: 0 0, -38% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.16));
          will-change: background-position;
          animation: arcLineRunX 4.15s linear infinite;
        }

        .arc-os-spine {
          position: absolute;
          left: 50%;
          top: var(--arc-upper-spine-top);
          width: 1px;
          height: calc(var(--arc-upper-spine-end) - var(--arc-upper-spine-top));
          background:
            linear-gradient(180deg, var(--arc-line), rgba(255, 255, 255, 0.18)),
            linear-gradient(180deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.24) 38%, rgba(255, 255, 255, 0.86) 50%, rgba(255, 255, 150, 0.24) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.18));
          will-change: background-position;
          transform: translateX(-50%);
          animation: arcLineRunY 3.85s linear infinite;
        }

        .arc-os-products {
          position: absolute;
          left: 50%;
          top: var(--arc-products-top);
          display: grid;
          width: min(1120px, 100%);
          grid-template-columns: repeat(3, minmax(0, 1fr));
          transform: translateX(-50%);
        }

        .arc-os-products::before,
        .arc-os-products::after {
          content: "";
          position: absolute;
          top: var(--arc-product-line-top);
          height: 1px;
          background:
            linear-gradient(90deg, transparent, var(--arc-line) 10%, var(--arc-line) 90%, transparent),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.26) 38%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 150, 0.26) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 34% 100%;
          background-position: 0 0, -38% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.16));
          will-change: background-position;
          animation: arcLineRunX 3.9s linear infinite;
        }

        .arc-os-products::before {
          left: var(--arc-line-left);
          right: calc(50% + var(--arc-line-center-gap));
        }

        .arc-os-products::after {
          left: calc(50% + var(--arc-line-center-gap));
          right: var(--arc-line-right);
        }

        .arc-os-product {
          position: relative;
          min-height: 168px;
          text-align: center;
        }

        .arc-os-product-title {
          margin: 0;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .arc-os-product-c2 {
          display: inline-block;
          margin-left: 10px;
          font-size: 0.68em;
          vertical-align: 0.08em;
        }

        .arc-os-product-body {
          width: min(270px, 86%);
          margin: 18px auto 0;
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: 0;
          color: var(--arc-muted);
        }

        .arc-os-product-rule {
          position: absolute;
          bottom: 0;
          display: none;
          height: 1px;
          background:
            linear-gradient(90deg, transparent, var(--arc-line) 10%, var(--arc-line) 90%, transparent),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.26) 38%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 150, 0.26) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 34% 100%;
          background-position: 0 0, -38% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.16));
          will-change: background-position;
          animation: arcLineRunX 3.9s linear infinite;
        }

        .arc-os-product:first-child .arc-os-product-rule {
          left: 18%;
          right: 4%;
        }

        .arc-os-product:nth-child(3) .arc-os-product-rule {
          left: 4%;
          right: 18%;
        }

        .arc-os-product:nth-child(2)::after {
          content: "";
          position: absolute;
          left: 50%;
          top: var(--arc-lower-spine-top);
          width: 1px;
          height: calc(var(--arc-panel-top) - var(--arc-products-top) - var(--arc-lower-spine-top));
          background:
            linear-gradient(180deg, var(--arc-line), rgba(255, 255, 255, 0.2)),
            linear-gradient(180deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.24) 38%, rgba(255, 255, 255, 0.86) 50%, rgba(255, 255, 150, 0.24) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.18));
          will-change: background-position;
          transform: translateX(-50%);
          animation: arcLineRunY 4s linear infinite;
        }

        .arc-os-products::after,
        .arc-os-product-rule {
          animation-delay: 0.42s;
        }

        .arc-os-product:nth-child(2)::after {
          animation-delay: 0.18s;
        }

        @keyframes arcLineRunX {
          0% {
            background-position: 0 0, -38% 0;
          }
          100% {
            background-position: 0 0, 138% 0;
          }
        }

        @keyframes arcLineRunY {
          0% {
            background-position: 0 0, 0 -54%;
          }
          100% {
            background-position: 0 0, 0 154%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .arc-os-divider-top,
          .arc-os-spine,
          .arc-os-products::before,
          .arc-os-products::after,
          .arc-os-product-rule,
          .arc-os-product:nth-child(2)::after {
            animation: none;
          }
        }

        .arc-os-panel {
          position: absolute;
          left: 50%;
          top: var(--arc-panel-top);
          width: min(1000px, 88%);
          height: 432px;
          transform: translateX(-50%);
          border: 1px solid rgba(227, 228, 27, 0.86);
          border-radius: 92px;
          background:
            radial-gradient(circle at 11% 100%, rgba(82, 99, 225, 0.58) 0%, rgba(36, 47, 127, 0.36) 28%, rgba(0, 0, 0, 0) 54%),
            linear-gradient(180deg, rgba(4, 5, 12, 0.2), rgba(0, 0, 0, 0.82));
          box-shadow:
            inset 0 0 44px rgba(0, 0, 0, 0.72),
            0 0 0 1px rgba(227, 228, 27, 0.08);
        }

        @media (min-width: 1440px) {
          .arc-os-shell {
            width: min(1320px, calc(100% - 72px));
          }

          .arc-os-logo {
            gap: 84px;
            font-size: 188px;
          }

          .arc-os-copy {
            right: 56px;
            top: 168px;
            width: 470px;
            font-size: 6.7px;
          }

          .arc-os-products {
            width: min(1260px, 100%);
          }

          .arc-os-product-title {
            font-size: 58px;
          }
        }

        @media (max-width: 1024px) {
          .arc-os-section {
            padding-top: 58px;
          }

          .arc-os-shell {
            min-height: 980px;
          }

          .arc-os-section {
            --arc-line-center-gap: 22px;
            --arc-products-top: 298px;
            --arc-product-line-top: 146px;
            --arc-lower-spine-top: 102px;
            --arc-panel-top: 572px;
            --arc-war-top: 136px;
            --arc-copy-top: 130px;
            --arc-copy-right: 14px;
            --arc-copy-width: 324px;
            --arc-upper-spine-top: 154px;
            --arc-upper-spine-end: 268px;
          }

          .arc-os-lockup,
          .arc-os-logo {
            gap: 42px;
          }

          .arc-os-logo {
            font-size: 118px;
          }

          .arc-os-war {
            font-size: 14px;
          }

          .arc-os-ca {
            left: -28px;
            top: calc(100% + 22px);
          }

          .arc-os-copy {
            font-size: 6px;
          }

          .arc-os-divider-top {
            top: 196px;
          }

          .arc-os-products {
            top: var(--arc-products-top);
          }

          .arc-os-product-title {
            font-size: 38px;
          }

          .arc-os-product-body {
            font-size: 14px;
          }

          .arc-os-panel {
            top: var(--arc-panel-top);
            height: 378px;
            border-radius: 74px;
          }
        }

        @media (max-width: 760px) {
          .arc-os-section {
            --arc-line-left: 7%;
            --arc-line-right: 7%;
            --arc-line-center-gap: 18px;
            --arc-war-top: 92px;
            --arc-copy-top: 116px;
            --arc-copy-right: auto;
            --arc-copy-width: min(360px, 88vw);
            --arc-upper-spine-top: 115px;
            --arc-upper-spine-end: 323px;
            padding: 42px 0 76px;
          }

          .arc-os-shell {
            width: min(100% - 28px, 620px);
            min-height: 1000px;
          }

          .arc-os-lockup,
          .arc-os-logo {
            gap: 22px;
          }

          .arc-os-logo {
            font-size: 72px;
          }

          .arc-os-war {
            font-size: 11px;
          }

          .arc-os-ca {
            display: none;
          }

          .arc-os-copy {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            text-align: center;
            font-size: 7px;
            line-height: 1.18;
          }

          .arc-os-divider-top {
            left: 7%;
            right: 7%;
            top: 242px;
          }

          .arc-os-spine {
            opacity: 0.72;
          }

          .arc-os-products {
            top: 310px;
            grid-template-columns: 1fr;
            row-gap: 38px;
          }

          .arc-os-products::before,
          .arc-os-products::after {
            display: none;
          }

          .arc-os-product {
            min-height: 122px;
          }

          .arc-os-product-title {
            font-size: 42px;
          }

          .arc-os-product-body {
            margin-top: 14px;
            font-size: 14px;
          }

          .arc-os-product:first-child .arc-os-product-rule,
          .arc-os-product:nth-child(3) .arc-os-product-rule,
          .arc-os-product-rule {
            display: block;
            left: 15%;
            right: 15%;
          }

          .arc-os-product:nth-child(2)::after {
            display: none;
          }

          .arc-os-panel {
            top: 724px;
            width: min(500px, 92%);
            height: 300px;
            border-radius: 58px;
          }
        }

        @media (max-width: 420px) {
          .arc-os-shell {
            min-height: 936px;
          }

          .arc-os-logo {
            gap: 14px;
            font-size: 52px;
          }

          .arc-os-war {
            top: 72px;
            font-size: 10px;
          }

          .arc-os-copy {
            top: 98px;
            font-size: 6px;
          }

          .arc-os-divider-top {
            top: 218px;
          }

          .arc-os-spine {
            top: 94px;
            height: 186px;
          }

          .arc-os-products {
            top: 280px;
            row-gap: 34px;
          }

          .arc-os-product-title {
            font-size: 34px;
          }

          .arc-os-product-body {
            font-size: 13px;
          }

          .arc-os-panel {
            top: 680px;
            height: 270px;
            border-radius: 42px;
          }
        }
      `}</style>

      <div className="arc-os-shell">
        <div className="arc-os-lockup" aria-label="ARC OS">
          <div className="arc-os-logo">
            <span className="arc-os-logo-part">
              ARC
              <span className="arc-os-ca" aria-hidden="true">
                <span className="arc-os-ca-code">&lt;CA1 -AAA3&gt;</span>
                <span className="arc-os-ca-c2">C2</span>
              </span>
            </span>
            <span className="arc-os-logo-part">
              <span className="arc-os-logo-o">O</span>S
            </span>
          </div>
          <span className="arc-os-war">Agentic Warfare</span>
        </div>
        <p className="arc-os-copy">{connectedCopy}</p>
        <div className="arc-os-divider-top" aria-hidden="true" />
        <div className="arc-os-spine" aria-hidden="true" />

        <div className="arc-os-products">
          {products.map((product) => (
            <article className="arc-os-product" key={product.title}>
              <h2 className="arc-os-product-title">
                {product.title === "ARC C2" ? (
                  <>
                    ARC <span className="arc-os-product-c2">C2</span>
                  </>
                ) : (
                  product.title
                )}
              </h2>
              <p className="arc-os-product-body">{product.body}</p>
              <div className="arc-os-product-rule" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="arc-os-panel" aria-hidden="true" />
      </div>
    </section>
  );
}

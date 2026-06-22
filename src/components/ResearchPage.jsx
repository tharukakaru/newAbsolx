import React from "react";
import yapariBold from "../assets/fonts/YapariTrial-Bold.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import archivoRegular from "../assets/fonts/archivo.regular.ttf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import uavBlueprintVideo from "../assets/uav-blueprint-4k-alpha.mp4";
import shahedDroneImage from "../assets/US-Shahed-136-drone 1.png";
import launchDroneImage from "../assets/8611730 1 (1).png";

const problemCards = [
  {
    id: "P-01",
    category: "Cost",
    title: "The Cost of War Has Collapsed",
    body: (
      <>
        A $20,000 drone now forces defenders to fire $3&ndash;4 million
        interceptor missiles. MEGHA flips the arithmetic &mdash; built for
        thousands of dollars, expendable by design, it imposes financial ruin on
        the adversary's magazine, not on ours.
      </>
    ),
  },
  {
    id: "P-02",
    category: "Precision",
    title: "Precise Strike, Not Blunt Force",
    body: (
      <>
        Onboard computer vision identifies and locks the exact target. MEGHA
        strikes with surgical precision in the terminal phase &mdash; reducing
        collateral damage and protecting civilian populations near the
        engagement.
      </>
    ),
  },
  {
    id: "P-03",
    category: "Human Error",
    title: "Removing Human Error",
    body: (
      <>
        Fatigue, stress, and split-second misjudgement cost lives. Edge-level AI
        executes the commander's intent with consistent, repeatable accuracy
        &mdash; fixing the human errors that turn missions into tragedies.
      </>
    ),
  },
  {
    id: "P-04",
    category: "Civilian Safety",
    title: "Lower Damage to Civilians",
    body: (
      <>
        Precision targeting and abort-aware autonomy keep destruction confined
        to the legitimate target. Less indiscriminate fire means fewer civilian
        casualties in contested, populated theatres.
      </>
    ),
  },
  {
    id: "P-05",
    category: "Speed",
    title: (
      <>
        Act Fast &mdash; See First, Strike First
      </>
    ),
    body: (
      <>
        Decisions are made onboard in milliseconds, not delayed by network
        latency to a distant operator. MEGHA sees the battlefield first and acts
        decisively before the enemy can react.
      </>
    ),
  },
  {
    id: "P-06",
    category: "Supply",
    title: "Rapid Manufacturing",
    body: (
      <>
        Distributed 3D-print farms output thousands of units. Engineers tweak a
        CAD file and field a hardware upgrade to the frontline in hours, not
        years. You scale by adding printers, not factories
      </>
    ),
  },
];

export default function ResearchPage() {
  return (
    <main className="research-page relative min-h-screen overflow-hidden text-white">
      <style>{`
        @font-face {
          font-family: "Research Yapari";
          src: url(${yapariBold}) format("truetype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Research Yapari Regular";
          src: url(${yapariRegular}) format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Research Plus Jakarta";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Archivo Condensed";
          src: url(${archivoRegular}) format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .research-page {
          background:
            radial-gradient(ellipse at 0% 50%, rgba(9, 14, 28, 0.94) 0%, rgba(9, 14, 28, 0.44) 26%, rgba(9, 14, 28, 0) 56%),
            radial-gradient(ellipse at 100% 52%, rgba(9, 14, 28, 0.98) 0%, rgba(9, 14, 28, 0.5) 30%, rgba(9, 14, 28, 0) 60%),
            #020409;
        }

        .research-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(2,4,9,0) 32%, rgba(2,4,9,0.28) 100%),
            radial-gradient(ellipse at 50% 18%, rgba(255,255,255,0.05), rgba(255,255,255,0) 34%);
          pointer-events: none;
        }

        .research-title {
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(58px, 8vw, 150px);
          line-height: 0.82;
          letter-spacing: 0;
        }

        .research-copy {
          font-family: "Archivo Condensed", "Arial Narrow", sans-serif;
          font-size: clamp(11px, 0.92vw, 17px);
          line-height: 1.18;
          letter-spacing: 0.24em;
        }

        .research-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.32);
          border-radius: 18px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035) 46%, rgba(18,22,58,0.28)),
            radial-gradient(ellipse at 98% 72%, rgba(82, 92, 214, 0.36), rgba(30, 33, 88, 0.14) 34%, rgba(2, 4, 9, 0) 62%),
            rgba(8, 11, 18, 0.42);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.28),
            inset 0 0 44px rgba(255,255,255,0.035),
            inset 0 -70px 120px rgba(227, 228, 27, 0.055),
            inset -80px -70px 150px rgba(82, 92, 214, 0.18),
            0 0 38px rgba(9, 14, 28, 0.54);
          backdrop-filter: blur(16px);
        }

        .research-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            radial-gradient(ellipse at 48% 43%, rgba(255,255,255,0.09), rgba(255,255,255,0) 25%),
            radial-gradient(ellipse at 50% 75%, rgba(227,228,27,0.08), rgba(227,228,27,0.02) 24%, rgba(227,228,27,0) 54%),
            linear-gradient(90deg, rgba(2,4,9,0.78) 0%, rgba(2,4,9,0.38) 52%, rgba(2,4,9,0.1) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .research-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(2,4,9,0.24), rgba(2,4,9,0.04) 42%, rgba(2,4,9,0.38));
          pointer-events: none;
          z-index: 3;
        }

        .research-kicker,
        .research-panel-body {
          font-family: "Archivo Condensed", "Arial Narrow", sans-serif;
          letter-spacing: 0.08em;
        }

        .research-panel-title,
        .research-problems-title {
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          letter-spacing: 0;
        }

        .research-panel-media {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .research-video {
          position: absolute;
          left: 50%;
          top: 24%;
          width: 84%;
          height: 38%;
          object-fit: cover;
          object-position: center center;
          opacity: 0.82;
          filter: saturate(0.9) contrast(1.14) brightness(0.9);
          mix-blend-mode: screen;
          transform: translateX(-50%) scaleX(-1);
        }

        .research-problems-content {
          position: relative;
          margin-top: clamp(360px, 37vw, 520px);
        }

        .research-problems-eyebrow,
        .problem-label,
        .problem-title,
        .problem-body {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          letter-spacing: 0;
        }

        .research-problems-eyebrow {
          font-size: 14px;
          line-height: 1.35;
          font-weight: 400;
          color: rgba(255,255,255,0.78);
        }

        .research-problems-heading {
          margin-top: 10px;
          max-width: 980px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 2.35vw, 38px);
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .research-followup-section {
          position: relative;
        }

        .research-followup-section::before {
          content: "";
          position: absolute;
          left: -12%;
          top: 4%;
          width: min(34vw, 420px);
          height: min(56vw, 640px);
          background: radial-gradient(circle, rgba(186, 154, 47, 0.42), rgba(186, 154, 47, 0) 72%);
          filter: blur(42px);
          pointer-events: none;
        }

        .research-followup-section::after {
          content: "";
          position: absolute;
          right: -10%;
          top: 10%;
          width: min(28vw, 360px);
          height: min(44vw, 520px);
          background: radial-gradient(circle, rgba(72, 83, 192, 0.22), rgba(72, 83, 192, 0) 72%);
          filter: blur(30px);
          pointer-events: none;
        }

        .research-shahed-stage {
          position: relative;
          z-index: 1;
          margin: 26px auto 0;
          max-width: 680px;
        }

        .research-shahed-stage::before {
          content: none;
        }

        .research-shahed-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background: transparent;
          box-shadow: 0 22px 44px rgba(0, 0, 0, 0.36);
        }

        .research-shahed-card::after {
          content: none;
        }

        .research-shahed-image {
          display: block;
          width: 100%;
          border-radius: inherit;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: center;
        }

        .research-shahed-copy {
          margin: 12px auto 0;
          max-width: 980px;
          text-align: center;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(10px, 0.82vw, 12px);
          line-height: 1.4;
          color: rgba(255,255,255,0.72);
        }

        .research-shahed-copy strong {
          display: block;
          margin-bottom: 6px;
          font-size: clamp(10px, 0.9vw, 12px);
          font-weight: 500;
          color: rgba(255,255,255,0.58);
        }

        .research-cost-panel {
          position: relative;
          z-index: 1;
          margin-top: 34px;
          min-height: clamp(420px, 42vw, 610px);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 20px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 42%, rgba(186,154,47,0.15)),
            rgba(11, 12, 16, 0.5);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset 0 0 108px rgba(186,154,47,0.15),
            0 22px 60px rgba(0, 0, 0, 0.32),
            0 0 36px rgba(186,154,47,0.12);
          backdrop-filter: blur(16px);
        }

        .research-cost-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 0% 48%, rgba(186, 154, 47, 0.46), rgba(186, 154, 47, 0) 40%),
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.06) 70%);
          pointer-events: none;
        }

        .research-cost-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          box-shadow:
            inset 0 0 0 1px rgba(186,154,47,0.14),
            inset 0 0 44px rgba(186,154,47,0.08);
          pointer-events: none;
        }

        .research-cost-inner {
          position: relative;
          z-index: 1;
          padding: 30px 24px 36px;
        }

        .research-cost-kicker {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 400;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }

        .research-cost-title {
          margin-top: 10px;
          max-width: 1180px;
          font-family: "Research Yapari Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(28px, 3.8vw, 62px);
          line-height: 0.94;
          font-weight: 400;
          letter-spacing: 0;
          text-transform: uppercase;
          text-wrap: balance;
          color: #fff;
        }

        .research-launch-stage {
          position: relative;
          z-index: 1;
          margin: 56px auto 0;
          max-width: 760px;
        }

        .research-launch-stage::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(circle at 18% 58%, rgba(186, 154, 47, 0.28), rgba(186, 154, 47, 0) 45%),
            radial-gradient(circle at 90% 28%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 36%);
          filter: blur(24px);
          pointer-events: none;
          z-index: -1;
        }

        .research-launch-card {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)),
            rgba(10, 11, 13, 0.54);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 22px 54px rgba(0,0,0,0.34),
            0 0 42px rgba(186,154,47,0.1);
          backdrop-filter: blur(14px);
        }

        .research-launch-image {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          object-position: center;
        }

        .problems-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          margin-top: 54px;
          max-width: 1090px;
        }

        .problem-card {
          min-height: 188px;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.34);
        }

        .problem-card:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .problem-label {
          margin-bottom: 13px;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 500;
          text-transform: uppercase;
          color: rgba(255,255,255,0.74);
        }

        .problem-title {
          max-width: 290px;
          font-size: 20px;
          line-height: 0.98;
          font-weight: 700;
          color: #fff;
          text-wrap: balance;
        }

        .problem-body {
          margin-top: 22px;
          max-width: 294px;
          font-size: 13px;
          line-height: 1.42;
          font-weight: 400;
          color: rgba(255,255,255,0.74);
        }

        @media (min-width: 768px) {
          .research-problems-content {
            margin-top: clamp(380px, 36vw, 540px);
          }

          .problems-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .problem-card {
            padding: 28px 26px 30px 0;
          }

          .problem-card:nth-child(-n+2) {
            border-top: 0;
            padding-top: 0;
          }

          .problem-card:nth-child(even) {
            border-left: 1px solid rgba(255,255,255,0.38);
            padding-left: 28px;
          }

          .problem-card:first-child {
            padding-top: 0;
          }

          .research-cost-inner {
            padding: 34px 32px 42px;
          }
        }

        @media (min-width: 1024px) {
          .research-problems-content {
            margin-top: clamp(400px, 33vw, 540px);
          }

          .problems-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin-top: 70px;
            margin-left: 64px;
          }

          .problem-card {
            min-height: 210px;
            padding: 0 26px 34px 28px;
            border-top: 0;
            border-left: 1px solid rgba(255,255,255,0.38);
          }

          .problem-card:nth-child(3n+1) {
            border-left: 0;
            padding-left: 0;
          }

          .problem-card:nth-child(n+4) {
            border-top: 1px solid rgba(255,255,255,0.34);
            padding-top: 30px;
          }

          .problem-card:nth-child(even) {
            padding-left: 28px;
          }

          .research-shahed-stage {
            margin-top: 28px;
            max-width: 700px;
          }

          .research-cost-panel {
            margin-top: 40px;
            min-height: clamp(480px, 42vw, 660px);
          }

          .research-cost-inner {
            padding: 36px 34px 48px;
          }
        }

        @media (max-width: 767px) {
          .research-video {
            left: 50%;
            top: 27%;
            width: 104%;
            height: 34%;
            opacity: 0.72;
          }

          .research-shahed-stage {
            margin-top: 18px;
            max-width: 100%;
          }

          .research-shahed-card {
            border-radius: 28px;
          }

          .research-cost-panel {
            min-height: 440px;
          }

          .research-launch-stage {
            margin-top: 38px;
          }

          .research-launch-card {
            border-radius: 28px;
          }
        }
      `}</style>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-7 pt-28 pb-16 sm:px-14 lg:px-24">
        <div className="max-w-[1180px]">
          <h1 className="research-title uppercase text-white">
            ME<span className="text-[#E3E41B]">G</span>HA UAS
          </h1>

          <p className="research-copy mt-6 max-w-[980px] uppercase text-white/78">
            A new class of{" "}
            <strong className="font-bold text-white">
              low-cost, 3D-printed, edge-autonomous
            </strong>{" "}
            aerial systems built to win the wars of mass - commanded in their
            thousands by a single operator through{" "}
            <strong className="font-bold text-white">ARC OS</strong>, and built
            to keep human warfighters out of the kill zone.
          </p>

          <div
            aria-hidden="true"
            className="mt-12 h-px w-full max-w-[1180px] bg-white/42"
          />
        </div>

        <div className="research-panel mt-14 w-full max-w-[1380px]">
          <div className="research-panel-media" aria-hidden="true">
            <video
              className="research-video"
              src={uavBlueprintVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          <div className="relative z-10 p-7 sm:p-9 lg:p-11">
            <p className="research-kicker text-[15px] uppercase text-white/80 sm:text-[18px]">
              // 01 - THE QUESTION
            </p>

            <h2 className="research-panel-title mt-4 text-[clamp(30px,3.6vw,58px)] uppercase leading-[0.95] text-white">
              Why Do We Need MEGHA?
            </h2>

            <div className="research-panel-body mt-6 max-w-[1130px] space-y-5 text-[clamp(13px,0.95vw,17px)] leading-[1.12] text-white/82">
              <p>
                For seventy years, air power meant a handful of extraordinarily
                expensive aircraft flown by humans who had to be physically
                present and exposed to danger. That model is breaking down in
                front of the entire world. On every modern battlefield the
                decisive weapon is no longer the most exquisite platform - it is
                the{" "}
                <strong className="font-bold text-white">
                  cheapest one, produced in the largest numbers, and
                  intelligent enough to fight when no human is steering it.
                </strong>
              </p>

              <p>
                MEGHA exists because the old way of war has become
                unaffordable, slow, manned, and fragile. It answers a single
                hard problem at the heart of the modern battlefield: how do you
                deliver decisive force that is cheap to lose, fast to build,
                precise enough to spare civilians, and able to keep fighting the
                moment the enemy jams the radio link? Every design decision in
                the MEGHA series traces back to solving a real battlefield
                problem.
              </p>
            </div>

            <div
              id="problems-megha-solves"
              className="research-problems-content"
            >
              <p className="research-problems-eyebrow uppercase">
                // 02 - Problems MEGHA Solves
              </p>

              <h2 className="research-problems-heading text-white">
                Real Battlefield Problems, Engineered Solutions
              </h2>

              <div className="problems-grid">
                {problemCards.map((problem) => (
                  <article className="problem-card" key={problem.id}>
                    <p className="problem-label">
                      {problem.id} / {problem.category}
                    </p>
                    <h3 className="problem-title">{problem.title}</h3>
                    <p className="problem-body">{problem.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cost-argument-showcase"
        className="research-followup-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pb-28 sm:px-14 lg:px-24"
      >
        <div className="research-shahed-stage">
          <div className="research-shahed-card">
            <img
              className="research-shahed-image"
              src={shahedDroneImage}
              alt="HESA Shahed 136 drone"
            />
          </div>

          <div className="research-shahed-copy">
            <strong>You said: shahid 136</strong>
            <p>
              The HESA Shahed 136 (also known as the Geran-2 in Russian
              service) is an Iranian-designed, one-way attack (OWA) kamikaze
              drone built to conduct long-range precision strikes. First
              introduced into active service around 2021, it has fundamentally
              shifted modern asymmetric warfare due to its incredibly low cost
              (ranging from $10,000 to $50,000 to manufacture locally) relative
              to its long operational range.
            </p>
          </div>
        </div>

        <div className="research-cost-panel">
          <div className="research-cost-inner">
            <p className="research-cost-kicker uppercase">
              // 03 - The Cost Argument
            </p>
            <h2 className="research-cost-title">
              You Cannot Win a War of Mass With a Strategy of Scarcity
            </h2>
          </div>
        </div>

        <div className="research-launch-stage">
          <div className="research-launch-card">
            <img
              className="research-launch-image"
              src={launchDroneImage}
              alt="Drone launch demonstration"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

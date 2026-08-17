export default function AbsolHero() {
  return (
    <section className="absol-hero relative z-10 flex w-full flex-col items-center justify-center px-6 pb-8 pt-[18vh] text-center sm:pt-[20vh]">
      <div className="absol-hero__brand flex flex-col items-center leading-none">
        <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8">
          <h1 className="absol-hero__title text-[clamp(calc(2.4rem+3px),calc(8vw+3px),calc(5.5rem+3px))] font-normal tracking-[0.12em] text-white">
            ABS<span className="text-[#d4ff00]">O</span>L
          </h1>
          <span className="absol-hero__title text-[clamp(calc(2.4rem+3px),calc(8vw+3px),calc(5.5rem+3px))] font-normal tracking-[0.12em] text-white">
            X
          </span>
        </div>
        <p className="absol-hero__labs mt-2 text-[clamp(1.25rem,4vw,2.75rem)] font-normal tracking-[0.22em] text-[#d4ff00] sm:mt-3">
          LAB&apos;S
        </p>
      </div>

      <div className="absol-hero__meta mt-5 flex flex-col items-center gap-1.5 text-white sm:mt-6">
        <p className="text-[11px] uppercase tracking-[0.22em] sm:text-sm">
          Absol X Lab No.1
        </p>
        <p className="absol-hero__tagline text-[11px] font-bold tracking-[0.22em] text-white sm:text-sm">
          Research to Advance AI
        </p>
      </div>

      <style>{`
        .absol-hero__title,
        .absol-hero__labs {
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-weight: 400;
        }
        .absol-hero__meta {
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
        }
        .absol-hero__tagline {
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}

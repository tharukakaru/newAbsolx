import React from "react";

export default function ReadMoreSectionHeader({
  label,
  title,
  className = "",
  innerClassName = "",
  titleClassName = "mb-8",
  showRailTick = false,
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {showRailTick && (
        <div
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 left-[-1.5rem] md:left-[-3rem] lg:left-[-4rem] h-[1px] bg-white/50 w-[1.2rem] md:w-[2.5rem] lg:w-[3.5rem]"
        />
      )}

      <div className={`flex flex-wrap items-baseline gap-x-4 md:gap-x-6 ${innerClassName}`}>
        <span className="font-archivo text-gray-300 text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.32em] uppercase font-medium shrink-0">
          {label}
        </span>

        <h2
          className={`font-yapari text-[41px] md:text-[53px] lg:text-[57px] font-bold text-white tracking-wide uppercase ${titleClassName}`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

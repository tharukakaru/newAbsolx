// "use client";

// import React, { useRef } from "react";
// import useTextShuffle from "../../Utils/useTextShuffle";

// export default function Title() {
//   const stableRef = useRef(null);
//   const universalRef = useRef(null);

//   useTextShuffle(stableRef);
//   useTextShuffle(universalRef);

//   return (
//     <div
//       className="
//     relative z-20
//     flex flex-col items-center text-center
//     mt-[8vh] 
//     sm:mt-[6vh]
//     md:mt-[2vh]
//     lg:mt-[-8vh]
//     xl:mt-[-10vh]
//     px-4
//   "
//     >
//       {/* STABLE OMNI */}
//       <h1
//         ref={stableRef}
//         data-initial="29733 99977"
//         data-target="STABLE OMNI"
//         className="
//     text-gradient font-azonix tracking-[0.13em]
//     whitespace-nowrap
//     text-[28px]  xs:text-[30px]  sm:text-[40px] md:text-[50px] lg:text-[75px]
//     -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 
//   "
//       />

//       {/* UNIVERSAL LEARNER */}
//       <h1
//         ref={universalRef}
//         data-initial="17413 10000 83345"
//         data-target="UNIVERSAL LEARNER"
//         className="
//   text-gradient2 font-azonix tracking-[0.13em]
//   whitespace-nowrap
//   text-[22px] xs:text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px]
// "
//       />
//     </div>
//   );
// }


import React, { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function Title() {
  const absolRef = useRef(null);
  const xRef = useRef(null);

  useTextShuffle(absolRef);
  useTextShuffle(xRef);

  return (
    <div
      className="
        relative z-20
        flex items-center justify-center
        mt-0
        px-4
      "
    >
      <div className="flex items-center gap-[clamp(14px,2vw,34px)] ml-[clamp(0px,0.25vw,4px)]">
        <h1
          ref={absolRef}
          data-initial="48290"
          data-target="ABSOL"
          className="
            relative inline-block isolate z-0
            absolx-gradient font-yapari-regular tracking-[0.2em]
            whitespace-nowrap leading-none 
            text-[clamp(42px,11.2vw,52px)]
            sm:text-[clamp(54px,6.9vw,100px)]

            before:content-['']
            before:absolute
            before:top-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:pointer-events-none
            before:z-[-1]
            before:bg-[radial-gradient(closest-side,rgba(0,0,0,0.72),rgba(0,0,0,0)_64%)]

            /* Mobile (default) */
            before:left-[-0.18em]
            before:w-[1.35em]
            before:h-[1.08em]
            before:blur-[8px]

            /* Small screens */
            sm:before:left-[-0.22em]
            sm:before:w-[1.52em]
            sm:before:h-[1.18em]
            sm:before:blur-[9px]

            /* Medium screens */
            md:before:left-[-0.26em]
            md:before:w-[1.72em]
            md:before:h-[1.28em]
            md:before:blur-[10px]

            /* Large screens */
            lg:before:left-[-0.32em]
            lg:before:w-[1.92em]
            lg:before:h-[1.38em]
            lg:before:blur-[11px]

            /* XL screens */
            xl:before:left-[-0.36em]
            xl:before:w-[2.04em]
            xl:before:h-[1.46em]
            xl:before:blur-[12px]
          "
        />
        <h1
          ref={xRef}
          data-initial="7"
          data-target="X"
          className="
            text-white font-yapari-regular tracking-[0.12em]
            whitespace-nowrap leading-none
            text-[clamp(42px,11.2vw,52px)]
            sm:text-[clamp(54px,6.9vw,100px)]
          "
        />
      </div>
    </div>
  );
}

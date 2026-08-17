import absolxLogo from "../../assets/absolxPNG.png";

function IconDownload({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconZap({ className = "" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function AbsolModelCard({ model }) {
  return (
    <article className="absol-model flex w-full flex-col">
      <div className="mb-3 w-full rounded-xl border border-[#FFFFFF] bg-transparent px-3 py-2">
        <div className="flex items-center gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black">
            <img src={absolxLogo} alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center gap-2">
              <h3 className="truncate text-sm font-bold tracking-wide text-[#F4F4F5]">{model.title}</h3>
              <span className="shrink-0 rounded-md bg-[#166534] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#4ADE80]">
                {model.badge}
              </span>
            </div>
            <p className="truncate text-xs text-[#FFFFFF]">{model.subtitle}</p>
            <p className="truncate text-[10px] text-[#CACAD0]">{model.sub2}</p>
          </div>
          <svg
            className="ml-5 shrink-0 text-white"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <button
        type="button"
        className="group mb-10 flex w-full items-center justify-center gap-2 rounded-lg border border-[#FFFFFF] bg-[#505050]/30 py-[13px] transition-colors hover:bg-[#505050]/45"
      >
        <IconDownload className="text-gray-400 transition-colors group-hover:text-white" />
        <span className="text-[13px] font-bold text-white">Download ({model.size})</span>
      </button>

      <div className="mb-4 flex items-center justify-between border-t border-b border-[#FFFFFF] px-2 pt-3 pb-3">
        <span className="text-sm font-bold tracking-wide text-white">Details</span>
      </div>

      <dl className="flex flex-col space-y-4 text-[13px]">
        <div className="flex items-center justify-between border-b border-[#FFFFFF] px-2 pb-4">
          <dt className="text-white">Type</dt>
          <dd className="flex flex-wrap items-center justify-end gap-2">
            {model.type.map((t) => (
              <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-black">
                {t}
              </span>
            ))}
          </dd>
        </div>

        <div className="flex items-center justify-between border-b border-[#FFFFFF] px-2 pb-4">
          <dt className="text-white">Stats</dt>
          <dd className="flex items-center gap-3 font-medium text-gray-300">
            <span className="inline-flex items-center gap-1">
              <IconDownload className="text-gray-400" />
              {model.stats.dl}
            </span>
            <span className="inline-flex items-center gap-1">
              <IconZap className="text-gray-400" />
              {model.stats.energy}
            </span>
          </dd>
        </div>

        <div className="flex items-center justify-between border-b border-[#FFFFFF] px-2 pb-4">
          <dt className="text-white">Reviews</dt>
          <dd className="font-medium">
            <span className="text-[#00ff66]">{model.reviews.text}</span>{" "}
            <span className="text-gray-500">{model.reviews.count}</span>
          </dd>
        </div>

        <div className="flex items-center justify-between border-b border-[#FFFFFF] px-2 pb-4">
          <dt className="text-white">Published</dt>
          <dd className="font-medium text-gray-300">{model.published}</dd>
        </div>

        <div className="flex items-center justify-between border-b border-[#FFFFFF] px-2 pb-4">
          <dt className="text-white">Base Model</dt>
          <dd className="font-bold text-[#4D79EA]">{model.baseModel}</dd>
        </div>

        <div className="flex items-center justify-between border-b border-[#FFFFFF] px-2 pb-4">
          <dt className="text-white">Usage Tips</dt>
          <dd className="rounded-[2px] bg-[#064E3B] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#34D399]">
            {model.usageTips}
          </dd>
        </div>

        <div className="flex items-center justify-between px-2 pb-4">
          <dt className="text-white">Req Spec</dt>
          <dd className="flex overflow-hidden rounded border border-[#FFFFFF]">
            {model.reqSpec.map((spec) => (
              <span
                key={spec}
                className="border-r border-[#FFFFFF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              >
                {spec}
              </span>
            ))}
            <span className="flex items-center px-2 text-white" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </dd>
        </div>
      </dl>
    </article>
  );
}

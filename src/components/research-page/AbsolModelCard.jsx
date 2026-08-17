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
      <div className="mb-3 border border-white/10 bg-[#0a0b10]/55 p-4 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="h-10 w-10 shrink-0 border border-white/10 bg-[#16171c]" />
            <div className="min-w-0">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-bold tracking-wide text-white">{model.title}</h3>
                <span className="border border-[#00ff66]/30 bg-[#008f39]/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#00ff66]">
                  {model.badge}
                </span>
              </div>
              <p className="truncate text-xs text-gray-300">{model.subtitle}</p>
              <p className="text-[10px] text-gray-500">{model.sub2}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="group mb-6 flex w-full items-center justify-center gap-2 border border-white/10 bg-[#16171c]/55 py-3 transition-colors hover:bg-[#1f2025]"
      >
        <IconDownload className="text-gray-400 transition-colors group-hover:text-white" />
        <span className="text-[13px] font-bold text-white">Download ({model.size})</span>
      </button>

      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-sm font-bold tracking-wide text-white">Details</span>
      </div>

      <dl className="flex flex-col space-y-4 text-[13px]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Type</dt>
          <dd className="flex flex-wrap items-center justify-end gap-2">
            {model.type.map((t) => (
              <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-black">
                {t}
              </span>
            ))}
          </dd>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Stats</dt>
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

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Reviews</dt>
          <dd className="font-medium">
            <span className="text-[#00ff66]">{model.reviews.text}</span>{" "}
            <span className="text-gray-500">{model.reviews.count}</span>
          </dd>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Published</dt>
          <dd className="font-medium text-gray-300">{model.published}</dd>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Base Model</dt>
          <dd className="font-bold text-[#4D79EA]">{model.baseModel}</dd>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Usage Tips</dt>
          <dd className="border border-[#00ff66]/30 bg-[#008f39]/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#00ff66]">
            {model.usageTips}
          </dd>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <dt className="text-gray-400">Req Spec</dt>
          <dd className="flex flex-wrap items-center justify-end gap-1">
            {model.reqSpec.map((spec) => (
              <span key={spec} className="border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                {spec}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default function MenuItem({ active, compact = false, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "Azonix",
        fontSize: compact ? "clamp(8px, 0.58vw, 9px)" : "12px",
        fontWeight: 400,
        lineHeight: compact ? "12px" : "16px",
        letterSpacing: compact ? "1.05px" : "1.45px",
        textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      className={`
        uppercase whitespace-nowrap text-center transition-colors duration-200
        ${active ? "text-[#C7D65A]" : "text-[#F1F1F1]"}
        hover:text-[#C7D65A]
      `}
    >
      {children}
    </button>
  );
}

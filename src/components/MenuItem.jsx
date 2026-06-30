export default function MenuItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "Azonix",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "1.82px",
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

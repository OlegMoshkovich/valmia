type Lang = "en" | "de";

interface NavbarProps {
  lang: Lang;
  onToggle: () => void;
  transparent?: boolean;
}

const linkClass = "text-sm font-bold tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity";
const linkStyle = { fontFamily: "var(--font-cormorant)", color: "#2c2b28" };

export default function Navbar({ lang, onToggle, transparent }: NavbarProps) {
  return (
    <>
      {/* Mobile: floating pill */}
      <div
        className="md:hidden fixed top-3 left-4 right-4 flex items-center px-5 h-[50px] rounded-full transition-colors duration-300"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          zIndex: 100,
        }}
      >
        <div className="flex-1 flex justify-start">
          <a href="#about" className={linkClass} style={linkStyle}>
            {lang === "de" ? "Über uns" : "About"}
          </a>
        </div>
        <a href="#top">
          <img src="/logo.svg" alt="Logo" className="h-5 w-auto" />
        </a>
        <div className="flex-1 flex justify-end">
          <button onClick={onToggle} className={linkClass} style={linkStyle}>
            {lang === "de" ? "EN" : "DE"}
          </button>
        </div>
      </div>

      {/* Desktop: full-width bar */}
      <div
        className="hidden md:flex fixed top-0 left-0 right-0 items-center px-6 md:px-12 h-[60px] transition-colors duration-300"
        style={{
          backgroundColor: transparent ? "transparent" : "#efede1",
          zIndex: 100,
        }}
      >
        <div className="flex-1 flex justify-start">
          <a href="#about" className={linkClass} style={linkStyle}>
            {lang === "de" ? "Über uns" : "About"}
          </a>
        </div>
        <a href="#top">
          <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
        </a>
        <div className="flex-1 flex justify-end">
          <button onClick={onToggle} className={linkClass} style={linkStyle}>
            {lang === "de" ? "EN" : "DE"}
          </button>
        </div>
      </div>
    </>
  );
}

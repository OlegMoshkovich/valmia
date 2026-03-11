type Lang = "en" | "de";

interface NavbarProps {
  lang: Lang;
  onToggle: () => void;
}

const toggleStyle = { fontFamily: "var(--font-cormorant)", color: "#2c2b28" };

export default function Navbar({ lang, onToggle }: NavbarProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center px-8 h-[60px]"
      style={{ backgroundColor: "#efede1", zIndex: 100 }}
    >
      <div className="flex-1" />
      <a href="#top">
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
      </a>
      <div className="flex-1 flex justify-end">
        <button
          onClick={onToggle}
          className="text-sm font-bold tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity"
          style={toggleStyle}
        >
          {lang === "de" ? "EN" : "DE"}
        </button>
      </div>
    </div>
  );
}

type Overlay = "mission" | "concept" | null;

interface NavbarProps {
  onOpen: (overlay: Overlay) => void;
}

const navLink = "text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity cursor-pointer";
const navStyle = { fontFamily: "var(--font-cormorant)", color: "#2c2b28" };

export default function Navbar({ onOpen }: NavbarProps) {
  return (
    <div
      className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 h-[60px]"
      style={{ zIndex: 10 }}
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onOpen("mission"); }}
        className={navLink}
        style={navStyle}
      >
        Mission
      </a>
      <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onOpen("concept"); }}
        className={navLink}
        style={navStyle}
      >
        Concept
      </a>
    </div>
  );
}

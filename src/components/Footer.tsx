export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6">
      <div
        className="flex justify-between items-center"
        style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
      >
        <span className="text-xs tracking-wide">ValMia · Zurich</span>
        <a
          href="mailto:jasmin@valmia.ch"
          className="text-xs tracking-wide hover:opacity-60 transition-opacity"
          style={{ color: "#4a4845" }}
        >
          jasmin@valmia.ch
        </a>
      </div>
    </footer>
  );
}

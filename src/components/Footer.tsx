export default function Footer() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 px-8 pb-20 md:pb-5"
      style={{ zIndex: 5 }}
    >
      <div
        className="flex justify-between items-center pt-4"
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
    </div>
  );
}

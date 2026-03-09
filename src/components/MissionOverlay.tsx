interface MissionOverlayProps {
  onClose: () => void;
}

export default function MissionOverlay({ onClose }: MissionOverlayProps) {
  return (
    <div
      className="absolute inset-0 overflow-y-auto"
      style={{ backgroundColor: "#efede1", zIndex: 50 }}
    >
      <div className="min-h-full px-6 md:px-12 py-8 pb-24 md:pb-12 max-w-7xl mx-auto">

        {/* Top bar */}
        <div
          className="flex justify-between items-start mb-6"
          style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
        >
          <span className="text-sm">Mission</span>
          <button
            onClick={onClose}
            className="text-sm tracking-widest uppercase font-bold opacity-40 hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
          >
            Close
          </button>
        </div>
        <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

        {/* Headline + tagline */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 mb-12">
          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-4 md:mb-0"
            style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
          >
            Strengthening Village Life & Tourism Together
          </h1>
          <div className="flex items-start md:pt-2">
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              Small alpine destinations are evolving, from places people visit to places people feel connected to.
            </p>
          </div>
        </div>

        {/* Image + body */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 mb-16 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img src="/mission.png" alt="Skiers in the mountains" className="w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              Connecting visitors with locals can be{" "}
              <strong style={{ color: "#2c2b28" }}>extremely valuable for small touristic destinations.</strong>{" "}
              Especially mountain villages that are perfectly positioned to create a next generation of touristic experiences.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              The benefits go far beyond "nice experiences" — they directly affect{" "}
              <strong style={{ color: "#2c2b28" }}>economic resilience, identity preservation, and long-term attractiveness.</strong>
            </p>
          </div>
        </div>

        <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

        {/* Opportunity section */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 mb-12">
          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-4 md:mb-0"
            style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
          >
            The Opportunity Centered on Connection
          </h1>
          <div className="flex items-start md:pt-2">
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              Human Connection creates value both socially and economically.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img src="/opportunity.png" alt="Hikers on a mountain" className="w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p
              className="text-base font-light"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              When guests engage beyond accommodation:
            </p>
            <ul className="space-y-2">
              {[
                "Stays become more meaningful",
                "Visitors return more often",
                "Local businesses and residents benefit directly",
                "Tourism feels more inclusive",
                "Village identity becomes a competitive advantage",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-base font-light"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#4a4845" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

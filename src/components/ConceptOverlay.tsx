interface ConceptOverlayProps {
  onClose: () => void;
}

const columns = [
  {
    title: "Local Conditions & Orientation",
    subtitle: "Helping residents and guests stay informed.",
    items: ["Weather overview", "Snow & Nordic skiing reports", "Walking and hiking conditions", "Ski slope status"],
  },
  {
    title: "Events & Village Life",
    subtitle: "Making local activities more visible.",
    items: ["Local events and gatherings", "Club activities", "Cultural and seasonal happenings", "Municipal announcements"],
  },
  {
    title: "Community Exchange",
    subtitle: "Strengthening neighborly support.",
    items: ["Digital pinboard", "Buy & sell marketplace", "Lost & found", "Communal information sharing"],
  },
  {
    title: "Neighbour Support & Everyday Help",
    subtitle: "Encouraging mutual support within the village.",
    items: ["Help requests (e.g. groceries for elderly residents)", "Offering or requesting lifts", "Small everyday assistance", "Strengthening reliance on each other"],
  },
  {
    title: "Local Network & Important Information",
    subtitle: "Easy access to essential contacts.",
    items: ["Local businesses & services", "Clubs and associations", "Important contacts", "Municipal information"],
  },
];

function FunctionColumn({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return (
    <div className="pl-4" style={{ borderLeft: "1px solid #c8c4b4" }}>
      <h3
        className="text-xl font-light mb-3"
        style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
      >
        {title}
      </h3>
      <p
        className="text-sm font-light mb-4"
        style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
      >
        {subtitle}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-light"
            style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
          >
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#4a4845" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ConceptOverlay({ onClose }: ConceptOverlayProps) {
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
          <span className="text-sm">Our current concepts</span>
          <button
            onClick={onClose}
            className="text-sm tracking-widest font-bold uppercase opacity-40 hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
          >
            Close
          </button>
        </div>
        <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

        <h1
          className="text-3xl md:text-5xl font-light leading-tight mb-10 md:mb-16"
          style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
        >
          A Calm Companion for Residents and Visitors
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 gap-10 mb-16">
          <div>
            <h2
              className="text-xl md:text-2xl font-light mb-4"
              style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
            >
              Local and Seasonal living
            </h2>
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              A curated layer that reflects the place: essentials nearby, seasonal guides and nature cues support a slower, more grounded way of living | helping residents and visitors make the most of the lake and forest as part of everyday life.
            </p>
          </div>
          <div>
            <h2
              className="text-xl md:text-2xl font-light mb-4"
              style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
            >
              Events
            </h2>
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
            >
              A simple way to host and join small moments | coffee on the rooftop, a forest walk, a kids playdate. Clear RSVPs make planning effortless, while event updates stay contained and respectful.
            </p>
          </div>
        </div>

        <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

        <h1
          className="text-3xl md:text-5xl font-light leading-tight mb-10 md:mb-12"
          style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
        >
          Possible Functions Supporting Village Life
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {columns.slice(0, 3).map((col) => (
            <FunctionColumn key={col.title} {...col} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {columns.slice(3).map((col) => (
            <FunctionColumn key={col.title} {...col} />
          ))}
        </div>

      </div>
    </div>
  );
}

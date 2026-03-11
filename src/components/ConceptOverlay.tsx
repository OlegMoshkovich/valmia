interface ConceptOverlayProps {
  onClose: () => void;
  lang: "en" | "de";
}

const content = {
  en: {
    label: "Our current concepts",
    close: "Close",
    heading: "A Calm Companion for Residents and Visitors",
    sections: [
      {
        title: "Local and Seasonal Living",
        body: "A curated layer that reflects the place: essentials nearby, seasonal guides and nature cues support a slower, more grounded way of living — helping residents and visitors make the most of the landscape as part of everyday life.",
      },
      {
        title: "Events",
        body: "A simple way to host and join small moments — coffee on the rooftop, a forest walk, a kids playdate. Clear RSVPs make planning effortless, while event updates stay contained and respectful.",
      },
    ],
    functionsHeading: "Possible Functions Supporting Village Life",
    columns: [
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
        subtitle: "Strengthening neighbourly support.",
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
    ],
  },
  de: {
    label: "Unsere aktuellen Konzepte",
    close: "Schließen",
    heading: "Ein ruhiger Begleiter für Einheimische und Gäste",
    sections: [
      {
        title: "Lokales und saisonales Leben",
        body: "Eine kuratierte Ebene, die den Ort widerspiegelt: nahegelegene Anlaufstellen, saisonale Guides und Naturhinweise unterstützen eine ruhigere, geerdetere Lebensweise — und helfen Einheimischen und Gästen, die Landschaft als Teil des Alltags zu erleben.",
      },
      {
        title: "Veranstaltungen",
        body: "Eine einfache Möglichkeit, kleine Momente zu gestalten und daran teilzunehmen — Kaffee auf der Terrasse, ein Waldspaziergang, ein Spielenachmittag für Kinder. Klare Zusagen machen die Planung mühelos, während Veranstaltungsupdates rücksichtsvoll bleiben.",
      },
    ],
    functionsHeading: "Mögliche Funktionen zur Unterstützung des Dorflebens",
    columns: [
      {
        title: "Lokale Verhältnisse & Orientierung",
        subtitle: "Einheimische und Gäste gut informiert halten.",
        items: ["Wetterübersicht", "Schnee- & Langlaufberichte", "Wander- und Spazierwegebedingungen", "Pistenstatus"],
      },
      {
        title: "Veranstaltungen & Dorfleben",
        subtitle: "Lokale Aktivitäten sichtbarer machen.",
        items: ["Lokale Veranstaltungen und Treffen", "Vereinsaktivitäten", "Kulturelle und saisonale Ereignisse", "Gemeindliche Bekanntmachungen"],
      },
      {
        title: "Gemeinschaftsaustausch",
        subtitle: "Nachbarschaftliche Unterstützung stärken.",
        items: ["Digitales Schwarzes Brett", "Kauf- & Verkaufsmarktplatz", "Fundsachen", "Gemeinschaftliche Informationen"],
      },
      {
        title: "Nachbarschaftshilfe & Alltagsunterstützung",
        subtitle: "Gegenseitige Hilfe im Dorf fördern.",
        items: ["Hilfeanfragen (z.B. Einkäufe für ältere Bewohner)", "Mitfahrgelegenheiten anbieten oder suchen", "Kleine Alltagshilfen", "Aufeinander verlassen können"],
      },
      {
        title: "Lokales Netzwerk & wichtige Infos",
        subtitle: "Einfacher Zugang zu wichtigen Kontakten.",
        items: ["Lokale Betriebe & Dienstleistungen", "Vereine und Verbände", "Wichtige Kontakte", "Gemeinschaftliche Informationen"],
      },
    ],
  },
};

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

export default function ConceptOverlay({ onClose, lang }: ConceptOverlayProps) {
  const t = content[lang];

  return (
    <>
      {/* Mobile-only full-page dark backdrop */}
      <div
        className="md:hidden fixed inset-0"
        style={{ backgroundColor: "rgba(44, 43, 40, 0.65)", zIndex: 150 }}
      />

      {/* Panel: mobile = 90% wide centered card; desktop = full screen */}
      <div
        className="fixed flex flex-col overflow-hidden
                    left-[5%] right-[5%] top-[5%] bottom-4 border border-[#c8c4b4] rounded-xl
                    md:inset-0 md:rounded-none md:border-0 md:overflow-visible"
        style={{ backgroundColor: "#efede1", zIndex: 160 }}
      >
        {/* Sticky top bar */}
        <div
          className="flex-shrink-0 px-6 md:px-12 pt-6 md:pt-8"
          style={{ backgroundColor: "#efede1" }}
        >
          <div
            className="flex justify-between items-start mb-6"
            style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
          >
            <span className="text-sm">{t.label}</span>
            <button
              onClick={onClose}
              className="text-sm tracking-widest font-bold uppercase opacity-40 hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
            >
              {t.close}
            </button>
          </div>
          <hr style={{ borderColor: "#c8c4b4" }} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
        <div className="px-6 md:px-12 pt-10 pb-16 md:pb-12 max-w-7xl mx-auto">

          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-10 md:mb-16"
            style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
          >
            {t.heading}
          </h1>

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 gap-10 mb-16">
            {t.sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-xl md:text-2xl font-light mb-4"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-base font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

          <h1
            className="text-3xl md:text-5xl font-light leading-tight mb-10 md:mb-12"
            style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
          >
            {t.functionsHeading}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {t.columns.slice(0, 3).map((col) => (
              <FunctionColumn key={col.title} {...col} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.columns.slice(3).map((col) => (
              <FunctionColumn key={col.title} {...col} />
            ))}
          </div>

        </div>
        </div>
      </div>
    </>
  );
}

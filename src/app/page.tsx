"use client";

import { useState } from "react";

type Overlay = "mission" | "concept" | null;

export default function Home() {
  const [overlay, setOverlay] = useState<Overlay>(null);

  const navLink = "text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity cursor-pointer";
  const navStyle = { fontFamily: "var(--font-cormorant)", color: "#2c2b28" };

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "#efede1" }}>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 h-[60px]" style={{ zIndex: 10 }}>
        <div className="flex items-center gap-8">
          <a href="#" onClick={(e) => { e.preventDefault(); setOverlay("mission"); }} className={navLink} style={navStyle}>
            Mission
          </a>
        </div>
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
        <a href="#" onClick={(e) => { e.preventDefault(); setOverlay("concept"); }} className={navLink} style={navStyle}>
          Concept
        </a>
      </div>

      {/* Center mockup */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/MockUp.png" alt="MockUp" className="max-h-[60vh] max-w-[60vw] object-contain" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="mt-[55vh] md:mt-[70vh] text-md font-normal tracking-wide" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
          coming soon ...
        </div>
      </div>

      {/* About overlay — commented out
      {overlay === "about" && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#efede1", zIndex: 50 }}
          onClick={() => setOverlay(null)}
        >
          <div className="text-center px-8 max-w-xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto mx-auto mb-8" />
            <p className="text-2xl font-light mb-5 leading-snug" style={{ color: "#2c2b28" }}>
              A quiet companion for those who love their village
            </p>
            <p className="text-base font-light leading-relaxed" style={{ color: "#4a4845" }}>
              ValMia connects residents, second-home owners, and visitors through local events, seasonal guides, and genuine community, without the noise of mass tourism platforms.
            </p>
          </div>
        </div>
      )}
      */}

      {/* Concept overlay */}
      {overlay === "concept" && (
        <div className="absolute inset-0 overflow-y-auto" style={{ backgroundColor: "#efede1", zIndex: 50 }}>
          <div className="min-h-full px-12 py-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-6" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
              <span className="text-sm">Our current concepts</span>
              <button
                onClick={() => setOverlay(null)}
                className="text-sm tracking-widest uppercase opacity-40 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
              >
                Close
              </button>
            </div>
            <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

            <h1 className="text-5xl font-light leading-tight mb-16 max-w-2xl" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>
              A Calm Companion for<br />Residents and Visitors
            </h1>

            <div className="grid grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-2xl font-light mb-6" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>
                  Local and<br />Seasonal living
                </h2>
                <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                  A curated layer that reflects the place: essentials nearby, seasonal guides and nature cues support a slower, more grounded way of living | helping residents and visitors make the most of the lake and forest as part of everyday life.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-light mb-6" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>
                  Events
                </h2>
                <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                  A simple way to host and join small moments | coffee on the rooftop, a forest walk, a kids playdate. Clear RSVPs make planning effortless, while event updates stay contained and respectful.
                </p>
              </div>
            </div>

            <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

            {/* Possible Functions */}
            <h1 className="text-5xl font-light leading-tight mb-12" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>
              Possible Functions Supporting Village Life
            </h1>

            {/* Top row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12">
              {[
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
              ].map((col) => (
                <div key={col.title} className="pl-4" style={{ borderLeft: "1px solid #c8c4b4" }}>
                  <h3 className="text-xl font-light mb-3" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>{col.title}</h3>
                  <p className="text-sm font-light mb-4" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>{col.subtitle}</p>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#4a4845" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {[
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
              ].map((col) => (
                <div key={col.title} className="pl-4" style={{ borderLeft: "1px solid #c8c4b4" }}>
                  <h3 className="text-xl font-light mb-3" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>{col.title}</h3>
                  <p className="text-sm font-light mb-4" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>{col.subtitle}</p>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#4a4845" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mission overlay */}
      {overlay === "mission" && (
        <div className="absolute inset-0 overflow-y-auto" style={{ backgroundColor: "#efede1", zIndex: 50 }}>
          <div className="min-h-full px-12 py-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-start mb-6" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
              <span className="text-sm">Mission</span>
              <button
                onClick={() => setOverlay(null)}
                className="text-sm tracking-widest uppercase font-bold opacity-40 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}
              >
                Close
              </button>
            </div>
            <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

            {/* Headline + tagline */}
            <div className="grid grid-cols-2 gap-16 mb-16">
              <h1 className="text-5xl font-light leading-tight" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>
                Strengthening Village<br />Life & Tourism Together
              </h1>
              <div className="flex items-start pt-2">
                <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                  Small alpine destinations are evolving, from places people visit to places people feel connected to.
                </p>
              </div>
            </div>

            {/* Image + body */}
            <div className="grid grid-cols-2 gap-16 mb-20">
              <div className="rounded-lg overflow-hidden">
                <img src="/mission.png" alt="Skiers in the mountains" className="w-full h-auto" />
              </div>
              <div className="flex flex-col justify-center gap-8">
                <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                  Connecting visitors with locals can be <strong style={{ color: "#2c2b28" }}>extremely valuable for small touristic destinations.</strong>{" "}
                  Especially mountain villages that are perfectly positioned to create a next generation of touristic experiences.
                </p>
                <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                  The benefits go far beyond "nice experiences" — they directly affect <strong style={{ color: "#2c2b28" }}>economic resilience, identity preservation, and long-term attractiveness.</strong>
                </p>
              </div>
            </div>

            <hr style={{ borderColor: "#c8c4b4" }} className="mb-10" />

            {/* Opportunity section */}
            <div className="grid grid-cols-2 gap-16 mb-16">
              <h1 className="text-5xl font-light leading-tight" style={{ fontFamily: "var(--font-cormorant)", color: "#2c2b28" }}>
                The Opportunity<br />Centered on Connection
              </h1>
              <div className="flex items-start pt-2">
                <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                  Human Connection creates value both socially and economically.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div className="rounded-lg overflow-hidden">
                <img src="/opportunity.png" alt="Hikers on a mountain" className="w-full h-auto" />
              </div>
              <div className="flex flex-col justify-center gap-6">
                <p className="text-base font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
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
                    <li key={item} className="flex items-start gap-2 text-base font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#4a4845" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

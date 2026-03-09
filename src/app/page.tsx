"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionOverlay from "@/components/MissionOverlay";
import ConceptOverlay from "@/components/ConceptOverlay";

type Overlay = "mission" | "concept" | null;

export default function Home() {
  const [overlay, setOverlay] = useState<Overlay>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "#efede1" }}>

      <Navbar onOpen={setOverlay} />

      {/* Center mockup */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/MockUp.png" alt="MockUp" className="max-h-[60vh] w-[90vw] md:max-w-[60vw] md:w-auto object-contain" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="mt-[55vh] md:mt-[70vh] text-md font-normal tracking-wide" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4845" }}>
          coming soon ...
        </div>
      </div>

      <Footer />

      {overlay === "mission" && <MissionOverlay onClose={() => setOverlay(null)} />}
      {overlay === "concept" && <ConceptOverlay onClose={() => setOverlay(null)} />}

    </div>
  );
}

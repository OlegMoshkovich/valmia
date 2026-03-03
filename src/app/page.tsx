"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, [isDesktop]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" onClick={() => setShowOverlay(true)}>
      {isDesktop ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute top-0 left-0 w-full object-cover"
          style={{ height: "110%", WebkitMediaControls: "none" } as React.CSSProperties}
          src="/background.mp4"
        />
      ) : (
        <img
          src="/background_1.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}


      {/* Logo top-center */}
      <div className="absolute top-[20px] left-0 right-0 flex justify-center">
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
      </div>

      {/* Center mockup */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/MockUp.png" alt="MockUp" className="max-h-[60vh] max-w-[60vw] object-contain" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="mt-[55vh] md:mt-[70vh] text-white text-md font-normal tracking-wide drop-shadow-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
        coming soon ...
        </div>
      </div>


      {/* Bottom-right */}
      {/* <div className="absolute bottom-8 right-8 text-[#A3C2C9] text-sm">
        03.2026
      </div> */}

      {/* Click overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#efede1", zIndex: 50 }}
          onClick={(e) => { e.stopPropagation(); setShowOverlay(false); }}
        >
          <div className="text-center px-8 max-w-xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto mx-auto mb-8" />
            <p className="text-2xl font-light mb-5 leading-snug" style={{ color: "#2c2b28" }}>
              A quiet companion for those who love their village
            </p>
            <p className="text-base font-light leading-relaxed" style={{ color: "#4a4845" }}>
              Valmia connects residents, second-home owners, and visitors through local events, seasonal guides, and genuine community, without the noise of mass tourism platforms.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

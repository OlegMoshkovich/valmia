"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

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
    <div className="relative min-h-screen w-full overflow-hidden">
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
        <div className="mt-[55vh] md:mt-[70vh] text-white text-sm font-light tracking-wide drop-shadow-lg font-taviraj">
          coming soon ...
        </div>
      </div>


      {/* Bottom-right */}
      {/* <div className="absolute bottom-8 right-8 text-[#A3C2C9] text-sm">
        03.2026
      </div> */}
    </div>
  );
}

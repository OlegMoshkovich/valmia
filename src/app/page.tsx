export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full object-cover"
        style={{ height: "110%" }}
        src="/background.mp4"
      />


      {/* Logo top-center */}
      <div className="absolute top-[20px] left-0 right-0 flex justify-center">
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
      </div>

      {/* Center mockup */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/MockUp.png" alt="MockUp" className="max-h-[60vh] max-w-[60vw] object-contain" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="mt-[55vh] md:mt-[70vh]  text-white text-sm font-light tracking-wide drop-shadow-lg" >
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

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background_1.jpeg')" }}
    >
      {/* Top-left */}
      <div className="absolute top-8 left-8 text-white">
        <div className="text-xl font-light">ValMia</div>
      </div>


      {/* Bottom-right */}
      <div className="absolute bottom-8 right-8 text-white text-sm ">
       03.2026
      </div>
    </div>
  );
}

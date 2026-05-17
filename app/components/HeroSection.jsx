import banner from "../../public/banner.png";
import { MapPin, Calendar, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] flex items-center bg-slate-950 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-lighten pointer-events-none"
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundPosition: "center center",
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="blur-3xl absolute inset-0  z-0" />

      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Typography / Headings */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
            Experience the Future of <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88EF21] to-[#6bc417]">
              Mobility. Smart Car Rental.
            </span>
          </h1>

          <p className="text-gray-300 text-sm md:text-base max-w-lg font-medium leading-relaxed">
            Unlock unparalleled convenience with DriveFleets AI-powered fleet.
            Find your perfect ride in seconds.
          </p>

          {/* AI-Powered Search Bar Box */}
          
            {/* Submit Button */}
            <button className="bg-[#88EF21] hover:bg-[#76d11a] text-black font-extrabold px-6 py-4  rounded-xl flex items-center justify-center  transition-all duration-200 uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(136,239,33,0.3)] shrink-0 active:scale-95">
              <span>Explore Cars</span>
             
            </button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

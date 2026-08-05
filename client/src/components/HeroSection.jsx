import React from "react";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/backgroundImage.png")' }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-32">
        <div className="max-w-2xl">
          {/* Movie Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            Dhamaal 4
          </h1>

          {/* Movie Info */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-300">
            <span className="text-lg">Comedy • Adventure</span>

            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span className="text-lg">2026</span>
            </div>

            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              <span className="text-lg">2h 20m</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Get ready for nonstop laughter as the iconic Dhamaal gang returns
            with bigger adventures, hilarious twists, and family-friendly
            entertainment. Experience the madness on the big screen and book
            your tickets now with CinemaX.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/movies")}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:bg-primary-dull"
          >
            Explore Movies
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

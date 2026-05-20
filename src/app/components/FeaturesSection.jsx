import React from "react";
import { Calendar, CarFront, ShieldCheck, Tag } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <Calendar className="text-lime-400 w-8 h-8 md:w-10 md:h-10 shrink-0" />
      ),
      title: "Flexible Booking",
      description: "Book your car in just a few clicks.",
    },
    {
      icon: <CarFront className="text-lime-400 w-8 h-8 md:w-10 md:h-10 shrink-0" />,
      title: "Wide Variety",
      description: "Choose from economy to luxury cars.",
    },
    {
      icon: (
        <ShieldCheck className="text-lime-400 w-8 h-8 md:w-10 md:h-10 shrink-0" />
      ),
      title: "Insurance Included",
      description: "All rentals include insurance for peace of mind.",
    },
    {
      icon: <Tag className="text-lime-400 w-8 h-8 md:w-10 md:h-10 shrink-0" />,
      title: "No Hidden Fees",
      description: "Transparent pricing. No surprises.",
    },
  ];

  return (
    <section className=" w-full  py-8 px-4 md:px-8">
     
      <div className="max-w-7xl mx-auto border  rounded-2xl border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 md:divide-x-0 lg:divide-x lg:divide-slate-800">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                index !== 0 ? "lg:pl-6" : ""
              } transition-all duration-400 hover:translate-y-[-2px]`}
            >
              {/* Icon Container */}
              <div className="p-1">{feature.icon}</div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-white font-bold text-base md:text-lg tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

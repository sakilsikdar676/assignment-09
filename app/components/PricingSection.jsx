import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "19",
      features: [
        { text: "Exclusive Access", active: true },
        { text: "Customized Experiences", active: false },
        { text: "Task and Activity Management", active: false },
        { text: "24/7 Email Support", active: false },
      ],
      isPopular: false,
    },
    {
      name: "Standard Plan",
      price: "29",
      features: [
        { text: "Exclusive Access", active: true },
        { text: "Customized Experiences", active: true },
        { text: "Task and Activity Management", active: false },
        { text: "24/7 Email Support", active: false },
      ],
      isPopular: false,
    },
    {
      name: "Pro Plan",
      price: "49",
      features: [
        { text: "Exclusive Access", active: true },
        { text: "Customized Experiences", active: true },
        { text: "Task and Activity Management", active: true },
        { text: "24/7 Email Support", active: true },
      ],
      isPopular: true, // এটি ডার্ক ব্যাকগ্রাউন্ড হবে
    },
    {
      name: "Premium Plan",
      price: "79",
      features: [
        { text: "Exclusive Access", active: true },
        { text: "Customized Experiences", active: true },
        { text: "Task and Activity Management", active: true },
        { text: "24/7 Email Support", active: true },
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="w-full  pb-20 font-serif">
      {/* 1. Header Banner Area (Image Component Placeholder) */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-neutral-900 flex items-center justify-center bg-cover bg-center"
        style={{
          // এখানে আপনার ব্ল্যাক কারের ইমেজ ইউআরএলটি বসিয়ে নিবেন
          backgroundImage: `url(https://images.pexels.com/photos/19220973/pexels-photo-19220973.jpeg)`,
          backgroundPosition: "center center",
          backgroundSize: "cover ",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
      >
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl font-normal tracking-widest uppercase">
            Pricing Plans
          </h1>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Section Title */}
        <div className="text-center  pt-16 pb-12 rounded-t-3xl shadow-lg border border-white/10 bg-white/10">
          <span className="text-[#c5a880] text-xs uppercase tracking-widest block mb-2">
            Subscription
          </span>
          <h2 className="text-3xl md:text-4xl text-neutral-300 font-semibold tracking-wide">
            Pricing Plans
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition-all duration-300 flex flex-col justify-between ${
                plan.isPopular
                  ? "bg-lime-400 text-black hover:shadow-2xl shadow-darkblue-200/30  scale-105 lg:-translate-y-4 border border-neutral-800"
                  : " border border-white/10 bg-white/5 shadow-md hover:shadow-xl shadow-lime-200/30 "
              }`}
            >
              {/* Card Top */}
              <div>
                {/* Price */}
                <div className="mb-6 flex items-baseline">
                  <span className="text-2xl font-light">$</span>
                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ml-1 ${plan.isPopular ? "text-black" : "text-white"}`}
                  >
                    /month
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-semibold mb-8 tracking-wide">
                  {plan.name}
                </h3>

                {/* Divider Line */}
                <div
                  className={`w-full h-[1px] mb-8 ${plan.isPopular ? "bg-neutral-800" : "bg-neutral-100"}`}
                />

                {/* Features List */}
                <ul className="space-y-4 mb-10 text-sm">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className={`flex items-start gap-3 ${
                        feature.active
                          ? plan.isPopular
                            ? "text-black"
                            : "text-white"
                          : plan.isPopular
                            ? "text-black"
                            : "text-white"
                      }`}
                    >
                      {/* Check Icon */}
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          feature.active
                            ? "text-green-600"
                            : plan.isPopular
                              ? "text-neutral-700"
                              : "text-neutral-200"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="leading-tight">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-4">
                <button
                  className={`w-full py-3 px-4 text-xs tracking-widest uppercase transition-colors duration-300 border ${
                    plan.isPopular
                      ? "bg-[#c5a880] text-white border-[#c5a880] hover:bg-[#b3956d]"
                      : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

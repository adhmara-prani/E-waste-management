import React from "react";

const features = [
  {
    title: "Smart Hardware Analysis",
    description:
      "Upload your device diagnostics and get detailed insights on performance and health.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-3-3v6m9 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Reuse Suggestions",
    description:
      "Get personalized recommendations for reusing old hardware — from gaming rigs to AI modeling.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Generative AI Insights",
    description:
      "Soon, leverage AI-powered recommendations for optimal hardware use and upgrades.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h6m-3 8a9 9 0 100-18 9 9 0 000 18z"
        ></path>
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section
      className="bg-[#d2daff] py-16 px-6 sm:px-12 lg:px-24"
      aria-labelledby="features-title"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="features-title"
          className="text-4xl font-bold text-indigo-900 mb-8"
        >
          Why Choose RE-juvenation?
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
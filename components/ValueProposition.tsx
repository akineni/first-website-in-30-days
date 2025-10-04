import React from "react";

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 gradient-text">
          Perfect for Beginners and Built to Get You Results
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Simple & Structured */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition duration-300">
            <div className="mb-6 flex justify-center">
              {/* Compass / Roadmap Icon */}
              <svg
                className="w-16 h-16 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 64 64"
              >
                <circle cx="32" cy="32" r="28" strokeWidth="3" />
                <polygon points="32,16 40,40 24,40" fill="currentColor" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-3">Simple & Structured</h3>
            <p>
              Follow a step-by-step roadmap designed for beginners with no coding experience needed.
            </p>
          </div>

          {/* Hands-On Projects */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition duration-300">
            <div className="mb-6 flex justify-center">
              {/* Laptop / Code Icon */}
              <svg
                className="w-16 h-16 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6a1 1 0 011-1h16a1 1 0 011 1v10H3V6zM2 18h20v2H2v-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 10h.01M15 10h.01M12 14h.01"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-3">Hands-On Projects</h3>
            <p>
              Create your first portfolio page, add interactive features, and build small web apps during the program.
            </p>
          </div>

          {/* Live Mentorship */}
          <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl transition duration-300">
            <div className="mb-6 flex justify-center">
              {/* People / Community Icon */}
              <svg
                className="w-16 h-16 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 64 64"
              >
                <circle cx="20" cy="24" r="8" strokeWidth="3" />
                <circle cx="44" cy="24" r="8" strokeWidth="3" />
                <path
                  d="M12 50c0-8 8-14 20-14s20 6 20 14v6H12z"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-3">Live Mentorship</h3>
            <p>
              Learn in live classes with expert guidance at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

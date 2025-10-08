import React from "react";
import { registerUrl } from "@/lib/config";

export default function RegisterCTA() {
  return (
    <section
      id="register"
      className="py-24 px-6 text-center bg-gray-100"
    >
      <h2 className="text-4xl font-extrabold mb-6 gradient-text">
        Register Now and Start Building Websites in 30 Days
      </h2>

      <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto">
        Seats are limited. Take the first step toward becoming a frontend developer today.
      </p>

      <a
        href={registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-gray-900 font-bold py-5 px-14 rounded-full shadow-2xl cta hover:bg-yellow-500 inline-block transform hover:scale-110 transition"
      >
        Register Now
      </a>
    </section>
  );
}

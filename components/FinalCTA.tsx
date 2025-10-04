import React from "react";

export default function FinalCTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center">
            {/* Background Circles */}
            <div className="absolute inset-0">
                <svg
                    className="w-full h-full opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                >
                    <circle
                        cx="400"
                        cy="400"
                        r="300"
                        fill="none"
                        stroke="white"
                        strokeWidth="80"
                        opacity="0.1"
                    />
                    <circle
                        cx="400"
                        cy="400"
                        r="200"
                        fill="none"
                        stroke="white"
                        strokeWidth="50"
                        opacity="0.15"
                    />
                    <circle
                        cx="400"
                        cy="400"
                        r="100"
                        fill="none"
                        stroke="white"
                        strokeWidth="30"
                        opacity="0.2"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Ready to Start Your Coding Journey?
                </h2>

                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    In just <span className="font-bold">30 days</span>, you'll go from 
                    beginner to building your own real website. 
                    Don't just browse the web; <span className="underline">create it</span>.
                </p>

                <a
                    href="#register"
                    className="bg-white text-gray-900 font-bold py-5 px-12 rounded-full shadow-2xl inline-block transform hover:scale-110 transition"
                >
                    Reserve Your Spot Now
                </a>

                <p className="mt-6 text-sm opacity-90">
                    Spots are limited. Don't miss your chance to start learning.
                </p>
            </div>
        </section>
    );
}

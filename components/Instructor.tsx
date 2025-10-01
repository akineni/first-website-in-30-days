import React from "react";

export default function Instructor() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-500">
            <img
              src="images/instructor.min.jpg"
              alt="Instructor Photo"
              className="w-full object-cover"
            />
          </div>
          <span className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-80 animate-pulse"></span>
          <span className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-70 animate-bounce"></span>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 gradient-text text-center md:text-left">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Hi, I’m{" "}
            <span className="font-bold text-purple-600">
              Eniola Akinlonu (Akineni)
            </span>{" "}
            — a passionate fullstack web developer and mentor. Over the past few
            years, I’ve developed and deployed websites and web apps for
            individuals and businesses, and I know how confusing coding can feel
            at the beginning.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            That’s why I created this{" "}
            <span className="font-semibold">Frontend in 30 Days</span> program —
            to help beginners move from zero to building their own websites step
            by step, without the overwhelm.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’ll be guiding you live, answering your questions, and making sure
            you leave with the confidence to call yourself a web developer.
          </p>
        </div>
      </div>
    </section>
  );
}

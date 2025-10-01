import React from "react";

const testimonials = [
    {
        name: "Tunde O.",
        role: "Beginner Student",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        border: "border-indigo-600",
        text: "This 30-day course gave me the confidence to build my first website. Amazing mentorship!",
    },
    {
        name: "Ada A.",
        role: "Student Developer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        border: "border-purple-600",
        text: "Live sessions and real projects made learning so much easier. I now have a working webpage!",
    },
    {
        name: "Emeka N.",
        role: "Junior Coder",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        border: "border-yellow-500",
        text: "In just 30 days, I went from zero knowledge to my first deployed website. Highly recommend!",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">
                    What Students Say
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className={`w-14 h-14 rounded-full border-2 ${t.border} mr-4`}
                                />
                                <div>
                                    <h3 className="font-bold">{t.name}</h3>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                            <p>{t.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

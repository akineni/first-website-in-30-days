import React from "react";
import Image from "next/image";

const testimonials = [
    {
        name: "Esther Olusoga",
        role: "Code Tutor",
        image: "/images/esther.jpeg",
        border: "border-indigo-600",
        text: "Learning from Eniola was an amazing experience. He explains coding from the ground up and makes sure you truly understand every step until you can code on your own.",
    },
    {
        name: "David Ikukoyi",
        role: "Frontend Developer",
        image: "/images/david.jpeg",
        border: "border-purple-600",
        text: "I've worked with Eniola and he's genuinely one of the best people to learn from. He really knows his onions and makes complex topics easy to understand. He's super approachable and always willing to help. I highly recommend!",
    },
    {
        name: "Fawaz Abdul",
        role: "Software Engineer",
        image: "/images/fawaz.png",
        border: "border-yellow-500",
        text: "Starting out as a coder can be overwhelming, but this program explains everything clearly and step by step. It's perfect for beginners who want to see real progress in 30 days.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">
                    {/* What Students Say */}
                    Trusted and Recommended by Others
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    className={`w-14 h-14 rounded-full border-2 ${t.border} mr-4`}
                                    width={128}
                                    height={128}
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

import React from "react";

const weeks = [
    {
        number: 1,
        title: "HTML Basics",
        color: "bg-indigo-100 text-indigo-600",
        topics: [
            "Understand page structure with headings and paragraphs",
            "Add links, lists, and images to your site",
            "Build your first simple personal webpage",
        ],
    },
    {
        number: 2,
        title: "CSS Fundamentals",
        color: "bg-purple-100 text-purple-600",
        topics: [
            "Work with colors, fonts, and spacing to style your site",
            "Use Flexbox & Grid to create modern layouts",
            "Transform your webpage into a clean, beautiful design",
        ],
    },
    {
        number: 3,
        title: "JavaScript Basics",
        color: "bg-pink-100 text-pink-600",
        topics: [
            "Learn variables, functions, loops, and events step by step",
            "Use DOM manipulation to make your site interactive",
            "Add features like clickable buttons and dynamic content",
        ],
    },
    {
        number: 4,
        title: "Final Project & Deployment",
        color: "bg-yellow-100 text-yellow-600",
        topics: [
            "Combine HTML, CSS, and JS into a polished project",
            "Put your website online with GitHub Pages",
            "Showcase your finished work in your personal portfolio",
        ],
    },
];

export default function Curriculum() {
    return (
        <section className="bg-gradient-to-b from-indigo-50 to-purple-100 py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16 gradient-text">
                    Your 4-Week Learning Path
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {weeks.map((week) => (
                        <div
                            key={week.number}
                            className="bg-white rounded-2xl shadow-md p-8 transform hover:scale-105 transition duration-300 hover:shadow-xl"
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold mr-4 ${week.color}`}
                                >
                                    {week.number}
                                </div>
                                <h3 className="font-bold text-2xl">{week.title}</h3>
                            </div>
                            <ul className="list-disc list-outside pl-6 text-gray-700 space-y-2">
                                {week.topics.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

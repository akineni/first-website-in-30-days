"use client";
import React, { useState } from "react";

const faqs = [
    {
        question: "Do I need prior coding experience?",
        answer:
            "Nope! This program is designed for complete beginners. We start from the very basics and guide you step by step until you can build and deploy your first website.",
    },
    {
        question: "What if I can't attend a live session?",
        answer:
            "Don't worry! All sessions will be recorded, and you'll get access to replays. You'll also be able to ask questions and get support afterward.",
    },
    {
        question: "How much time will I need each week?",
        answer:
            "Just 2-3 sessions per week (about 2 hours each). If you practice a little in between, you'll see real progress in just 30 days.",
    },
    {
        question: "What will I have by the end of the program?",
        answer:
            "You'll have a complete personal website built with HTML, CSS, and JavaScript — and it will be live on the internet to share with friends, employers, or clients.",
    },
    {
        question: "Do I need a laptop for this program?",
        answer:
            "Yes, having a laptop will make it much easier to follow along, practice coding, and build projects. However, if you don't have one yet, you can start learning with a smartphone using free coding apps or an online editor, then switch to a laptop as you progress.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-extrabold text-center mb-16 gradient-text">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 focus:outline-none cursor-pointer"
                            >
                                {faq.question}
                                <span className="ml-2 text-purple-600">
                                    {openIndex === index ? "–" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <p className="mt-4 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

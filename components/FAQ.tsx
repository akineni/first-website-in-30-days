"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer:
      "Not at all. This program is built for absolute beginners. We'll start from the very basics and guide you step by step until you can confidently build and launch your first website.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "No problem. Every session is recorded, and you'll get full access to the replays. You can also ask questions afterward and still get the support you need.",
  },
  {
    question: "How much time will I need each week?",
    answer:
      "We recommend 2 to 3 live sessions per week (about 2 hours each). Add a little practice in between, and you'll see real progress within just 30 days.",
  },
  {
    question: "What will I have by the end of the program?",
    answer:
      "By the end, you'll have a complete personal website built with HTML, CSS, and JavaScript, fully deployed online for friends, employers, or clients to see.",
  },
  {
    question: "Do I need a laptop for this program?",
    answer:
      "Yes, a laptop makes learning and building projects much easier. If you don't have one yet, you can start practicing with a smartphone using free coding apps or an online editor, then switch to a laptop when possible.",
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

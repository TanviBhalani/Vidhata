"use client";
import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function Accordion(): React.JSX.Element {
  const faqs: FAQ[] = [
    {
      question: "What industries do you work with?",
      answer:
        "We collaborate with businesses across various industries, including tech, eCommerce, finance, and lifestyle brands.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary, but most campaigns and branding projects take between 4 to 8 weeks, depending on scope and complexity.",
    },
    {
      question: "Do you offer custom marketing strategies?",
      answer:
        "Yes, we tailor every marketing strategy to your brand’s goals, audience, and budget for maximum impact.",
    },
    {
      question: "Can you manage our social media accounts?",
      answer:
        "Absolutely! We offer complete social media management — from content creation to performance analytics.",
    },
    {
      question: "What’s the first step to working with you?",
      answer:
        "Start by contacting us with your project idea — we’ll schedule a quick discovery call to understand your needs.",
    },
  ];

  // allow multiple open (store array of indexes)
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close if already open
        : [...prev, index] // add to open list
    );
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-5xl space-y-4 max-[300px]:max-w-[280px]">
        {faqs.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="border border-gray-800 bg-[#111] rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span className="text-2xl">{isOpen ? "×" : "+"}</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

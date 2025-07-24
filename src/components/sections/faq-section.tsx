'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What types of projects do you work on?',
    answer:
      'We work on a wide range of projects including web applications, mobile apps, custom software solutions, and enterprise systems. Our expertise spans from startups to large enterprise implementations.',
  },
  {
    question: 'How do you ensure project quality?',
    answer:
      'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client communication. Our team consists of senior developers with extensive experience.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on complexity and scope. Simple websites can be completed in 2-4 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive support and maintenance packages to ensure your application remains secure, updated, and performing optimally. This includes bug fixes, security updates, and feature enhancements.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We believe in transparent communication throughout the project lifecycle. We provide regular updates, use project management tools, and schedule weekly check-ins to ensure everyone is aligned.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern technologies including React, Next.js, Node.js, Python, Django, AWS, Docker, and more. We choose the best technology stack based on your specific project requirements.',
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="section-padding bg-tc-surface">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-tc-text md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-tc-text/80">
            Find answers to common questions about our services, process, and
            approach.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-tc-text">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-tc-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-tc-primary" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-tc-text/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-tc-text/80">Still have questions?</p>
          <button className="inline-flex items-center rounded-lg bg-tc-primary px-6 py-3 font-medium text-white transition-colors hover:bg-tc-secondary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

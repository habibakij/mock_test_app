import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How many free mock tests does ixamBee provide?",
      answer: "ixamBee provides over 100+ free mock tests across various competitive exams including NEET, JEE, SSC, Banking, Railways and more. These tests are regularly updated to match the latest exam patterns."
    },
    {
      question: "Are ixamBee's free practice tests according to latest exam pattern?",
      answer: "Yes, all our free practice tests are designed according to the latest exam patterns and syllabus. Our expert team regularly updates the tests to ensure they align with current examination standards and formats."
    },
    {
      question: "Are all Free Online Mock Tests available in English and Hindi Language?",
      answer: "Yes, most of our free online mock tests are available in both English and Hindi languages to cater to students from different linguistic backgrounds and help them prepare more effectively."
    },
    {
      question: "Will I get my performance analysis after attempting online mock test series at ixamBee?",
      answer: "Absolutely! After completing any mock test, you'll receive a detailed performance analysis including your score, time taken, accuracy rate, subject-wise breakdown, and comparison with other test takers."
    },
    {
      question: "Will I get detailed explanations for every question I attempt?",
      answer: "Yes, we provide comprehensive explanations for every question in our mock tests. These explanations include step-by-step solutions, concept clarifications, and tips to help you understand and remember the concepts better."
    },
    {
      question: "How will ixamBee's free mock tests be useful in exam preparation?",
      answer: "Our free mock tests help you familiarize with exam patterns, improve time management, identify weak areas, build confidence, and track your progress. Regular practice with our tests significantly improves your chances of success."
    },
    {
      question: "Will attempting free mock at ixamBee be sufficient?",
      answer: "While our free mock tests provide excellent practice, we recommend combining them with our premium test series and study materials for comprehensive preparation. Free tests are a great starting point to assess your current level."
    },
    {
      question: "Do I get all the mock test series for free?",
      answer: "We offer a substantial number of free mock tests, but our complete test series includes both free and premium tests. Premium tests offer advanced features like detailed analytics, personalized recommendations, and exclusive content."
    },
    {
      question: "When should I go for mock tests?",
      answer: "You should start taking mock tests once you've covered a significant portion of your syllabus. Ideally, begin 2-3 months before your exam and take tests regularly to track progress and improve performance."
    },
    {
      question: "Can I attempt a test multiple times?",
      answer: "Yes, you can attempt most of our free mock tests multiple times. This allows you to practice repeatedly, track your improvement, and work on areas where you need more practice."
    },
    {
      question: "Will I also get the analysis report for the attempted online mock test?",
      answer: "Yes, every attempted mock test comes with a comprehensive analysis report that includes your performance metrics, time analysis, accuracy rates, and detailed insights to help you improve."
    },
    {
      question: "When can I access the analysis report of the attempted online mock test?",
      answer: "You can access your analysis report immediately after completing and submitting your mock test. The report is available in your dashboard and can be viewed anytime for future reference."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our mock tests and platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-gray-900 font-medium text-lg pr-4">
                  Q. {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
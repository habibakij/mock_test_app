import React from 'react';
import TestCard from './TestCard';

const TestsSection = () => {
  const tests = [
    {
      title: "SPEED KOTA Foundation Test",
      author: "Kamlesh Sharma",
      date: "10 June 2020",
      questions: 50,
      marks: 200,
      minutes: 60,
      hasNegative: false,
      price: 'Free' as const,
      subjects: ["NEET", "Maths"]
    },
    {
      title: "Limit Test-1 JEE Main",
      author: "Kamlesh Sharma",
      date: "10 June 2020",
      questions: 50,
      marks: 200,
      minutes: 60,
      hasNegative: true,
      price: 450,
      subjects: ["Class 10", "Maths"]
    },
    {
      title: "Limit Test-2 JEE Main",
      author: "Kamlesh Sharma",
      date: "10 June 2020",
      questions: 50,
      marks: 200,
      minutes: 60,
      hasNegative: false,
      price: 450,
      subjects: ["Class 10", "Maths"]
    },
    {
      title: "Differentiation Test-1",
      author: "Kamlesh Sharma",
      date: "10 June 2020",
      questions: 50,
      marks: 200,
      minutes: 60,
      hasNegative: false,
      price: 'Free' as const,
      subjects: ["Maths"]
    },
    {
      title: "Differentiation Test-2",
      author: "Kamlesh Sharma",
      date: "10 June 2020",
      questions: 50,
      marks: 200,
      minutes: 60,
      hasNegative: false,
      price: 'Free' as const,
      subjects: ["Maths"]
    },
    {
      title: "Ch.10 Vector Test (XII Maths)",
      author: "Kamlesh Sharma",
      date: "10 June 2020",
      questions: 50,
      marks: 200,
      minutes: 60,
      hasNegative: false,
      price: 'Free' as const,
      subjects: ["Class 12", "Maths"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <TestCard key={index} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestsSection;
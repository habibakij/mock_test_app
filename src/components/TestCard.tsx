import React from 'react';
import { Clock, HelpCircle, CheckCircle, Minus } from 'lucide-react';

interface TestCardProps {
  title: string;
  author: string;
  date: string;
  questions: number;
  marks: number;
  minutes: number;
  hasNegative: boolean;
  price: number | 'Free';
  subjects: string[];
}

const TestCard: React.FC<TestCardProps> = ({
  title,
  author,
  date,
  questions,
  marks,
  minutes,
  hasNegative,
  price,
  subjects
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:transform hover:-translate-y-1">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500">By {author}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{questions}</p>
            <p className="text-xs text-gray-500">Questions</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{marks}</p>
            <p className="text-xs text-gray-500">Marks</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{minutes}</p>
            <p className="text-xs text-gray-500">Minutes</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Minus className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{hasNegative ? 'Yes' : 'No'}</p>
            <p className="text-xs text-gray-500">Negative</p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <p className="text-2xl font-bold text-gray-900">
          {price === 'Free' ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>₹{price}</span>
          )}
        </p>
      </div>

      {/* Subjects */}
      <div className="flex flex-wrap gap-2">
        {subjects.map((subject, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {subject}
          </span>
        ))}
        {/* Extra Button */}
  <button className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition">
    Testing
  </button>
      </div>
    </div>
  );
};

export default TestCard;
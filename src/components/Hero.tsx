import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 relative overflow-hidden">
      <div className="bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 opacity-20"></div>
        <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                One Step for your<br />
                <span className="text-orange-400">complete Learning</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                NEET, GATE, SSC, Banking, Railways & more
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Access Now
              </button>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Computer Monitor */}
                <div className="bg-white rounded-2xl shadow-2xl p-4 mb-4">
                  <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    
                    {/* Teacher Illustration */}
                    <div className="bg-orange-400 w-24 h-24 rounded-full flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">👨‍🏫</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-sm text-gray-600">
                      👥 80
                    </div>
                    <div className="absolute bottom-4 right-4 text-sm text-red-500 font-semibold">
                      🔴 LIVE
                    </div>
                  </div>
                </div>

                {/* Student at Desk */}
                <div className="flex items-end">
                  <div className="bg-blue-400 w-16 h-20 rounded-t-full flex items-center justify-center">
                    <div className="text-white text-lg">👩‍🎓</div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="bg-green-400 h-3 rounded mb-2"></div>
                    <div className="bg-yellow-600 h-8 rounded"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="text-white text-xs">⏰</div>
                </div>
                <div className="absolute top-12 left-8 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                  <div className="text-white text-xs">❤️</div>
                </div>
                <div className="absolute bottom-8 right-8 w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
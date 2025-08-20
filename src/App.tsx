import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TestsSection from './components/TestsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TestsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
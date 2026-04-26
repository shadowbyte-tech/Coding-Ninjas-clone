import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import StatsSection from './components/StatsSection';
import WhyUs from './components/WhyUs';
import ComparisonTable from './components/ComparisonTable';
import PlacementSection from './components/PlacementSection';
import Testimonials from './components/Testimonials';
import TrustedByLearners from './components/TrustedByLearners';
import LearningModel from './components/LearningModel';
import InteractivePath from './components/InteractivePath';
import CommunitySection from './components/CommunitySection';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';
import StickyCtaBar from './components/StickyCtaBar';
import IBMGenAIPage from './components/IBMGenAIPage';



function App() {
  const pathname = window.location.pathname;

  // IBM GenAI course page route
  if (pathname === '/programs/genai-ibm-advanced-certification' || pathname === '/ai-courses') {
    return <IBMGenAIPage />;
  }

  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>
        {/* 1. Hero - dark, phone mockup form */}
        <Hero />

        {/* 2. Courses - OUR COURSES watermark, 2 carousels */}
        <CoursesSection />

        {/* 3. Stats - scrolling 1400 alumni / 1Cr CTC / 128% hike */}
        <StatsSection />

        {/* 4. Why Us - WHY US watermark, Ankush video card + 3 pills */}
        <WhyUs />

        {/* 5. Placement - Our Ninjas at top companies, hover tooltips */}
        <PlacementSection />

        {/* 6. Comparison - The Coding Ninjas advantage table */}
        <ComparisonTable />

        {/* 7. Testimonials - Stories from people like you */}
        <Testimonials />

        {/* 8. Trusted - Rating badges + laurel wreath */}
        <TrustedByLearners />

        {/* 9. Learning Model - 3-stage Learn/Excel/Standout */}
        <LearningModel />

        {/* 10. ADVANCED WOW FACTOR: Interactive Career Path Node Map */}
        <InteractivePath />

        {/* 11. Community - 10X Club, CXO talks, Hackathons */}
        <CommunitySection />

        {/* 11. Media - In The News + partner logos */}
        <MediaSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
}

export default App;

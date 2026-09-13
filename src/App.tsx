import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import WhatsAppExperience from './components/WhatsAppExperience';
import AnalyticsSection from './components/AnalyticsSection';
import MultiBusiness from './components/MultiBusiness';
import TrustSection from './components/TrustSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <WhatsAppExperience />
        <AnalyticsSection />
        <MultiBusiness />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

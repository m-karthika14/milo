import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TransformSection from './components/TransformSection';
import HowItWorks from './components/HowItWorks';
import Philosophy from './components/Philosophy';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <TransformSection />
        <HowItWorks />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import { useRef } from 'react';
import HeroVisual from './HeroVisual';
import ParticleField from './ParticleField';
import { isReducedMotion, scrollToId } from '../utils/scrollTo';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  function handleWatchDemo() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.scrollIntoView({
      behavior: isReducedMotion() ? 'auto' : 'smooth',
      block: 'center',
    });
    stage.classList.remove('pulse');
    void stage.offsetWidth;
    stage.classList.add('pulse');
  }

  return (
    <section className="hero" id="top" ref={heroRef}>
      <ParticleField heroRef={heroRef} />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="badge">
            <span className="badge-dot" />
            Automated review requests for local businesses
          </span>
          <h1 className="headline">
            Turn happy customers
            <br />
            into <span className="glow-text">5-star reviews.</span>
          </h1>
          <p className="sub">
            Your customers already love your business.
            <br />
            We make it effortless for them to tell Google.
          </p>
          <div className="cta-row">
            <a
              href="#how-it-works"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('#how-it-works');
              }}
            >
              See How It Works <span className="arrow">→</span>
            </a>
            <button className="btn btn-ghost" type="button" onClick={handleWatchDemo}>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <HeroVisual ref={stageRef} />
        </div>
      </div>
    </section>
  );
}

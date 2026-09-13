import { useRef } from 'react';
import HeroVisual from './HeroVisual';
import ParticleField from './ParticleField';
import AnimatedNumber from './AnimatedNumber';
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
    <section className="hero dark-surface" id="top" ref={heroRef}>
      <ParticleField heroRef={heroRef} />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="badge">
            <span className="badge-dot" />
            For cafés, restaurants, salons &amp; hotels
          </span>
          <h1 className="headline">
            Turn every customer visit into a <span className="accent-word">Google Review</span>.
          </h1>
          <p className="sub">
            Milo automatically follows up with your customers on WhatsApp, collects feedback, and
            helps happy customers leave a Google review — without your staff having to ask.
          </p>
          <div className="cta-row">
            <a
              href="#final-cta"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('#final-cta');
              }}
            >
              Start with Milo <span className="arrow">→</span>
            </a>
            <button className="btn btn-ghost" type="button" onClick={handleWatchDemo}>
              See how it works
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">
                <span className="up">+</span>
                <AnimatedNumber value={38} suffix="%" />
              </span>
              <span className="hero-stat-label">Review rate</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">
                <AnimatedNumber value={1284} />
              </span>
              <span className="hero-stat-label">Customers reached</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">
                <AnimatedNumber value={427} />
              </span>
              <span className="hero-stat-label">Reviews generated</span>
            </div>
            <p className="hero-stats-note">Example results from an active café account.</p>
          </div>
        </div>

        <div className="hero-visual">
          <HeroVisual ref={stageRef} />
        </div>
      </div>
    </section>
  );
}

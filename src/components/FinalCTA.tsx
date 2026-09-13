import Reveal from './Reveal';
import { scrollToId } from '../utils/scrollTo';

export default function FinalCTA() {
  return (
    <section className="section-final dark-surface" id="final-cta">
      <div className="final-glow" />
      <div className="section-inner">
        <Reveal as="h2" className="final-headline">
          Your next great review could already be a customer away.
        </Reveal>
        <Reveal as="p" className="final-sub" delay={0.1}>
          Automate your customer follow-up with Milo.
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#top"
            className="btn btn-primary btn-large"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('#top');
            }}
          >
            Get started with Milo <span className="arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

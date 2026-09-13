import Reveal from './Reveal';
import { scrollToId } from '../utils/scrollTo';

export default function FinalCTA() {
  return (
    <section className="section-final" id="final-cta">
      <div className="final-glow" />
      <div className="section-inner">
        <Reveal as="h2" className="final-headline">
          More happy customers.
          <br />
          More proof.
          <br />
          More growth.
        </Reveal>
        <Reveal as="p" className="final-sub" delay={0.1}>
          Turn every great customer experience into an opportunity to build your reputation.
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
            Get Started <span className="arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

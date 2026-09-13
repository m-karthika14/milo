import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

export default function TransformSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      setSolved(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            setTimeout(() => setSolved(true), 500);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -40px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-transform" id="transform">
      <div className="section-inner">
        <Reveal as="h2" className="section-heading">
          One simple message.
          <br />
          A better reputation.
        </Reveal>
        <Reveal as="p" className="section-sub">
          Most happy customers never leave a review simply because nobody asks. Automate the
          moment while the experience is still fresh.
        </Reveal>

        <div
          ref={wrapRef}
          className={['diagram-wrap', 'reveal-up', visible ? '' : 'pending', solved ? 'solved' : '']
            .filter(Boolean)
            .join(' ')}
        >
          <div className="diagram diagram-problem">
            <div className="d-node">Customer leaves store</div>
            <div className="d-arrow">↓</div>
            <div className="d-node muted">No one asks</div>
            <div className="d-arrow">↓</div>
            <div className="d-node lost">Opportunity lost</div>
          </div>
          <div className="diagram diagram-solution">
            <div className="d-node accent">Customer leaves store</div>
            <div className="d-arrow accent">↓</div>
            <div className="d-node accent">WhatsApp message</div>
            <div className="d-arrow accent">↓</div>
            <div className="d-node accent">Google review</div>
            <div className="d-arrow accent">↓</div>
            <div className="d-node win">More social proof</div>
          </div>
        </div>
      </div>
    </section>
  );
}

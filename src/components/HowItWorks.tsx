import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const steps = [
  { num: '01', title: 'Customer visits', desc: 'Customer completes their purchase or visit.' },
  {
    num: '02',
    title: 'Milo follows up',
    desc: 'Milo automatically sends a personalized WhatsApp message.',
  },
  {
    num: '03',
    title: 'Happy customers review',
    desc: 'Satisfied customers are guided to leave a Google review.',
  },
];

export default function HowItWorks() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-steps" id="how-it-works">
      <div className="section-inner">
        <span className="eyebrow">How it works</span>
        <Reveal as="h2" className="section-heading">
          From visit to review, automatically.
        </Reveal>

        <div className="steps-row" ref={rowRef}>
          <div className={`steps-line ${drawn ? 'drawn' : ''}`} />
          {steps.map((step, i) => (
            <Reveal key={step.num} className="step" delay={i * 0.12}>
              <span className="step-num-badge">{step.num}</span>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

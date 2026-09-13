import { Zap } from 'lucide-react';
import Reveal from './Reveal';

const steps = ['Customer leaves', 'Staff forgets to ask', 'Customer forgets'];

export default function ProblemSection() {
  return (
    <section className="section-problem" id="problem">
      <div className="section-inner">
        <span className="eyebrow">The problem</span>
        <Reveal as="h2" className="section-heading">
          Most happy customers never leave a review.
        </Reveal>
        <Reveal as="p" className="section-sub">
          Not because they weren't satisfied — because nobody asked while the experience was still
          fresh.
        </Reveal>

        <div className="problem-layout">
          <Reveal className="problem-flow">
            {steps.map((step) => (
              <div key={step}>
                <div className="problem-step">
                  <span className="dot" />
                  {step}
                </div>
                <div className="problem-connector" />
              </div>
            ))}
            <div className="problem-step final">
              <span className="dot" />
              Business gets no review
            </div>
          </Reveal>

          <Reveal delay={0.1} className="problem-resolve">
            <span className="problem-resolve-badge">
              <Zap size={18} strokeWidth={2.25} />
            </span>
            <div>
              <strong>Milo automates the entire follow-up.</strong>
              <p>
                The moment a customer visits, Milo sends the WhatsApp message — every time,
                automatically, without relying on staff to remember.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

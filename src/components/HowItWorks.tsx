import Reveal from './Reveal';

const steps = [
  { num: '01', text: 'Customer completes a purchase' },
  { num: '02', text: 'They receive a WhatsApp message' },
  { num: '03', text: 'They tap the link and leave a Google review' },
];

export default function HowItWorks() {
  return (
    <section className="section-steps" id="how-it-works">
      <div className="section-inner">
        {steps.map((step, i) => (
          <Reveal key={step.num} className="step" delay={i * 0.12}>
            <span className="step-num">{step.num}</span>
            <p className="step-text">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

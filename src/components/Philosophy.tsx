import Reveal from './Reveal';

const lines = [
  { text: 'No follow-ups.', delay: 0.05 },
  { text: 'No spreadsheets.', delay: 0.15 },
  { text: 'No awkward asking.', delay: 0.25 },
  { text: 'Just automated review requests.', delay: 0.4, strong: true },
];

export default function Philosophy() {
  return (
    <section className="section-philosophy">
      <div className="section-inner">
        <Reveal as="h2" className="philosophy-statement">
          Your staff shouldn't have to remember.
        </Reveal>
        <div className="philosophy-lines">
          {lines.map((line) => (
            <Reveal as="p" key={line.text} delay={line.delay} className={line.strong ? 'strong' : ''}>
              {line.text}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

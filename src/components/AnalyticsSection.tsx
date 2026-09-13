import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const funnel = [
  { label: 'Messages Sent', value: 1284, pct: 100 },
  { label: 'Messages Delivered', value: 1233, pct: 96 },
  { label: 'Messages Read', value: 1040, pct: 81 },
  { label: 'Customer Responses', value: 437, pct: 34 },
  { label: 'Positive Feedback', value: 373, pct: 29 },
  { label: 'Google Review Clicks', value: 270, pct: 21 },
  { label: 'Google Reviews', value: 192, pct: 15 },
];

export default function AnalyticsSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setFilled(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-analytics" id="analytics">
      <div className="section-inner">
        <span className="eyebrow">Analytics</span>
        <Reveal as="h2" className="section-heading">
          See exactly where customers drop off.
        </Reveal>
        <Reveal as="p" className="section-sub">
          Every message tracked from send to review, so you know what's working.
        </Reveal>

        <Reveal delay={0.1} className="analytics-panel">
          <div ref={panelRef}>
            {funnel.map((row) => (
              <div className="funnel-row" key={row.label}>
                <span className="funnel-label">{row.label}</span>
                <span className="funnel-track">
                  <span
                    className="funnel-fill"
                    style={{ width: filled ? `${row.pct}%` : '0%' }}
                  />
                </span>
                <span className="funnel-value">{row.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="analytics-note">Example data from an active account.</p>
      </div>
    </section>
  );
}

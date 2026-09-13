import { Building2, Check } from 'lucide-react';
import Reveal from './Reveal';

const locations = [
  { name: 'Café A', meta: '+91 98xxxx210 · 214 customers' },
  { name: 'Café B', meta: '+91 98xxxx884 · 312 customers' },
  { name: 'Café C', meta: '+91 98xxxx047 · 189 customers' },
  { name: 'Restaurant D', meta: '+91 98xxxx561 · 401 customers' },
  { name: 'Hotel E', meta: '+91 98xxxx738 · 268 customers' },
];

export default function MultiBusiness() {
  return (
    <section className="section-multi" id="multi-business">
      <div className="section-inner">
        <div className="multi-layout">
          <Reveal className="business-tree">
            <div className="business-root">
              <Building2 size={16} strokeWidth={2.25} />
              Milo
            </div>
            {locations.map((loc) => (
              <div className="business-row" key={loc.name}>
                <span className="business-icon">
                  <Building2 size={14} strokeWidth={2} />
                </span>
                <div>
                  <div className="business-name">{loc.name}</div>
                  <div className="business-meta">{loc.meta}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="multi-copy">
            <span className="eyebrow">Built to scale</span>
            <h2 className="section-heading">One platform. Every location.</h2>
            <p className="section-sub">
              Run one café or fifty. Each business keeps its own number, campaigns, and reviews —
              managed from a single Milo account.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} strokeWidth={2.5} />
                Separate WhatsApp number per business
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} />
                Separate campaigns and customer lists
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} />
                Separate analytics and Google Business profile
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} />
                Built for multi-location businesses and agencies
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

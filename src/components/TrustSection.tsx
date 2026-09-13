import { Coffee, UtensilsCrossed, Scissors, Hotel, ShoppingBag, Wrench } from 'lucide-react';
import Reveal from './Reveal';

const useCases = [
  { icon: Coffee, label: 'Cafés' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Scissors, label: 'Salons' },
  { icon: Hotel, label: 'Hotels' },
  { icon: ShoppingBag, label: 'Retail Stores' },
  { icon: Wrench, label: 'Local Services' },
];

export default function TrustSection() {
  return (
    <section className="section-trust">
      <div className="section-inner">
        <Reveal as="h2" className="trust-heading">
          Built for businesses that care about their reputation.
        </Reveal>
        <div className="trust-grid">
          {useCases.map((u, i) => (
            <Reveal key={u.label} as="span" className="trust-chip" delay={i * 0.05}>
              <u.icon size={16} strokeWidth={2} />
              {u.label}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

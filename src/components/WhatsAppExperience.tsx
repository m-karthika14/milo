import { ArrowRight, Check, Clock, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

export default function WhatsAppExperience() {
  return (
    <section className="section-whatsapp" id="whatsapp">
      <div className="section-inner">
        <div className="whatsapp-layout">
          <Reveal className="whatsapp-copy">
            <span className="eyebrow">The conversation</span>
            <h2 className="section-heading">A message customers actually respond to.</h2>
            <p className="section-sub">
              Milo writes like your business, not a bot. Every follow-up is short, personal, and
              sent from a number your customers already trust.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} strokeWidth={2.5} />
                Sent within minutes of the visit, while the experience is fresh
              </li>
              <li>
                <Clock size={16} strokeWidth={2.5} />
                Delivery and read receipts tracked automatically
              </li>
              <li>
                <ShieldCheck size={16} strokeWidth={2.5} />
                Low ratings are routed to feedback, not a public review
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="chat-card">
            <div className="chat-header">
              <span className="chat-avatar">BH</span>
              <div>
                <div className="chat-name">Brew House</div>
                <div className="chat-sub">via Milo · WhatsApp Business</div>
              </div>
            </div>
            <div className="chat-messages">
              <div className="chat-bubble out">Hi Rahul 👋 Thanks for visiting Brew House today!</div>
              <div className="chat-bubble out">We'd love to know how your experience was.</div>
              <div className="chat-bubble in">★★★★★</div>
              <div className="chat-bubble out">That's great! 🙌</div>
              <div className="chat-bubble out">
                Would you mind sharing your experience on Google?
              </div>
              <span className="chat-cta">
                Leave a Google Review <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

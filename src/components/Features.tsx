import {
  MessageCircle,
  RefreshCw,
  Star,
  ClipboardCheck,
  BarChart3,
  Building2,
  Users,
  Send,
} from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    desc: 'Send personalized follow-ups the moment a customer walks out the door.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Follow-ups',
    desc: 'No staff reminders, no spreadsheets — every visit triggers itself.',
  },
  {
    icon: Star,
    title: 'Google Review Campaigns',
    desc: 'Route satisfied customers straight to your Google review link.',
  },
  {
    icon: ClipboardCheck,
    title: 'Customer Feedback',
    desc: 'Catch a low rating privately before it becomes a public review.',
  },
  {
    icon: BarChart3,
    title: 'Campaign Analytics',
    desc: 'See delivery, read, and conversion rates for every message you send.',
  },
  {
    icon: Building2,
    title: 'Multi-location Management',
    desc: "Run every branch's WhatsApp number and reviews from one account.",
  },
  {
    icon: Users,
    title: 'Customer Segmentation',
    desc: 'Target repeat visitors, first-timers, and low scorers differently.',
  },
  {
    icon: Send,
    title: 'Automated Messaging',
    desc: 'Set the message once — Milo sends it to every customer, every time.',
  },
];

export default function Features() {
  return (
    <section className="section-features" id="features">
      <div className="section-inner">
        <span className="eyebrow">Benefits</span>
        <Reveal as="h2" className="section-heading">
          Everything needed to run review requests on autopilot.
        </Reveal>

        <div className="features-grid">
          {features.map((f) => (
            <Reveal key={f.title} as="div" className="feature-card">
              <span className="feature-icon">
                <f.icon size={18} strokeWidth={2} />
              </span>
              <span className="feature-title">{f.title}</span>
              <p className="feature-desc">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { forwardRef } from 'react';

const HeroVisual = forwardRef<HTMLDivElement>((_props, ref) => (
  <div className="stage" id="stage" ref={ref}>
    <svg className="connectors" viewBox="0 0 340 500" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3ecf8e" />
          <stop offset="100%" stopColor="#6be0ac" />
        </linearGradient>
      </defs>
      <path id="path1" className="connector-line" d="M170 92 C170 140, 170 150, 170 195" pathLength={1} />
      <path id="path2" className="connector-line" d="M170 292 C170 340, 170 350, 170 385" pathLength={1} />
    </svg>

    <div className="card card-payment">
      <div className="card-row-top">
        <span className="check-icon">✓</span>
        <span className="card-label">Payment successful</span>
      </div>
      <div className="card-amount">₹840</div>
      <div className="card-meta">
        <span>Order #1842</span>
        <span>2:41 PM</span>
      </div>
    </div>

    <div className="card card-whatsapp">
      <div className="wa-header">
        <span className="wa-avatar">CB</span>
        <div className="wa-id">
          <span className="wa-name">Café Bloom</span>
          <span className="wa-status">via WhatsApp Business</span>
        </div>
      </div>
      <div className="wa-bubble">
        <p>Thanks for visiting! 👋</p>
        <p>We'd love to hear about your experience.</p>
        <p className="wa-link">Leave us a review →</p>
        <span className="wa-time">
          2:41 PM <span className="wa-ticks">✓✓</span>
        </span>
      </div>
    </div>

    <div className="card card-google">
      <div className="google-header">
        <span className="g-logo">
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </span>
        <span className="google-biz">Café Bloom · Indore</span>
      </div>
      <p className="google-q">How was your experience?</p>
      <div className="stars">
        <span className="star s1">★</span>
        <span className="star s2">★</span>
        <span className="star s3">★</span>
        <span className="star s4">★</span>
        <span className="star s5">★</span>
      </div>
      <div className="google-input">Share your experience</div>
    </div>
  </div>
));

HeroVisual.displayName = 'HeroVisual';
export default HeroVisual;

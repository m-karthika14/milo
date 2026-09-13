import { forwardRef } from 'react';

const HeroVisual = forwardRef<HTMLDivElement>((_props, ref) => (
  <div className="stage" id="stage" ref={ref}>
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

    <div className="connector connector-1" aria-hidden="true" />

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

    <div className="connector connector-2" aria-hidden="true" />

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

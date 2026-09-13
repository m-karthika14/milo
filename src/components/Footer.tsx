import { MouseEvent } from 'react';
import { scrollToId } from '../utils/scrollTo';

function anchor(id: string) {
  return (e: MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };
}

export default function Footer() {
  return (
    <footer className="footer dark-surface">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-dot" />
            Milo
          </div>
          <p>Automated customer engagement through WhatsApp.</p>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Product</span>
          <a href="#features" onClick={anchor('#features')}>
            Features
          </a>
          <a href="#how-it-works" onClick={anchor('#how-it-works')}>
            How it works
          </a>
          <span>Pricing</span>
          <span>Integrations</span>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Company</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Legal</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Milo</div>
    </footer>
  );
}

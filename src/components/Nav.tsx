import { MouseEvent } from 'react';
import { scrollToId } from '../utils/scrollTo';

function navLink(id: string) {
  return (e: MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={navLink('#top')}>
          <span className="logo-dot" />
          Milo
        </a>
        <div className="nav-links">
          <a href="#features" onClick={navLink('#features')}>
            Features
          </a>
          <a href="#how-it-works" onClick={navLink('#how-it-works')}>
            How it works
          </a>
        </div>
        <div className="nav-cta">
          <a href="#final-cta" className="btn btn-primary btn-sm" onClick={navLink('#final-cta')}>
            Start with Milo
          </a>
        </div>
      </div>
    </nav>
  );
}

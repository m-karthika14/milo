import { scrollToId } from '../utils/scrollTo';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-dot" />
          Revlo
        </div>
        <a
          href="#final-cta"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToId('#final-cta');
          }}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

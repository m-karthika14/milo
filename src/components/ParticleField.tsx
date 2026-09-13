import { RefObject, useEffect, useRef } from 'react';
import { isReducedMotion } from '../utils/scrollTo';

type Dot = { x: number; y: number; r: number; vy: number; o: number };

export default function ParticleField({ heroRef }: { heroRef: RefObject<HTMLElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = isReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots: Dot[] = [];
    let raf = 0;

    function resize() {
      const rect = hero!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width = `${rect.width}px`;
      canvas!.style.height = `${rect.height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((rect.width * rect.height) / 26000);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 1.4 + 0.4,
        vy: -(Math.random() * 0.12 + 0.04),
        o: Math.random() * 0.4 + 0.15,
      }));
    }

    function draw() {
      const rect = hero!.getBoundingClientRect();
      ctx!.clearRect(0, 0, rect.width, rect.height);
      dots.forEach((d) => {
        d.y += d.vy;
        if (d.y < -4) {
          d.y = rect.height + 4;
          d.x = Math.random() * rect.width;
        }
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(62,207,142,${d.o})`;
        ctx!.fill();
      });
      if (!reduced) raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    if (reduced) {
      draw();
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [heroRef]);

  return <canvas className="hero-particles" ref={canvasRef} aria-hidden="true" />;
}

export function isReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function scrollToId(id: string): void {
  const target = document.querySelector(id);
  if (!target) return;
  target.scrollIntoView({
    behavior: isReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

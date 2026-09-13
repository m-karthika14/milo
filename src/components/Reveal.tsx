import { createElement, ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export default function Reveal({ as = 'div', delay = 0, className = '', children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      className: ['reveal-up', visible ? '' : 'pending', className].filter(Boolean).join(' '),
      style: { transitionDelay: `${delay}s` },
    },
    children
  );
}

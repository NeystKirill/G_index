import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rev');
    const observers = [];
    els.forEach(el => {
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          el.classList.add('in');
          obs.disconnect();
        }
      }, { threshold: 0.09 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
}
